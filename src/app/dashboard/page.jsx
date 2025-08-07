"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import { MdHomeFilled } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";
import { IoSettings } from "react-icons/io5";
import Home from '../components/home/Home';
import Mydashboard from '../components/myDashboard/Mydashborad';
import Invoice from '../components/invoices/Invoice';
import Affiliate from '../components/affiliateProgram/Affiliate';
import Support from '../components/support/Support';
import Setting from '../components/settings/Setting';
import ProtectedRoute from '../components/ProtectedRoute';







const sideItem = [
    {   label: "Home", icon: <MdHomeFilled /> },
    {   label: "My Dashboard", icon: <MdDashboardCustomize /> },
    {   label: "Invoices", icon: <FaFileInvoiceDollar /> },
    {   label: "Affillate Program", icon: <FaUserFriends /> },
    {   label: "Support", icon: <FcCustomerSupport /> },
    {   label: "Settings", icon: <IoSettings /> },
]

export default function dashboard() {
  const [onactive, setOnactive] = useState('Home');

  const activeBoard = () => {
    switch(onactive){
      case "Home" : return <Home />;
      case "My Dashboard" : return <Mydashboard />;
      case "Invoices" : return <Invoice />;
      case "Affillate" : return <Affiliate />;
      case "Support" : return <Support />;
      case "Settings": return <Setting />

      default:
        return(
          <div className="p-6 text-gray-500">
            <h2 className="text-xl font-medium">Unknown tab: {onactive}</h2>
            <p>Please choose a valid section.</p>
          </div>
        );
    }
  };
  return (
    // <ProtectedRoute>
      <div className={`flex flex-col gap-[15px] text-white lg:flex-row min-h-screen ${styles.dash}`}>
        {/* Sidebar */}
        <aside className={`w-full lg:w-[17vw] space-y-2 flex lg:flex-col flex-row gap-[15px] overflow-x-auto whitespace-nowrap ${styles.sidbar}`}>
          {
            sideItem.map(({label, icon})=>(
              <div
              key={label}
              className={`flex items-center gap-2 cursor-pointer text-[16px]  font-normal lg:hover:text-blue-600 lg:hover:font-bold ${onactive === label ? "text-blue-600 font-semibold text-[18px]" : "text-[white]"} border-r border-gray-300 lg:border-none`}
              onClick={()=> setOnactive(label)}
              >
                {icon}
                <span>{label}</span>
              </div>
            ))
          }
        </aside>

        {/* Content Area */}
        <main>
          {activeBoard()}
        </main>
      </div>

    // </ProtectedRoute>
  )
}
