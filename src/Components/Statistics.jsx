import React from 'react';
import "./stats.css"

const Statistics = () => {
    return (
        <div className='bg-[#f0f1f6] pt-40 pb-24 mt-40 relative'>
            <div class="inputBox w-[80%] py-12 px-16 bg-[#3b3054] rounded-xl mx-auto absolute -top-20 left-1/2 transform -translate-x-1/2">
                <form className='flex gap-6'>
                    <input className='w-full py-4 rounded-xl bg-white font-semibold text-lg px-6 text-[#9E9AA7]' type="text" placeholder='Shorten a link here' />

                    <button className='w-[20%] bg-[#2ACFCF] px-8 py-2 rounded-xl text-white text-lg font-bold hover:bg-[#60f0f0ec] transition-colors delay-75 ease-in'>
                       Shorten It!
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Statistics;