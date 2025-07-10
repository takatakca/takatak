"use client"
import React, { useState } from 'react';
import { FaChalkboardUser } from "react-icons/fa6";
import {
  FaCalendarAlt, FaTrophy, FaUserShield, FaUserCircle,
  FaHourglassHalf, FaHeart, FaFileAlt, FaFileInvoiceDollar
} from "react-icons/fa";
import ProtectedRoute from "../components/ProtectedRoute";
import Activities from '../components/Activities';
import Calendar from '../components/Calendar';
import Summary from '../components/Summary';
import Waitlist from '../components/Waitlist';
import Wishlist from '../components/Wishlist';
import Documents from '../components/Documents';
import Transactions from '../components/Transactions';
import Profile from '../components/Profile';
import AccountSecurity from '../components/AccountSecurity';



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
    <ProtectedRoute>
    <div className="flex flex-col gap-[15px] lg:flex-row min-h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <aside className="w-full lg:w-[20vw] bg-white shadow">
        <h2 className="space text-[40px] lg:text-[30px] font-light ">My Space</h2>
        <hr />
        <nav className="sidbar space-y-2 flex lg:flex-col flex-row gap-[15px] overflow-x-auto whitespace-nowrap">
          {navItems.map(({ label, icon }) => (
            <div
              key={label}
              className={`lyne flex items-center gap-2 cursor-pointer text-[16px]  font-normal text-[#5c5757] lg:hover:text-blue-600 lg:hover:font-bold ${activeTab === label ? "text-blue-600 font-semibold text-[18px]" : "text-[#5c5757]"} border-r border-gray-300 lg:border-none`}
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
    </ProtectedRoute>
  );
}






