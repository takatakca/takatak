"use client"
import React, { useContext, useEffect, useState } from 'react';
import styles from "./page.module.css"
import { AppContext } from '../context/AppContext';
import { useRouter } from 'next/navigation';


export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Commissions', 'Payouts'];

    const {dashboard, user} = useContext(AppContext);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    

    useEffect(()=>{
        // const token = sessionStorage.getItem("authToken");

        // if (!token) {
        // // Redirect if not authenticated
        // router.push('/login');
        // return;
        // }

        // const fetchUser = async ()=>{
        //     try {
        //         await dashboard(); // Will set user in context
        //     } catch (error) {
        //         console.log("Dashboard fetch failed:", error);
        //         // Optionally remove invalid token and redirect
        //         sessionStorage.removeItem("authToken");
        //         router.push('/login');
        //     }finally {
        //         setLoading(false);
        //       }
        // };
        // fetchUser();
    }, []);

    // if (loading) return <div className='flex justify-center'><p className={`${styles.load}`}>Loading dashboard...</p></div>;

    return (
    <div className={`min-h-screen ${styles.top}`}>
      <div className="flex justify-center">

        {/* Active Products */}
        <div className={`flex flex-col items-start w-[40%] gap-[20px] ${styles.prduct}`}>
           <div className={` flex flex-col items-start gap-[25px] ${styles.activ}`}>
                <h2 className="text-lg font-semibold text-[white]">Active products</h2>
                <div className="flex flex-col items-start gap-[10px]">
                    <input type="text" value="6241.ca" readOnly className={`w-[20vw] text-[white] outline-none border border-[#9c9898] rounded  ${styles.actv1}`} />
                    <input type="text" value="alkao.ca" readOnly className={`w-[20vw] text-[white] border border-[#9c9898] rounded ${styles.actv2}`} />
                    <input type="text" value="balenifurniture.ca" readOnly className={`w-[20vw] text-[white] border border-[#9c9898] rounded ${styles.actv3}`} />
                    <input type="text" value="bardosh.ca" readOnly className={`w-[20vw] text-[white] border border-[#9c9898] rounded ${styles.actv4}`} />
                </div>
                <button className=" text-[18px] font-medium underline text-[#01A2D9] hover:text-[#4ca8ea]">Show more</button>
           </div>

          {/* Active Tickets (Empty) */}
          <div className={`flex flex-col items-start gap-[10px]`}>
            <h2 className="text-lg font-semibold mb-4 text-white">Active tickets</h2>
            <input type="text" name="" id="" placeholder='No results' className={`w-[20vw] text-[white] border border-[#9c9898] outline-none rounded ${styles.tic}`}/>
          </div>

          {/* Affiliate Program */}
          <div className=" w-[20vw] rounded-lg shadow">
            <h2 className={`text-[18px] font-normal bg-[white] text-[black] rounded-t-lg ${styles.aff}`}>Affiliate program</h2>
            <div className={` ${styles.nestd}`}>
              <div className={`relative ${styles.spc}`}>
                {/* Gray vertical line */}
                <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-[#4ca8ea]   ${styles.line}`} />
                    <div className={`space-y-2 flex flex-col gap-[10px] `}>
                      {tabs.map((tab)=>{
                        const isActive = activeTab === tab;
                        return(
                          <button
                          key={tab}
                          onClick={()=>setActiveTab(tab)}
                        className={`
                          relative text-left w-full font-normal transition-all duration-200  
                          ${isActive
                            ? 'bg-transparent text-[white] '
                            : 'text-white hover:bg-[#cecbcb] hover:text-[#4ca8ea]'
                          }
                          `}
                          >
                            {/* Colored indicator for active tab */}
                        {isActive && (
                          <span className="absolute left-[-1rem] top-0 h-full w-0.5 bg-[white] rounded" />
                        )}
                            {tab}
                          </button>
                        )
                      })}
                    </div>   
                </div>
            </div>
          </div>

          {/* Active Tickets (Bottom) */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Active tickets</h2>
            <p className="text-sm text-gray-700 mb-1">Activenetickets</p>
            <p className="text-sm text-gray-500">Nov 2024</p>
            <p className="text-sm text-gray-500">Visits 0</p>
          </div>

        </div>

        {/* Product List */}
          <div className={`space-y-4 text-sm border ${styles.sec2}`}>
            <button className="text-sm text-gray-600 hover:underline">View all</button>
            <div>
              <p className="font-medium">M-INV-373940 <span className="text-gray-400">(New order)</span></p>
              <p>$17.99</p>
              <p className="text-gray-600">Item(s): .sa.amld/asaca</p>
              <p className="text-gray-500">Issued Jun 29th</p>
              <p className="text-red-500 text-xs">✖️ CANCELLED - Cancelled Jul 5th</p>
            </div>
            <div>
              <p className="font-medium">M-INV-366436 <span className="text-gray-400">(Hroi order)</span></p>
              <p>$17.99</p>
              <p className="text-gray-600">Item(s): on alkkao.ca</p>
              <p className="text-gray-500">Issued Jun16th</p>
              <p className="text-green-500 text-xs">✅ PAID PAid n 1o nh 5th</p>
            </div>
            <div>
              <p className="font-medium">M-INV-344412 <span className="text-gray-400">(Renewal)</span></p>
              <p>$17.99</p>
              <p className="text-gray-600">Item(s): FLexs.ca</p>
              <p className="text-gray-500">Issued Mar 21st</p>
              <p className="text-green-500 text-xs">✅ PAID Paid Aprr 16th</p>
            </div>
            <div>
              <p className="font-medium">M-INV-343047 <span className="text-gray-400">(New order)</span></p>
              <p>$17.99</p>
              <p className="text-gray-600">Item(s): mainssecur/ls...</p>
              <p className="text-gray-500">Issued Mar 15 th</p>
              <p className="text-green-500 text-xs">✅ PAID Mar 1.Mar 16 th</p>
            </div>

            {/* Referral Program Section */}
            <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-md font-semibold mb-1">Introducy the</h2>
            <h3 className="text-xl font-bold mb-2">MochaHost Referral Program</h3>
            <p className="text-sm text-gray-700 mb-4">
                Share your unique referral link with your friends, family, and network to earn a 25% commission.
            </p>
            <div className="grid grid-cols-5 gap-2">
                <div className="w-10 h-10 bg-gray-100 rounded"></div>
                <div className="w-10 h-10 bg-gray-100 rounded"></div>
                <div className="w-10 h-10 bg-gray-100 rounded"></div>
                <div className="w-10 h-10 bg-gray-100 rounded"></div>
                <div className="w-10 h-10 bg-gray-100 rounded"></div>
            </div>
            <p>introduce the MonchaHost Referral Program</p>
            </div>
          </div>  
      </div>
    </div>

    )
}





{/* <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white">
            <h1 className="text-2xl font-bold mb-4">Home Page Dashboard</h1>
            {user ? (
                <p className="text-lg text-white">Hi {user.username}, welcome to Takatak Dashboard!</p>
            ) : (
                <p className="text-lg text-white">Welcome to Takatak Dashboard</p>
            )}
        </div> */}