import React, { useState } from 'react';
import logo from "../assets/logo.svg";
import menuIcon from "../assets/icon-menu.svg";
import './navbar.css'; 

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <div className='h-[20vh] justify-between items-center w-[80%] mx-auto hidden lg:flex'>
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

            <div className='h-[20vh] justify-between items-center w-[80%] mx-auto flex lg:hidden'>
                <img className='w-[120px] cursor-pointer' src={logo} alt="" />
                <button onClick={handleMenu}>
                    <img className='w-[40px]' src={menuIcon} alt="" />
                </button>
            </div>

            {showMenu && (
                <div className={`bg-[#3b3054] w-[90%] mx-auto h-fit rounded-2xl menuDiv lg:hidden slide-in`}>
                    <ul className='text-white text-center p-8 flex justify-center items-center flex-col gap-6'>
                        <li className='hover:text-[#35323E] cursor-pointer text-lg font-bold'>Features</li>
                        <li className='hover:text-[#35323E] cursor-pointer text-lg font-bold'>Pricing</li>
                        <li className='hover:text-[#35323E] cursor-pointer text-lg font-bold'>Resources</li>
                    </ul>
                    <hr className='border border-gray-600 w-[90%] mx-auto'/>
                    <div className='text-center p-8 flex justify-center items-center flex-col gap-6'>
                        <p className='text-white hover:text-[#35323E] cursor-pointer text-lg font-bold'>Login</p>
                        <button className='bg-[#2ACFCF] w-full px-5 py-3 rounded-[40px] text-white text-[15px] font-bold hover:bg-[#2acfcfb4] transition-colors delay-75 ease-in'>
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
