import React from 'react';
import logo from "../assets/logo.svg"

const Navbar = () => {
    return (
        <div>
            <div className='h-[20vh] flex justify-between items-center w-[80%] mx-auto'>
                <div className='flex gap-8 items-center'>
                    <img className='w-[120px] cursor-pointer' src={logo} alt="" />

                    <ul className='text-[#9E9AA7] text-[15px] font-bold flex gap-6 items-center'>
                        <li className='hover:text-[#35323E] cursor-pointer'>Features</li>
                        <li className='hover:text-[#35323E] cursor-pointer'>Pricing</li>
                        <li className='hover:text-[#35323E] cursor-pointer'>Resources</li>
                    </ul>
                </div>

                <div className='flex items-center gap-8'>
                    <p className='text-[#9E9AA7] text-[15px] font-bold hover:text-[#35323E] cursor-pointer'>
                        Login
                    </p>

                    <button className='bg-[#2ACFCF] px-5 py-2 rounded-[40px] text-white text-[15px] font-bold hover:bg-[#2acfcfb4] transition-colors delay-75 ease-in'>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;