import React from 'react';
import illustration from "../assets/illustration-working.svg"

const Hero = () => {
    return (
        <div className='heroDiv relative overflow-hidden'>
            <div className='lg:h-[80vh] w-[90%] lg:w-[80%] mx-auto flex flex-col-reverse lg:flex-row justify-between items-center'>
                <div className="textDiv flex-1 flex justify-center items-center flex-col text-center mt-10 lg:mt-0 lg:justify-start lg:items-start lg:text-left">
                    <h1 className='text-[40px] lg:text-[70px] text-[#35323E] font-bold lg:leading-[80px]'>
                        More than just <br /> shorter links
                    </h1>

                    <p className='text-[22px] font-bold mt-1 text-[#9E9AA7]'>
                        Build your brand’s recognition and get detailed <br /> insights on how your links are performing.
                    </p>

                    <button className=' mt-8 bg-[#2ACFCF] px-8 py-3 rounded-[40px] text-white text-[22px] font-bold hover:bg-[#2acfcfb4] transition-colors delay-75 ease-in'>
                        Get Started
                    </button>
                </div>

                <div className='imgDiv flex-1 lg:absolute lg:-right-32 overflow-hidden'>
                    <img className='overflow-hidden' src={illustration} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;