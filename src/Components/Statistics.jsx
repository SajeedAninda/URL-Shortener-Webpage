import React, { useState } from 'react';
import "./stats.css"
import AdvancedStats from './AdvancedStats';

const Statistics = () => {
    let [emptyInput, setEmptyInput] = useState(false);

    let handleInput = (e) => {
        e.preventDefault();

        let inputLink = e.target.link.value;

        if (inputLink === "") {
            setEmptyInput(true);
        }
        console.log(inputLink);
    }

    return (
        <div className='bg-[#f0f1f6] pt-48 pb-24 mt-40 relative'>
            <div class="inputBox w-[80%] py-12 px-16 bg-[#3b3054] rounded-xl mx-auto absolute -top-20 left-1/2 transform -translate-x-1/2">
                <form onSubmit={handleInput} className='flex flex-col gap-2'>
                    <div className='flex gap-6'>
                        <input type="text" name='link' placeholder='Shorten a link here' className={`w-full py-4 rounded-xl bg-white font-semibold text-lg px-6 text-[#9E9AA7] ${emptyInput ? 'border-4 border-red-400' : 'border-none'}`} />

                        <button type='submit' className={`w-[20%] bg-[#2ACFCF] px-8 py-2 rounded-xl text-white text-lg font-bold hover:bg-[#60f0f0ec] transition-colors delay-75 ease-in}`}>
                            Shorten It!
                        </button>
                    </div>

                    {
                        emptyInput &&
                        <p className='text-[15px] text-red-400 font-semibold'>
                            Please add a link
                        </p>
                    }
                </form>
            </div>

            <AdvancedStats></AdvancedStats>
        </div>
    );
};

export default Statistics;