"use client";
import { useState } from "react";
import styles from "./page.module.css"
import { TbWorldWww } from "react-icons/tb";
import {  ShoppingCart,  Globe, SearchCheck, Smartphone,  MapPin,  PhoneCall,  Plane,  Users,  Heart,  Building,  Menu,  X,} from "lucide-react";

const links = [
    { id: 1, title: "Domain", url:"/domain", icon:<TbWorldWww size={23}/>},
    { id: 2, title: "Hosting", url:"/hosting", icon:<img src="/img/host.png" width={20} height={20} alt="Hosting" style={{ filter: "invert(1)" }}/>},
    { id: 3, title: "Web & Hosting", icon: <img src="/img/webhost.png" width={20} height={20} alt="Hosting" /> },
    { id: 4, title: "Mobile Apps", icon: <Smartphone size={16} /> },
    { id: 5, title: "Local Listings", icon:<MapPin size={16} /> },
    { id: 6, title: "Lead Generation", icon:<Users size={16} /> },
    { id: 7, title: "VoIP Phone", icon:<PhoneCall size={16} />  },
    { id: 8, title: "Cuba Travel", icon:<Plane size={16} />  },
    { id: 9, title: "Social Platform", icon:<Users size={16} /> },
    { id: 10, title: "Dating", icon:<Heart size={16} />  },
    { id: 11, title: "Property Management", icon:<Building size={16} /> },
]

export default function Navbar() {
  const [selectedService, setSelectedService] = useState("All Services");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 bg-[black] flex flex-col gap-[20px] ${styles.topbar}`}>
      {/* Top Bar */}
      <div className={`text-white text-xs md:text-sm flex justify-between px-2  ${styles.hd}`}>
        <p className="truncate">THE AMAZON OF SERVICES | Quebec to Cuba | 1-800-TAKATAK</p>
        <p className="hidden md:block">Free setup on all business packages | 24/7 Support</p>
      </div>

      {/* Main Navbar */}
      <div className={`text-white flex items-center justify-between shadow ${styles.logo}`}>
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-[white]">TAKATAK</div>

        {/* Search Section (hidden on mobile, full on md+) */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-md overflow-hidden w-1/2">
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className={`px-3 py-2 text-sm  outline-none border-r border-gray-300 ${styles.search}`}
          >
            <option className="text-white">All Services</option>
            <option className="text-black">Domain</option>
            <option className="text-black">Hosting</option>
            <option className="text-black">Web & Hosting</option>
            <option className="text-black">Mobile Apps</option>
            <option className="text-black">Local Listings</option>
            <option className="text-black">Lead Generation</option>
            <option className="text-black">VoIP Phone</option>
            <option className="text-black">Travel Cuba</option>
            <option className="text-black">Social Platform</option>
            <option className="text-black">Dating</option>
            <option className="text-black">Property Management</option>
          </select>
          <input
            type="text"
            placeholder="Search all business solutions..."
            className={`flex-1 outline-none ${styles.search}`}
          />
          <button className={`bg-blue-600 text-white hover:bg-blue-700 ${styles.icon}`}>
          <SearchCheck />
          </button>
        </div>

        {/* Account + Cart + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-sm">
              <p>Hello, sign in</p>
              <p className="font-semibold cursor-pointer">Account</p>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <ShoppingCart size={22} />
              <span className="text-sm font-semibold">Cart (0)</span>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className={`md:hidden ${styles.mobsearc}`}>
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className={`px-2 py-2 text-sm outline-none border-r border-gray-300 ${styles.selec}`}
          >
            <option>All Services</option>
            <option>Web & Hosting</option>
            <option>Mobile Apps</option>
            <option>Local Listings</option>
            <option>Lead Generation</option>
            <option>VoIP Phone</option>
            <option>Travel Cuba</option>
            <option>Social Platform</option>
            <option>Dating</option>
            <option>Property Management</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            className={`flex-1 px-2 py-2 outline-none text-sm ${styles.inpt}`}
          />
          
          <button className={`bg-blue-600 text-white hover:bg-blue-700 ${styles.icon}`}>
          <SearchCheck />
          </button>
        </div>
      </div>

      {/* Secondary Menu */}
      <div className={`flex items-center justify-start gap-3  md:px-6 py-2 text-sm text-white overflow-x-auto no-scrollbar ${styles.deal}`}>
        {/* Today's Deals */}
        <button className={`bg-blue-500 px-3 py-1 rounded-sm font-semibold whitespace-nowrap hover:bg-blue-600 ${styles.deal}`}>
          Today&apos;s Deals
        </button>

        {/* Scrollable Links */}
        <div className="flex items-center gap-[30px]">
          {links.map((deal, index)=>(
            <div key={index} className="flex items-center gap-1 hover:text-orange-400 whitespace-nowrap">
              {deal.icon}
              {deal.title}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-3">
          <p className="font-semibold cursor-pointer">Account</p>
          <p className="cursor-pointer">Cart (0)</p>
        </div>
      )}
    </div>
  );
}


// "use client"
// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'
// import styles from "../navbar/page.module.css";
// import { Menu, X } from 'lucide-react'

// const links = [
//     { id: 1, title: "AI Automation", },
//     { id: 2, title: "Marketing" },
//     { id: 8, title: "Domain", url:"/domain"},
//     { id: 9, title: "Hosting", url:"/hosting"},
//     { id: 3, title: "CRM Integration" },
// ]

// const Navbar = () => {
//     const [showDropdown, setShowDropdown] = useState(false)
//     const [menuOpen, setMenuOpen] = useState(false)
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(()=>{
//         const token = sessionStorage.getItem("authToken");
//         setIsLoggedIn(!!token); // true if token exists

//         const handleStorageChange = () => {
//             const token = sessionStorage.getItem("authToken");
//             setIsLoggedIn(!!token);
//         }
        
//         // Listen to changes (optional for real-time sync across tabs)
//         window.addEventListener("storage", handleStorageChange);
//         return () => window.removeEventListener("storage", handleStorageChange);
//     }, []);

//     const filteredLinks = links.filter(link => {
//         if (isLoggedIn && (link.title.toLowerCase() === "login" || link.title.toLowerCase() === "signup")) {
//           return false; // remove login/signup if user is logged in
//         }
//         return true;
//       });
      

//     return (
//         <div className={`${styles.gradient} text-white rounded-t-[20px]`}>
//             {/* Top navbar */}
//             <div className={`flex justify-between items-center h-[50px] px-4 lg:px-8 ${styles.nav}`}>
//                 <Link href="/" className="font-semibold text-[20px] tracking-[1px]">takatak.ca</Link>

//                 {/* Mobile menu toggle button */}
//                 <button
//                     onClick={() => setMenuOpen(true)}
//                     className="lg:hidden"
//                     aria-label="Open Menu"
//                 >
//                     <Menu className="w-6 h-6" />
//                 </button>

//                 {/* Desktop menu */}
//                 <div className='hidden lg:flex gap-6 relative'>
//                     {filteredLinks.map(pgs => (
//                         <div
//                             key={pgs.id}
//                             className={`relative flex items-center ${ pgs.title.toLowerCase() === "login" ? styles.login : pgs.title.toLowerCase() === "signup"  ? styles.signup  : "" }`}
//                             onMouseEnter={() => pgs.subLinks && setShowDropdown(true)}
//                             onMouseLeave={() => pgs.subLinks && setShowDropdown(false)}
//                         >
//                             {pgs.title === "Domain" && "Hosting" ? (
//                                 <a href={pgs.url}>{pgs.title}</a> // Full page reload 
//                             ) : pgs.url ?(
//                                 <Link href={pgs.url}>{pgs.title}</Link>
//                             ) : (
//                                 <span className='cursor-pointer hover:underline underline-offset-4'>{pgs.title}</span>
//                             )}

//                             {pgs.subLinks && showDropdown && (
//                                 <div className='absolute top-[25px] left-0 bg-[#1e1919] text-white shadow-lg rounded z-50 w-[60vw] grid grid-cols-3 gap-[10px]'>
//                                     {pgs.subLinks.map(sub => (
//                                         <Link
//                                             key={sub.id}
//                                             href={sub.url}
//                                             className='block px-4 py-2 hover:text-black hover:bg-gray-800'
//                                         >
//                                             {sub.title}
//                                         </Link>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Slide-in mobile sidebar */}
//             <div className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} pointer-events-auto`}>
//                 {/* Overlay */}
//                 <div
//                     onClick={() => setMenuOpen(false)}
//                     className={`absolute inset-0 bg-transparent bg-opacity-50`}
//                 />

