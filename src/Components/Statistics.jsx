import React, { useState } from 'react';
import "./stats.css";
import AdvancedStats from './AdvancedStats';

const Statistics = () => {
    const [emptyInput, setEmptyInput] = useState(false);
    const [shortenedLink, setShortenedLink] = useState('');
    const [actualLink, setActualLink] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [copied, setCopied] = useState(false); // New state for button text and color

    const handleInput = async (e) => {
        e.preventDefault();

        const inputLink = e.target.link.value.trim();

        if (inputLink === "") {
            setEmptyInput(true);
            setErrorMessage('');
        } else {
            setEmptyInput(false);
            setErrorMessage('');
            try {
                const response = await fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(inputLink)}`, {
                    method: 'GET',
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.shorturl) {
                        setShortenedLink(data.shorturl);
                        setActualLink(inputLink);
                    } else {
                        setErrorMessage('Unexpected response format');
                    }
                } else {
                    setErrorMessage('Failed to shorten the link');
                }
            } catch (error) {
                setErrorMessage('Error: ' + error.message);
            }
        }
    };

    const handleCopy = () => {
        if (shortenedLink) {
            navigator.clipboard.writeText(shortenedLink).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
            }).catch((error) => {
                console.error('Failed to copy: ', error);
            });
        }
    };

    return (
        <div className='bg-[#f0f1f6] pb-24 mt-40 relative'>
            <div className="inputBox w-[80%] py-12 px-16 bg-[#3b3054] rounded-xl mx-auto absolute -top-20 left-1/2 transform -translate-x-1/2">
                <form onSubmit={handleInput} className='flex flex-col gap-2'>
                    <div className='flex gap-6'>
                        <input
                            type="text"
                            name='link'
                            placeholder='Shorten a link here'
                            className={`w-full py-4 rounded-xl bg-white font-semibold text-lg px-6 text-[#9E9AA7] ${emptyInput ? 'border-4 border-red-400' : 'border-none'}`}
                        />
                        <button
                            type='submit'
                            className={`w-[20%] bg-[#2ACFCF] px-8 py-2 rounded-xl text-white text-lg font-bold hover:bg-[#60f0f0ec] transition-colors delay-75 ease-in`}
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

            {shortenedLink &&
                <div className='w-[80%] mx-auto pt-28 mt-4'>
                    <div className='w-full bg-white py-5 rounded-lg px-5 flex justify-between items-center'>
                        <h3 className='text-[#35323E] text-[15px] font-semibold w-[65%]'>
                            {actualLink}
                        </h3>
                        <div className='flex gap-5 justify-end items-center w-[35%]'>
                            <h3 className='text-[15px] text-[#2acfcf] font-semibold'>
                                <a href={shortenedLink} target="_blank" rel="noopener noreferrer" className='text-blue-500 underline'>{shortenedLink}</a>
                            </h3>

                            <button
                                onClick={handleCopy}
                                className={`w-[20%] px-3 py-2 rounded-md text-white text-[13px] font-bold ${copied ? 'bg-[#3b3054]' : 'bg-[#2ACFCF]'} transition-colors delay-75 ease-in`}
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                </div>
            }
            <AdvancedStats />
        </div>
    );
};

export default Statistics;
