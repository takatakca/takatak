// import React from 'react'
// import styles from "./page.module.css";

// const Footer = () => {
//   return (
//     <footer className={`text-center p-6 text-white text-sm rounded-b-[20px] ${styles.gradient}`}>
//       &copy; {new Date().getFullYear()} TAKATAK. All rights reserved.
//     </footer>
//   )
// }

// export default Footer

import React from "react";
import styles from "./page.module.css";
import { BiSolidOffer, BiSolidServer, BiSolidPlaneAlt  } from "react-icons/bi";
import { IoSearchCircleOutline, IoLocationOutline } from "react-icons/io5";
import {  } from "react-icons/bi";
import {  } from "react-icons/io5";
import { FaUserCheck, FaWordpressSimple, FaExpeditedssl   } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { FaRegUserCircle, FaUserAstronaut  } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { PiInvoiceBold } from "react-icons/pi";
import { GiProgression, GiNewspaper, GiClassicalKnowledge   } from "react-icons/gi";
import { MdWorkHistory } from "react-icons/md";
import { NotebookTabs, ChevronDown } from 'lucide-react';
import Link from "next/link";










const Footer = () => {
  return (
    <footer className={`text-white ${styles.gradient} flex justify-center`}>
      <div className={`max-w-7xl mx-auto flex flex-col gap-[20px]`}>
        {/* Logo */}
        <div className={`text-center md:text-left mb-10`}>
          <h2 className={`text-[40px] font-bold text-red-500 text-center`}>TAKATAK</h2>
        </div>

        {/* Footer Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm`}>
          {/* Services */}
          <div className="flex flex-col gap-[15px]">
            <h3 className={`font-medium text-[25px] text-[white]`}>Services</h3>

            <ul className={`flex flex-col gap-[10px] text-[20px]`}>
              <div className="flex items-center gap-[8px]">
                < BiSolidOffer />
                <li>Today's Deals</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < IoSearchCircleOutline />
               <li>Domain</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < BiSolidServer />
                <li>Web Hosting</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < IoLocationOutline />
                <li>Mobile Apps</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < FaUserCheck />
                <li>Local Listings</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < FaRegUserCircle />
                <li>Lead Generation</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < LuPhoneCall />
                <li>VoIP Phone</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < BiSolidPlaneAlt  />
                <li>Cuba Travel</li>
              </div>
              
              
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-[15px]">
            <h3 className={`font-medium text-[25px] text-[white]`}>Solutions</h3>

            <ul className={`flex flex-col gap-[10px] text-[20px]`}>
              <div className="flex items-center gap-[8px]">
                < FaWordpressSimple  />
                <li>Hosting for WordPress</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < FaExpeditedssl  />
               <li>SSL Certificates</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < CgWebsite />
                <li>Build Your Website</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < MdOutlineDashboardCustomize />
                <li>CRM & Dashboard</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < AiOutlineSolution />
                <li>AI Solutions</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < PiInvoiceBold />
                <li>Payments & Invoicing</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < LuPhoneCall />
                <li>Developers & API</li>
              </div>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-[15px]">
            <h3 className={`font-medium text-[25px] text-[white]`}>Support</h3>

            <ul className={`flex flex-col gap-[10px] text-[20px]`}>
              <div className="flex items-center gap-[8px]">
                < FaUserAstronaut  />
                <li>About TAKATAK</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < GiProgression  />
               <li>Affiliate Program</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < NotebookTabs />
                <li>Company Details</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < MdWorkHistory />
                <li>Careers</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < GiNewspaper />
                <li>News & Blog</li>
              </div>
              <div className="flex items-center gap-[8px]">
                < GiClassicalKnowledge  />
                <li>Knowledgebase</li>
              </div>
            </ul>
          </div>

          {/* Company */}
           <div className="flex flex-col gap-[15px]">
            <h3 className={`font-medium text-[25px] text-[white]`}>Company</h3>

            <ul className={`flex flex-col gap-[10px] text-[20px]`}>
              <div className="flex items-center gap-[8px]">
                <li>About TAKATAK</li>
              </div>
              <div className="flex items-center gap-[8px]">
               <li>Affiliate Program</li>
              </div>
              <div className="flex items-center gap-[8px]">
                <li>Company Details</li>
              </div>
              <div className="flex items-center gap-[8px]">
                <li>Careers</li>
              </div>
              <div className="flex items-center gap-[8px]">
                <li>News & Blog</li>
              </div>
              <div className="flex items-center gap-[8px]">
                <li>Knowledgebase</li>
              </div>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className={` text-sm text-center md:text-left flex flex-col gap-[20px]`}>
          {/* Contact and Currency */}
          <div className={`flex flex-col md:flex-row justify-between items-center border-y border-gray-400 ${styles.tak}`}>
            <div className={`flex items-center gap-[160px]`}>
              <h1>+1 518 250 6166</h1>
              <div className="flex items-center">
                <p>US USD</p>
                <ChevronDown />
              </div>
            </div>
            <div className="uppercase font-bold tracking-[15px] text-[18px]">takatak</div>
          </div>

          <div className="flex items-center justify-between">
             {/* Legal Links */}
            <div className={`flex flex-wrap w-[50%] justify-center md:justify-start gap-4`}>
              <Link href="/privacymanager">
              <span>Privacy Manager</span>
              </Link>
              
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
              <span>Company Details</span>
              <span>Accessibility Statement</span>
              <span>Acceptable Usage Policy</span>
              <span>Referral Program Agreement</span>
              <span>Promo T&C’s</span>
            </div>

            {/* Copyright */}
            <div className={`flex flex-col`}>
              <h1>© {new Date().getFullYear()}</h1>
              <p>TAKATAK.ca — All Rights Reserved.</p>
                
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