//                 {/* Sidebar panel */}
//                 <div className='absolute right-0 top-0 h-full w-[70%] max-w-xs bg-[#1e1919] text-white p-4 overflow-y-auto sidebar '>
//                     <div className="flex justify-end items-center close">
//                         <button onClick={() => setMenuOpen(false)} aria-label="Close Menu" >
//                             <X className="w-[35px] h-[35px] " />
//                         </button>
//                     </div>

//                     {/* Sidebar content */}
//                     <nav className="space-y-4 text-[18px] navcont">
//                         {filteredLinks.map(link => (
                            
//                             <div 
//                             key={link.id}
//                             className={`${ link.title.toLowerCase() === "login" ? styles.login : link.title.toLowerCase() === "signup"  ? styles.signup  : link.title.toLowerCase() === "more" ? styles.more : "" }`}
//                             >
//                                 {link.title === "Domain" && "Hosting" ? (
//                                      <a href={link.url}>{link.title}</a>
//                                 ): link.url ? (
//                                     <Link
//                                         href={link.url}
//                                         onClick={() => setMenuOpen(false)}
//                                         className="block py-2"
//                                     >
//                                         {link.title}
//                                     </Link>
//                                 ) : (
//                                     <span className="block py-2">{link.title}</span>
//                                 )}

//                                 {link.subLinks && (
//                                     <div className="pl-4 space-y-1 sublink flex flex-col gap-[10px] text-[20px]">
//                                         {link.subLinks.map(sub => (
//                                             <Link
//                                                 key={sub.id}
//                                                 href={sub.url}
//                                                 onClick={() => setMenuOpen(false)}
//                                                 className="block py-1 text-sm text-gray-300"
//                                             >
//                                                 {sub.title}
//                                             </Link>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar