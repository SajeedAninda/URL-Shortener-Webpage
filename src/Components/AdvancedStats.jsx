import React from 'react';
import brandIcon from "../assets/icon-brand-recognition.svg";
import recordIcon from "../assets/icon-detailed-records.svg";
import customizableIcon from "../assets/icon-fully-customizable.svg";

const AdvancedStats = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center  pt-48 w-[80%] mx-auto'>
                <h1 className='text-[40px] text-[#35323E] font-bold text-center'>
                    Advanced Statistics
                </h1>
                <p className='text-[18px] font-medium text-[#9E9AA7] mt-3 w-[80%] lg:w-[40%] mx-auto text-center'>
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </p>
            </div>

            <div className='relative'>
                <div className='grid grid-cols-1 lg:grid-cols-3 w-[80%] mx-auto mt-20 gap-8 relative z-10'>
                    <div className='bg-white h-fit px-10 pt-16 pb-10 rounded-xl shadow-sm relative'>
                        <div className='w-[85px] h-[85px] rounded-full bg-[#3b3054] absolute -top-10 flex justify-center items-center'>
                            <img className='text-white' src={brandIcon} alt="" />
                        </div>

                        <h3 className='text-[#35323E] text-[22px] font-bold'>
                            Brand Recognition
                        </h3>
                        <p className='text-[15px] font-medium text-[#9E9AA7] mt-3 leading-[25px]'>
                            Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
                        </p>
                    </div>

                    <div className='bg-white h-fit px-10 pt-16 pb-10 rounded-xl shadow-sm relative mt-10'>
                        <div className='w-[85px] h-[85px] rounded-full bg-[#3b3054] absolute -top-10 flex justify-center items-center'>
                            <img className='text-white' src={recordIcon} alt="" />
                        </div>

                        <h3 className='text-[#35323E] text-[22px] font-bold'>
                            Detailed Records
                        </h3>
                        <p className='text-[15px] font-medium text-[#9E9AA7] mt-3 leading-[25px]'>
                            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                        </p>
                    </div>

                    <div className='bg-white h-fit px-10 pt-16 pb-10 rounded-xl shadow-sm relative mt-20'>
                        <div className='w-[85px] h-[85px] rounded-full bg-[#3b3054] absolute -top-10 flex justify-center items-center'>
                            <img className='text-white' src={customizableIcon} alt="" />
                        </div>

                        <h3 className='text-[#35323E] text-[22px] font-bold'>
                            Fully Customizable
                        </h3>
                        <p className='text-[15px] font-medium text-[#9E9AA7] mt-3 leading-[25px]'>
                            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                        </p>
                    </div>

                </div>
                <hr className='w-[50%] absolute top-36 mx-auto bg-[#2acfcf] border-4 border-[#2acfcf]  left-1/2 transform -translate-x-1/2' />
            </div>
        </div>
    );
};

export default AdvancedStats;