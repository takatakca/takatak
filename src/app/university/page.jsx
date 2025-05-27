"use client"
import React, { useState } from 'react';
import { FaChalkboardUser } from "react-icons/fa6";
import {
  FaCalendarAlt, FaTrophy, FaUserShield, FaUserCircle,
  FaHourglassHalf, FaHeart, FaFileAlt, FaFileInvoiceDollar
} from "react-icons/fa";
import Activities from '../component/Activities';
import Calendar from '../component/Calendar';
import Summary from '../component/summary';
import Waitlist from '../component/Waitlist';
import Wishlist from '../component/Wishlist';
import Documents from '../component/Documents';
import Transactions from '../component/Transactions';
import Profile from '../component/Profile';
import AccountSecurity from '../component/AccountSecurity';



const navItems = [
  { label: 'Activities', icon: <FaChalkboardUser /> },
  { label: 'Calendar', icon: <FaCalendarAlt /> },
  { label: 'Summary', icon: <FaTrophy /> },
  { label: 'Waiting List', icon: <FaHourglassHalf /> },
  { label: 'Wish List', icon: <FaHeart /> },
  { label: 'Documents', icon: <FaFileAlt /> },
  { label: 'Transactions', icon: <FaFileInvoiceDollar /> },
  { label: 'Profile', icon: <FaUserCircle /> },
  { label: 'Account and security', icon: <FaUserShield /> }
];


export default function University() {
  const [activeTab, setActiveTab] = useState('Activities');

  const renderContent = () => {
    switch (activeTab) {
      case 'Activities': return <Activities />;
      case 'Calendar': return <Calendar />;
      case 'Summary': return <Summary />;
      case 'Waiting List': return <Waitlist />;
      case 'Wish List': return <Wishlist />;
      case 'Documents': return <Documents />;
      case 'Transactions': return <Transactions />;
      case 'Profile': return <Profile />;
      case 'Account and security': return <AccountSecurity />;
    
      default:
        return (
          <div className="p-6 text-gray-500">
            <h2 className="text-xl font-medium">Unknown tab: {activeTab}</h2>
            <p>Please choose a valid section.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col gap-[15px] lg:flex-row min-h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <aside className="w-full lg:w-[20vw] bg-white shadow">
        <h2 className="space text-[30px] font-light ">My Space</h2>
        <hr />
        <nav className="space-y-2 flex flex-col gap-[15px] sidbar">
          {navItems.map(({ label, icon }) => (
            <div
              key={label}
              className={`flex items-center gap-2 cursor-pointer text-[16px] font-normal text-[#5c5757] hover:text-blue-600 hover:font-bold ${activeTab === label ? "text-blue-600 font-semibold text-[18px]" : "text-[#5c5757]"}`}
              onClick={() => setActiveTab(label)}
            >
              {icon}
              <span>{label}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <main className="w-full flex items-start justify-start p-4">
        {renderContent()}
      </main>
    </div>
  );
}






