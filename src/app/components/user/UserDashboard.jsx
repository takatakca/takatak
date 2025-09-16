"use client";
import React, { useContext, useEffect, useState } from "react";
import { TbCancel } from "react-icons/tb";
import { FcPaid } from "react-icons/fc";
import styles from "../user/userdash.module.css";
import { AppContext } from "../../context/AppContext";
import { useRouter } from "next/navigation";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Commissions", "Payouts"];
  const { dashboard, user, orders, invoices, activity } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dashboard(); // fetch user, orders, invoices, activity
      } catch (err) {
        console.error("Dashboard fetch failed:", err);
        sessionStorage.removeItem("authToken");
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dashboard, router]);

  if (loading) {
    return (
      <div className="flex justify-center">
        <p className={`${styles.load}`}>Loading dashboard...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center">
        <p className="text-white">No user data found.</p>
      </div>
    );
  }

  return (
    <div className={`flex justify-around gap-[150px] ${styles.top}`}>
      {/* Left column: Products, Tickets, Affiliate */}
      <div className={`flex flex-col items-start w-[50%] gap-[20px] ${styles.prduct}`}>
        {/* Active Products */}
        <div className={`flex flex-col items-start gap-[25px] ${styles.activ}`}>
          <h2 className="text-lg font-semibold text-white">Active products</h2>
          <div className="flex flex-col items-start gap-[10px]">
            {orders && orders.length > 0 ? (
              orders
                .filter((order) => order.status === "active" || order.status === "paid")
                .slice(0, 4)
                .map((order, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={order.items?.map((i) => i.name).join(", ") || "Unnamed product"}
                    readOnly
                    className={`w-[20vw] text-white outline-none border border-[#9c9898] rounded ${styles[`actv${idx + 1}`]}`}
                  />
                ))
            ) : (
              <p className="text-gray-400">No active products</p>
            )}
          </div>
          {orders?.length > 4 && (
            <button className="text-[18px] font-medium underline text-[#01A2D9] hover:text-[#4ca8ea]">
              Show more
            </button>
          )}
        </div>

        {/* Active Tickets */}
        <div className={`flex flex-col items-start gap-[10px]`}>
          <h2 className="text-lg font-semibold mb-4 text-white">Active tickets</h2>
          <input
            type="text"
            placeholder="No results"
            readOnly
            className={`w-[20vw] text-white border border-[#9c9898] outline-none rounded ${styles.tic}`}
          />
        </div>

        {/* Affiliate Program */}
        <div className="w-[20vw] rounded-lg shadow">
          <h2 className={`text-[18px] font-normal bg-white text-black rounded-t-lg ${styles.aff}`}>
            Affiliate program
          </h2>
          <div className={`${styles.nestd}`}>
            <div className={`relative ${styles.spc}`}>
              <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-[#4ca8ea] ${styles.line}`} />
              <div className="space-y-2 flex flex-col gap-[10px]">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`
                        relative text-left w-full font-normal transition-all duration-200  
                        ${isActive ? "bg-transparent text-white" : "text-white hover:bg-[#cecbcb] hover:text-[#4ca8ea]"}
                      `}
                    >
                      {isActive && (
                        <span className="absolute left-[-1rem] top-0 h-full w-0.5 bg-white rounded" />
                      )}
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Activity Log */}
        <div className={`flex flex-col w-[20vw] gap-[15px] rounded-lg shadow text-white ${styles.tive}`}>
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <div className="flex flex-col gap-[5px]">
            {activity && activity.length > 0 ? (
              activity.map((log, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <p className="text-sm">{log.action}</p>
                  <span className="text-xs text-gray-400">
                    {log.at ? new Date(log.at).toLocaleDateString() : "N/A"}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400">No activity yet</p>
            )}
          </div>
        </div>
      </div>

      {/* Right column: Orders & Referral */}
      <div className={`space-y-4 flex flex-col gap-[20px] text-sm text-white ${styles.sec2}`}>
        <button className={`text-sm hover:underline flex self-end border rounded-[50px] ${styles.view}`}>
          View all
        </button>

        {/* Orders List */}
        <div>
          {orders && orders.length > 0 ? (
            orders.map((order, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-col gap-[10px]">
                  <p className="font-medium text-gray-400">
                    {order.invoice_number || order.id}{" "}
                    <span className="text-white">({order.type || "Order"})</span>
                  </p>
                  <p>{order.total || "$0.00"}</p>
                  <p>Item(s): {order.items?.map((i) => i.name).join(", ") || "N/A"}</p>
                  <p>Issued {new Date(order.created_at).toLocaleDateString()}</p>
                  <div className="flex items-center gap-[5px]">
                    {order.status === "paid" ? (
                      <FcPaid />
                    ) : (
                      <TbCancel className="text-red-500 text-xs" />
                    )}
                    <p>{order.status?.toUpperCase()}</p>
                  </div>
                </div>
                <div className={`${styles.hr}`}>
                  <hr />
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No orders found</p>
          )}
        </div>

        {/* Referral Program Section */}
        {/* <div className="bg-white p-4 rounded-lg shadow text-black">
          <h2 className="text-md font-semibold mb-1">Introduce the</h2>
          <h3 className="text-xl font-bold mb-2">MochaHost Referral Program</h3>
          <p className="text-sm text-gray-700 mb-4">
            Share your unique referral link with your friends, family, and network to earn a 25% commission.
          </p>
          <div className="grid grid-cols-5 gap-2">
            {[...Array(5)].map((_, idx) => (
              <div key={idx} className="w-10 h-10 bg-gray-100 rounded"></div>
            ))}
          </div>
          <p className="mt-2 text-sm text-gray-600">Introduce the MochaHost Referral Program</p>
        </div> */}
      </div>
    </div>
  );
}









// "use client"
// import React, { useContext, useEffect, useState } from 'react';
// import { TbCancel } from "react-icons/tb";
// import { FcPaid } from "react-icons/fc";
// import styles from "../user/userdash.module.css"
// import { AppContext } from '../../context/AppContext';
// import { useRouter } from 'next/navigation';

// const orderinfo = [
//   {
    
//     title: "M-INV-373940",
//     purpose:"(New order)",
//     price:"$17.99",
//     item:"Item(s): .sa.amld/asaca",
//     date:"Issued Jun 29th",
//     icon: <TbCancel className='text-red-500 text-xs'/>,
//     status:"CANCELLED - Cancelled Jul 5th"
//   },
//   {
//     title: "M-INV-366436",
//     purpose:"(Hroi order)",
//     price:"$17.99",
//     item:"Item(s): on alkkao.ca",
//     date:"Issued Jun16th",
//     icon:<FcPaid />,
//     status:"PAID PAid n 1o nh 5th"
//   },
//   {
//     title: "M-INV-344412",
//     purpose:"(Renewal)",
//     price:"$17.99",
//     item:"Item(s): FLexs.ca",
//     date:"Issued Mar 21st",
//     icon:<FcPaid />,
//     status:"PAID Paid Aprr 16th"
//   },
//   {
//     title: "M-INV-343047",
//     purpose:"(New order)",
//     price:"$17.99",
//     item:"Item(s): mainssecur/ls",
//     date:"Issued Mar 15 th",
//     icon:<FcPaid />,
//     status:"PAID Mar 1.Mar 16 th"
//   },
// ]

// export default function UserDashboard() {
//   const [activeTab, setActiveTab] = useState('Overview');
//   const tabs = ['Overview', 'Commissions', 'Payouts'];

//     const {dashboard, user} = useContext(AppContext);
//     const [loading, setLoading] = useState(true);
//     const [isClient, setIsClient] = useState(false);
//     const router = useRouter();
    
// //     useEffect(() => {
// //   setIsClient(true); // ensures sessionStorage is available
// // }, []);

//     // useEffect(()=>{
//     //   if (!isClient) return;
//     //     const token = sessionStorage.getItem("authToken");

//     //     if (!token) {
//     //     // Redirect if not authenticated
//     //     router.push('/login');
//     //     return;
//     //     }

//     //     const fetchUser = async ()=>{
//     //         try {
//     //             await dashboard(); // Will set user in context
//     //         } catch (error) {
//     //             console.log("Dashboard fetch failed:", error);
//     //             // Optionally remove invalid token and redirect
//     //             sessionStorage.removeItem("authToken");
//     //             router.push('/login');
//     //         }finally {
//     //             setLoading(false);
//     //           }
//     //     };
//     //     fetchUser();
//     // }, [isClient, dashboard, router]);

//     // if (loading){
//     //    return <div className='flex justify-center'><p className={`${styles.load}`}>Loading dashboard...</p></div>;

//     // }


//     return (
//       <div className={`flex justify-around gap-[150px] ${styles.top}`}>

//         {/* Active Products */}
//         <div className={`flex flex-col items-start w-[50%] gap-[20px] ${styles.prduct}`}>
//            <div className={`flex flex-col items-start gap-[25px] ${styles.activ}`}>
//                 <h2 className="text-lg font-semibold text-[white]">Active products</h2>
//                 <div className="flex flex-col items-start gap-[10px]">
//                     <input type="text" value="6241.ca" readOnly className={`w-[20vw] text-[white] outline-none border border-[#9c9898] rounded  ${styles.actv1}`} />
//                     <input type="text" value="alkao.ca" readOnly className={`w-[20vw] text-[white] outline-none border border-[#9c9898] rounded ${styles.actv2}`} />
//                     <input type="text" value="balenifurniture.ca" readOnly className={`w-[20vw] text-[white] outline-none border border-[#9c9898] rounded ${styles.actv3}`} />
//                     <input type="text" value="bardosh.ca" readOnly className={`w-[20vw] text-[white] border outline-none border-[#9c9898] rounded ${styles.actv4}`} />
//                 </div>
//                 <button className=" text-[18px] font-medium underline text-[#01A2D9] hover:text-[#4ca8ea]">Show more</button>
//            </div>

//           {/* Active Tickets (Empty) */}
//           <div className={`flex flex-col items-start gap-[10px]`}>
//             <h2 className="text-lg font-semibold mb-4 text-white">Active tickets</h2>
//             <input type="text" name="" id="" placeholder='No results' className={`w-[20vw] text-[white] border border-[#9c9898] outline-none rounded ${styles.tic}`}/>
//           </div>

//           {/* Affiliate Program */}
//           <div className=" w-[20vw] rounded-lg shadow">
//             <h2 className={`text-[18px] font-normal bg-[white] text-[black] rounded-t-lg ${styles.aff}`}>Affiliate program</h2>
//             <div className={` ${styles.nestd}`}>
//               <div className={`relative ${styles.spc}`}>
//                 {/* Gray vertical line */}
//                 <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-[#4ca8ea]   ${styles.line}`} />
//                     <div className={`space-y-2 flex flex-col gap-[10px] `}>
//                       {tabs.map((tab)=>{
//                         const isActive = activeTab === tab;
//                         return(
//                           <button
//                           key={tab}
//                           onClick={()=>setActiveTab(tab)}
//                         className={`
//                           relative text-left w-full font-normal transition-all duration-200  
//                           ${isActive
//                             ? 'bg-transparent text-[white] '
//                             : 'text-white hover:bg-[#cecbcb] hover:text-[#4ca8ea]'
//                           }
//                           `}
//                           >
//                             {/* Colored indicator for active tab */}
//                         {isActive && (
//                           <span className="absolute left-[-1rem] top-0 h-full w-0.5 bg-[white] rounded" />
//                         )}
//                             {tab}
//                           </button>
//                         )
//                       })}
//                     </div>   
//                 </div>
//             </div>
//           </div>

//           {/* Active Tickets (Bottom) */}
//           <div className={`flex flex-col w-[20vw] gap-[15px] rounded-lg shadow text-white ${styles.tive}`}>
//             <h2 className="text-lg font-semibold">Active tickets</h2>
//             <div className='flex flex-col gap-[5px]'>
//               <p className="text-sm ">Activenetickets</p>
//               <p className="text-sm ">Nov 2024</p>
//               <div className='flex items-center justify-between'><p className="text-sm ">Visits</p> <span>0</span></div>
              
//             </div>
//           </div>
//         </div>

//         {/* Product List */}
//           <div className={`space-y-4 flex flex-col gap-[20px] text-sm text-white ${styles.sec2}`}>
//             <button className={`text-sm hover:underline flex self-end border rounded-[50px] ${styles.view}`}>View all</button>
//             <div>
//               {
//                 orderinfo.map((order, index)=>(
//                   <div key={index} className=''>
//                     <div className='flex flex-col gap-[10px]'>
//                       <p className="font-medium text-gray-400">{order.title} <span className="text-white">{order.purpose}</span></p>
//                       <p>{order.price}</p>
//                       <p className="">{order.item}</p>
//                       <p className="">{order.date}</p>
//                       <div className='flex items-center gap-[5px]'>
//                         {order.icon}
//                       <p className=""> {order.status}</p>
//                     </div>
//                     </div>
//                     <div className={`${styles.hr}`}><hr /></div>
//                   </div>
//                 ))}
//             </div>           

//             {/* Referral Program Section */}
//             <div className="bg-white p-4 rounded-lg shadow">
//             <h2 className="text-md font-semibold mb-1">Introducy the</h2>
//             <h3 className="text-xl font-bold mb-2">MochaHost Referral Program</h3>
//             <p className="text-sm text-gray-700 mb-4">
//                 Share your unique referral link with your friends, family, and network to earn a 25% commission.
//             </p>
//             <div className="grid grid-cols-5 gap-2">
//                 <div className="w-10 h-10 bg-gray-100 rounded"></div>
//                 <div className="w-10 h-10 bg-gray-100 rounded"></div>
//                 <div className="w-10 h-10 bg-gray-100 rounded"></div>
//                 <div className="w-10 h-10 bg-gray-100 rounded"></div>
//                 <div className="w-10 h-10 bg-gray-100 rounded"></div>
//             </div>
//             <p>introduce the MonchaHost Referral Program</p>
//             </div>
//           </div>  
//       </div>
//     // </div>

//     )
// }
