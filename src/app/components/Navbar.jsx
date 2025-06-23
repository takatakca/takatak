"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
    { id: 1, title: "AI Automation"},
    { id: 2, title: "Marketing" },
    { id: 3, title: "CRM Integration" },
    { id: 4, title: "University", url: "/university" },
    {
        id: 5,
        title: "More",
        subLinks: [
            { id: 's1', title: "Website Design", url: "/services/web-design" },
            { id: 's2', title: "Branding & Design", url: "/services/Branding & Design" },
            { id: 's3', title: "SEO Services", url: "/services/SEO Services" },
            { id: 's4', title: "Hosting Services", url: "/services/Hosting Services" },
            { id: 's5', title: "E-Commerce", url: "/services/E-Commerce" },
            { id: 's6', title: "Digital Advertising", url: "/services/Digital Advertising" },
            { id: 's7', title: "CRM & ERP Solutions", url: "/services/CRM & ERP Solutions" },
            { id: 's8', title: "Software & Applications", url: "/services/Software & Applications" },
            { id: 's9', title: "Social Media Management (SMO)", url: "/services/Social Media Management (SMO)" },
            { id: 's10', title: "PPC & Paid Advertising", url: "/services/PPC & Paid Advertising" },
            { id: 's11', title: "Google & Bing Ads", url: "/services/Google & Bing Ads" },
            { id: 's12', title: "Email Hosting & Automation", url: "/services/Email Hosting & Automation" },
        ]
    },
    { id: 6, title: "signup", url: "/signup" },
    { id: 7, title: "login", url: "/login" }
]

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='bg-gradient-to-r from-blue-700 to-[#4ca8ea] text-white rounded-t-[20px]'>
            {/* Top navbar */}
            <div className='flex justify-between items-center h-[50px] px-4 lg:px-8 nav'>
                <Link href="/" className="font-bold text-lg">takatak.ca</Link>

                {/* Mobile menu toggle button */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className="lg:hidden"
                    aria-label="Open Menu"
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Desktop menu */}
                <div className='hidden lg:flex gap-6 relative'>
                    {links.map(pgs => (
                        <div
                            key={pgs.id}
                            className='relative '
                            onMouseEnter={() => pgs.subLinks && setShowDropdown(true)}
                            onMouseLeave={() => pgs.subLinks && setShowDropdown(false)}
                        >
                            {pgs.url ? (
                                <Link href={pgs.url}>{pgs.title}</Link>
                            ) : (
                                <span className='cursor-pointer hover:underline underline-offset-4'>{pgs.title}</span>
                            )}

                            {pgs.subLinks && showDropdown && (
                                <div className='absolute top-[25px] left-0 bg-[#1e1919] text-white shadow-lg rounded z-50 w-[60vw] grid grid-cols-3 gap-[10px]'>
                                    {pgs.subLinks.map(sub => (
                                        <Link
                                            key={sub.id}
                                            href={sub.url}
                                            className='block px-4 py-2 hover:text-black hover:bg-gray-800'
                                        >
                                            {sub.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Slide-in mobile sidebar */}
            <div className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} pointer-events-auto`}>
                {/* Overlay */}
                <div
                    onClick={() => setMenuOpen(false)}
                    className={`absolute inset-0 bg-transparent bg-opacity-50`}
                />

                {/* Sidebar panel */}
                <div className='absolute right-0 top-0 h-full w-[70%] max-w-xs bg-[#1e1919] text-white p-4 overflow-y-auto sidebar '>
                    <div className="flex justify-end items-center close">
                        <button onClick={() => setMenuOpen(false)} aria-label="Close Menu" >
                            <X className="w-[35px] h-[35px] " />
                        </button>
                    </div>

                    {/* Sidebar content */}
                    <nav className="space-y-4 text-[18px] navcont">
                        {links.map(link => (
                            <div key={link.id}>
                                {link.url ? (
                                    <Link
                                        href={link.url}
                                        onClick={() => setMenuOpen(false)}
                                        className="block py-2"
                                    >
                                        {link.title}
                                    </Link>
                                ) : (
                                    <span className="block py-2">{link.title}</span>
                                )}

                                {link.subLinks && (
                                    <div className="pl-4 space-y-1 sublink flex flex-col gap-[10px] text-[20px]">
                                        {link.subLinks.map(sub => (
                                            <Link
                                                key={sub.id}
                                                href={sub.url}
                                                onClick={() => setMenuOpen(false)}
                                                className="block py-1 text-sm text-gray-300"
                                            >
                                                {sub.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar