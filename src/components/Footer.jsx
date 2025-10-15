import React from 'react';
import { TbHexagonLetterSFilled } from "react-icons/tb"

const Footer = () => {
    const navLinks = [
        { to: '#home', label: 'Home' },
        { to: '#portfolio', label: 'Portfolio' },
        { to: '#about', label: 'About Me' },
        { to: '#testimonials', label: 'Testimonials' },
    ];
    
    return (
        <footer  className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="owner flex items-center space-x-4 mb-6 md:mb-0">
                <TbHexagonLetterSFilled className="text-4xl" />
                <div className="text-2xl font-bold mb-6 md:mb-0">
                    Sarthak-Verse
                </div>
                </div>
                <div className="flex space-x-8 mb-6 md:mb-0">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.to} className="hover:text-purple-400 cursor-pointer">
                            {link.label}
                        </a>
                    ))}
                </div>
                <div>
                    <p className="text-gray-400 text-sm">&copy; 2025 Sarthak-Verse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;