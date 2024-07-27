import React from 'react';
import "./boostLinks.css"

const BoostLinks = () => {
    return (
        <div className='w-full boostBg py-12 bg-[#3b3054] flex flex-col justify-center items-center'>
            <h1 className='text-[40px] font-bold text-white text-center lg:text-left'>
                Boost your links today
            </h1>
            <button className=' mt-8 bg-[#2ACFCF] px-8 py-3 rounded-[40px] text-white text-[18px] font-bold hover:bg-[#2acfcfb4] transition-colors delay-75 ease-in'>
                Get Started
            </button>
        </div>
    );
};

export default BoostLinks;