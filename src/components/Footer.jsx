import React from 'react';

const Footer = () => {
    const navLinks = [
        { to: '#home', label: 'Home' },
        { to: '#portfolio', label: 'Portfolio' },
        { to: '#about', label: 'About Me' },
        { to: '#testimonials', label: 'Testimonials' },
    ];
    
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="text-2xl font-bold mb-6 md:mb-0">
                    Segunfunmi<span className="text-purple-400">.</span>
                </div>
                <div className="flex space-x-8 mb-6 md:mb-0">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.to} className="hover:text-purple-400 cursor-pointer">
                            {link.label}
                        </a>
                    ))}
                </div>
                <div>
                    <p className="text-gray-400 text-sm">&copy; 2025 Segunfunmi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;