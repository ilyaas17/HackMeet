import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import logo from '../../assets/logo.jpeg';
import { Link } from 'react-router-dom';

function Footer() {
    const sections = [
        {
            title: 'Company',
            links: [
                { text: 'About Us', href: '/about', target:'_blank' },
                { text: 'Contact Us', href: '/contact', target:'_blank' },
                { text: 'Careers', href: '/careers', target:'_blank' },
                { text: 'Blog', href: '/blog', target:'_blank' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { text: 'Hackathons', href: '/hackthon', target:'_blank' },
                { text: 'Competitions', href: '/compition', target:'_blank' },
                { text: 'Organize Hackthon', href: '/organizehack', target:'_blank' },
                { text: 'Partners', href: '/partners', target:'_blank' },
            ],
        },
        {
            title: 'Support',
            links: [
                { text: 'Help Center', href: '/help', target:'_blank' },
                { text: 'Terms of Service', href: '#', target:'_blank' },
                { text: 'Privacy Policy', href: '#', target:'_blank' },
                { text: 'FAQs', href: '/faq', target:'_blank' },
            ],
        },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-8">
                        <div className="flex items-center space-x-2">
                            <Link to='/' className='flex items-center'>
                                <img src={logo} alt="HackMeet Logo" className='rounded-3xl max-h-12 max-w-20' />
                            <span className="text-4xl font-bold pl-3">HackMeet</span>
                            </Link>
                        </div>
                        <p className="text-gray-400">
                            Empowering developers and tech enthusiasts through hackathons, competitions, and community events.
                        </p>
                        <SocialLinks />
                    </div>

                    {sections.map((section) => (
                        <FooterSection
                            key={section.title}
                            title={section.title}
                            links={section.links}
                        />
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                    <p className="text-center text-gray-400">
                        © {new Date().getFullYear()} HackMeet. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

function FooterSection({ title, links }) {
    return (
        <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.text}>
                        <a
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors"
                            target={link.target}
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function SocialLinks() {
    const socialLinks = [
        { Icon: Facebook, href: '#', label: 'Facebook' },
        { Icon: Twitter, href: '#', label: 'Twitter' },
        { Icon: Linkedin, href: '#', label: 'LinkedIn' },
        { Icon: Instagram, href: '#', label: 'Instagram' },
        { Icon: Youtube, href: '#', label: 'YouTube' },
    ];

    return (
        <div className="flex space-x-4">
            {socialLinks.map(({ Icon, href, label }) => (
                <a
                    key={label}
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={label}
                >
                    <Icon className="w-5 h-5" />
                </a>
            ))}
        </div>
    );
}

export default Footer;