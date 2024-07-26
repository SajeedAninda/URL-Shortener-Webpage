import React from 'react';
import logo from '../assets/logo.svg';
import "./footer.css"
import fbLogo from "../assets/icon-facebook.svg";
import twitterLogo from "../assets/icon-twitter.svg";
import pinterestLogo from "../assets/icon-pinterest.svg";
import instaLogo from "../assets/icon-instagram.svg";

const Footer = () => {
    return (
        <div className=' bg-[#232127]'>
            <div className="py-16 w-[80%] mx-auto text-white">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    <div className="mb-6 md:mb-0">
                        <img src={logo} className='logo text-white fill-white' alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16 mb-6 md:mb-0">
                        <div>
                            <h4 className="font-semibold mb-2">Features</h4>
                            <ul className='space-y-3 mt-5'>
                                <li><a href="#" className="text-[#9E9AA7] hover:text-[#2acfcf] transition-colors delay-75">Link Shortening</a></li>
                                <li><a href="#" className="text-[#9E9AA7] hover:text-[#2acfcf] transition-colors delay-75">Branded Links</a></li>
                                <li><a href="#" className="text-[#9E9AA7] hover:text-[#2acfcf] transition-colors delay-75">Analytics</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Resources</h4>
                            <ul className='space-y-3 mt-5'>
                                <li><a href="#" className="text-[#9E9AA7] hover:text-[#2acfcf] transition-colors delay-75">Blog</a></li>
                                <li><a href="#" className="text-[#9E9AA7] hover:text-[#2acfcf] transition-colors delay-75">Developers</a></li>
                                <li><a href="#" className="text-[#9E9AA7] hover:text-[#2acfcf] transition-colors delay-75">Support</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Company</h4>
                            <ul className='space-y-3 mt-5 '>
                                <li><a href="#" className="text-[#9E9AA7] hover:text-[#2acfcf] transition-colors delay-75">About</a></li>
                                <li><a href="#" className="text-[#9E9AA7] hover:text-[#2acfcf] transition-colors delay-75">Our Team</a></li>
                                <li><a href="#" className="text-[#9E9AA7] hover:text-[#2acfcf] transition-colors delay-75">Careers</a></li>
                                <li><a href="#" className="text-[#9E9AA7] hover:text-[#2acfcf] transition-colors delay-75">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        <img className='hover:opacity-70 cursor-pointer' src={fbLogo} alt="" />
                        <img className='hover:opacity-70 cursor-pointer' src={twitterLogo} alt="" />
                        <img className='hover:opacity-70 cursor-pointer' src={pinterestLogo} alt="" />
                        <img className='hover:opacity-70 cursor-pointer' src={instaLogo} alt="" />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
