import React, { useState, useEffect } from 'react';
import "./stats.css";
import AdvancedStats from './AdvancedStats';
import { MutatingDots } from 'react-loader-spinner';

const Statistics = () => {
    const [emptyInput, setEmptyInput] = useState(false);
    const [shortenedLink, setShortenedLink] = useState('');
    const [actualLink, setActualLink] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [copiedIndex, setCopiedIndex] = useState(null);
    const [loading, setLoading] = useState(false);
    const [storedLinks, setStoredLinks] = useState([]);

    useEffect(() => {
        const links = JSON.parse(localStorage.getItem('shortenedLinks')) || [];
        setStoredLinks(links);
    }, []);

    const handleInput = async (e) => {
        e.preventDefault();

        const inputLink = e.target.link.value.trim();

        if (inputLink === "") {
            setEmptyInput(true);
            setErrorMessage('');
        } else {
            setEmptyInput(false);
            setErrorMessage('');
            
            const existingLink = storedLinks.find(link => link.original === inputLink);
            if (existingLink) {
                setErrorMessage('This link has already been shortened.');
                return;
            }

            setLoading(true);
            try {
                const response = await fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(inputLink)}`, {
                    method: 'GET',
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.shorturl) {
                        const newLink = { original: inputLink, shortened: data.shorturl };
                        setShortenedLink(data.shorturl);
                        setActualLink(inputLink);
                        const updatedLinks = [newLink, ...storedLinks];
                        setStoredLinks(updatedLinks);
                        localStorage.setItem('shortenedLinks', JSON.stringify(updatedLinks));
                    } else {
                        setErrorMessage('Unexpected response format');
                    }
                } else {
                    setErrorMessage('Failed to shorten the link');
                }
            } catch (error) {
                setErrorMessage('Error: ' + error.message);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleCopy = (index, link) => {
        if (link) {
            navigator.clipboard.writeText(link).then(() => {
                setCopiedIndex(index);
                setTimeout(() => setCopiedIndex(null), 2000);
            }).catch((error) => {
                console.error('Failed to copy: ', error);
            });
        }
    };

    const handleClearAll = () => {
        localStorage.removeItem('shortenedLinks');
        setStoredLinks([]);
    };

    return (
        <div className='bg-[#f0f1f6] pb-24 mt-40 relative'>
            <div className="inputBox w-[90%] lg:w-[80%] py-12 px-6 lg:px-16 bg-[#3b3054] rounded-xl mx-auto absolute -top-20 left-1/2 transform -translate-x-1/2">
                <form onSubmit={handleInput} className='flex flex-col gap-2'>
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <input
                            type="text"
                            name='link'
                            placeholder='Shorten a link here'
                            className={`w-full py-4 rounded-xl bg-white font-semibold text-lg px-6 text-[#9E9AA7] ${emptyInput ? 'border-4 border-red-400' : 'border-none'}`}
                        />
                        <button
                            type='submit'
                            className={`w-full lg:w-[20%] bg-[#2ACFCF] px-8 py-2 rounded-xl text-white text-lg font-bold hover:bg-[#60f0f0ec] transition-colors delay-75 ease-in`}
                        >
                            Shorten It!
                        </button>
                    </div>
                    {emptyInput &&
                        <p className='text-[15px] text-red-400 font-semibold'>
                            Please add a link
                        </p>
                    }
                    {errorMessage &&
                        <p className='text-[15px] text-red-400 font-semibold'>
                            {errorMessage}
                        </p>
                    }
                </form>
            </div>

            {loading &&
                <div className='flex justify-center items-center pt-32'>
                    <MutatingDots
                        visible={true}
                        height="100"
                        width="100"
                        color="#3b3054"
                        secondaryColor="#2acfcf"
                        radius="12.5"
                        ariaLabel="mutating-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            }

            {storedLinks.length > 0 && !loading &&
                <div className='w-[80%] mx-auto pt-32 mt-4'>
                    {storedLinks.map((link, index) => (
                        <div key={index} className='w-full bg-white py-5 rounded-lg px-5 flex justify-between items-center mb-4'>
                            <h3 className='text-[#35323E] text-[15px] font-semibold w-[65%]'>
                                {link.original}
                            </h3>
                            <div className='flex gap-5 justify-end items-center w-[35%]'>
                                <h3 className='text-[15px] text-[#2acfcf] font-semibold'>
                                    <a href={link.shortened} target="_blank" rel="noopener noreferrer" className='text-blue-500 underline'>{link.shortened}</a>
                                </h3>
                                <button
                                    onClick={() => handleCopy(index, link.shortened)}
                                    className={`w-[20%] px-3 py-2 rounded-md text-white text-[13px] font-bold ${copiedIndex === index ? 'bg-[#3b3054]' : 'bg-[#2ACFCF]'} transition-colors delay-75 ease-in`}
                                >
                                    {copiedIndex === index ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className='flex justify-end'>
                        <button
                            onClick={handleClearAll}
                            className='bg-red-500 text-white px-6 py-2 rounded-md font-bold hover:bg-red-700 transition-colors delay-75 ease-in'
                        >
                            Clear All
                        </button>
                    </div>
                </div>
            }
            <AdvancedStats />
        </div>
    );
};

export default Statistics;
