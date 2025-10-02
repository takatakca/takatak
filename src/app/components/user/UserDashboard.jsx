"use client";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./userdash.module.css"
import { FcPaid } from "react-icons/fc";
import { TbCancel } from "react-icons/tb";
import { IoArrowForward } from "react-icons/io5";
import { GiCardRandom } from "react-icons/gi";
import { IoIosCheckmark, IoMdCheckmark  } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdRefresh } from "react-icons/md";
import { Ban } from 'lucide-react';
import { ImCheckmark } from "react-icons/im";
import Link from "next/link";


function SummaryCard({ title, value, time }) {
  return (
    <div className={`rounded bg-[#E6E7E9] shadow-sm ${styles.alltime}`}>
      <p className=" ">{title}</p>
      <p className=" text-gray-500">{time}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
const statusIcons = {
  PAID: <ImCheckmark  className={`text-white text-[17px] bg-[#0b910b] rounded-[10px] ${styles.pai}`} />,
  UNPAID: <RiErrorWarningFill className="text-orange-400 text-lg" />,
  CANCELLED: <Ban className="text-red-500 text-lg" />,
  REFUNDED: <MdRefresh className="text-blue-500 text-lg" />,
};
const statusColors = {
  PAID: "#0b910b",         // green
  UNPAID: "#f59e0b",       // orange
  CANCELLED: "#ef4444",    // red
  REFUNDED: "#3b82f6",     // blue
};


const invoices = [
  {
      id: "M-INV-391912",
      type: "New order",
      items: [".ca (actionavocat.ca)", ".ca (besoinavocat.ca)"],
      issued: "Sep 13th",
      amount: "$35.98",
      status: "PAID",
      paidDate: "Paid Sep 13th",
      icon: <ImCheckmark  />
    },
    {
      id: "M-INV-391275",
      type: "Renewal",
      items: [".ca (viennoise.ca)"],
      issued: "Sep 10th",
      amount: "$17.99",
      status: "UNPAID",
      due: "Oct 10th",
      icon: <RiErrorWarningFill />,
    },
    {
      id: "M-INV-391002",
      type: "Renewal",
      items: [".ca (bmbd.ca)"],
      issued: "Sep 9th",
      amount: "$17.99",
      status: "UNPAID",
      due: "Oct 9th",
      icon: <RiErrorWarningFill />,
    },
    {
      id: "M-INV-390621",
      type: "Renewal",
      items: [".ca (taxichambly.ca)"],
      issued: "Sep 7th",
      amount: "$17.99",
      status: "PAID",
      paidDate: "Paid Sep 13th",
      icon: <ImCheckmark  />,
    },
    {
      id: "M-INV-373940",
      type: "New order",
      items: [".ca (sitie.ca)"],
      issued: "Sep 7th",
      amount: "$17.99",
      status: "CANCELLED",
      paidDate: "Paid Sep 13th",
      icon: <Ban />,
    },
    {
      id: "M-INV-248791",
      type: "New order",
      items: [".ca (mimt.ca)"],
      issued: "Sep 7th",
      amount: "$15.45",
      status: "REFUNDED",
      paidDate: "Paid Sep 13th",
      icon: <MdRefresh />,
    },
]


function Placeholderticket({
  leftWidths = [320, 240, 200],
  rightWidths = [80, 140],
  showRight = true,
}) {
  return (
    <div className={styles.row}>
      {/* LEFT SVG */}
      <svg
        className={`${styles.leftSvg} ${styles.mobileSvg}`}
        viewBox="0 0 420 80"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Circle (avatar/bullet) */}
        <rect x="20" y="20" width="17" height="17" rx="6" fill="#F0F0F0" className={styles.shape} />

        {/* Dynamic left widths */}
        <rect x="52" y="8" width={leftWidths[0]} height="10" rx="5" fill="#F0F0F0" className={styles.shape2} />
        <rect x="52" y="23" width={leftWidths[1]} height="15" rx="4" className={styles.shape} />
        <rect x="52" y="44" width={leftWidths[2]} height="8" rx="5" className={styles.shape} />

        {/* Extra shape for mobile only */}
        <rect
          x="52"
          y="60"
          width="150"
          height="12"
          rx="4"
          className={`${styles.shape} ${styles.mobileOnly}`}
        />
      </svg>

      {/* RIGHT SVG (conditionally shown) */}
      {showRight && (
        <svg
          className={styles.rightSvg}
          viewBox="0 0 300 64"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect
            x="0"
            y="23"
            width={rightWidths[0]}
            height="20"
            rx="5"
            className={styles.shape}
          />
          <rect
            x={rightWidths[0] + 16}
            y="16"
            width={rightWidths[1]}
            height="32"
            rx="5"
            className={styles.shape2}
          />

          {/* Divider line */}
          <line
            x1="0"
            x2="300"
            y1="62"
            y2="62"
            stroke="rgba(0,0,0,0.05)"
            strokeWidth="1"
          />
        </svg>
      )}
    </div>
  );
}

function PlaceholderRow({
  leftWidths = [180, 120, 90],
  rightWidths = [60, 100],
  showRight = true,
}) {
  return (
    <div className={styles.row}>
      {/* LEFT skeleton */}
      <svg
        className={styles.leftSvg}
        viewBox="0 0 360 64"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx="16" cy="20" r="6" fill="#F0F0F0" />
        <rect x="34" y="12" width={leftWidths[0]} height="8" rx="4" fill="#F0F0F0" />
        <rect x="34" y="24" width={leftWidths[1]} height="10" rx="4" fill="#DBDBDB" />
        <rect x="34" y="38" width={leftWidths[2]} height="6" rx="4" fill="#F0F0F0" />

        {/* mobile-only extra bar */}
        <rect
          x="34"
          y="50"
          width="120"
          height="6"
          rx="4"
          fill="#F0F0F0"
          className={styles.mobileOnly}
        />

        <line x1="0" x2="360" y1="62" y2="62" stroke="#F7F7F7" strokeWidth="1" />
      </svg>

      {/* RIGHT skeleton */}
      {showRight && (
        <svg
          className={styles.rightSvg}
          viewBox="0 0 140 64"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect x="0" y="20" width={rightWidths[0]} height="20" rx="6" fill="#F0F0F0" />
          <rect x={rightWidths[0] + 10} y="14" width={rightWidths[1]} height="30" rx="6" fill="#DBDBDB" />
          <line x1="0" x2="140" y1="62" y2="62" stroke="#F7F7F7" strokeWidth="1" />
        </svg>
      )}
    </div>
  );
}


export default function UserDashboard() {

   const [isMobile, setIsMobile] = useState(false);
  const { dashboard, user, orders,
     invoices, 
     tickets, activity, summary } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dashboard().finally(() => setLoading(false));
  }, [dashboard]);

  if (loading) return <p className="text-center">Loading dashboard...</p>;
  if (!user) return <p className="text-center">No user data found.</p>;

  return (
    <div className={`flex flex-col justify-center w-full gap-[20px]  ${styles.main} `}>

        {/* Summary Cards */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 text-[black] bg-[white] rounded w-full ${styles.lent}`}>
          <SummaryCard title="Total orders" time="All time" value={summary?.totalOrders  || "--"} />
          <SummaryCard title="Total invoices" time="All time" value={summary?.totalInvoices  || "--"} />
          <SummaryCard title="Unpaid invoices" time="All time" value={summary?.unpaidInvoices  || "--"} />
          <SummaryCard title="Active tickets" time="All time" value={summary?.activeTickets || "0" } />
        </div>


      {/* Active Products */}
      <section className={`bg-[white] text-[black] rounded w-full flex flex-col gap-[30px] ${styles.lent}`}>
        <div className={`flex items-center-safe justify-between`}>
          <h2 className="text-lg font-semibold mb-3">Active products</h2>
          <div className={`flex item-center justify-center border gap-[5px] rounded-[50px] ${styles.view}`}>
            <h1>View all</h1>
            < IoArrowForward />
          </div>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2`}>

          {summary.activeProducts?.length > 0 ? (
            summary.activeProducts.map((prod, idx) => (
              <div
                key={idx}
                className={` border rounded bg-gray-50 text-sm ${styles.acti}`}
              >
                {prod}
              </div>
            ))
          ) : (
            <div className={`${styles.flyer} flex flex-col lg:flex-row  col-span-full justify-center items-center gap-[20px]`}>
              <img src="/img/flyers.svg" alt=""  className="h-[150px]"/>
              <div className="flex flex-col items-start gap-[20px]" >
                <h3 className="font-medium text-[20px]">No products or services</h3>
                <p className={`lg:w-[22vw]`}>Products and services will appear here once you've successfully completed your first order.</p>
                <button className={`bg-blue-950 text-white ${styles.order} rounded`}>Place new order</button>
              </div>
            </div>
          )}
          
        </div>
      </section>

      {/* Invoices + Tickets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
        <section className={`flex flex-col gap-[30px] bg-white rounded ${styles.lent}`}>
          <div className={`flex items-center-safe justify-between`}>
            <h2 className="text-lg font-semibold mb-3">Invoices</h2>
            <Link href="/invoices" className={`flex item-center justify-center border gap-[5px] rounded-[50px] ${styles.view}`}>
              <h1>View all</h1>
              < IoArrowForward />
            </Link>
          </div>

          <div className={`space-y-4`}>
            {invoices?.length > 0 ? (
              invoices.slice(0, 4).map((inv)=>(
                <div  key={inv.id}   className={`flex items-start justify-between border-b ${styles.voic}`}>
                  

                  {/* Left side */}
                  <div className={`flex gap-3 items-center`}>

                    {/* Status icon */}
                    <div className={`flex items-center gap-[10px]`}>
                      <div >{statusIcons[inv.status]}</div>
                      <span className={`border-r-[2px] h-[70px]`} style={{ borderColor: statusColors[inv.status] }}></span>
                    </div>
                    

                    {/* Invoice details */}
                    <div className={`flex flex-col`}>
                      <div className={`text-sm font-semibold`}>
                        {inv.id}{" "}
                        <span className={`text-gray-500 text-xs`}>({inv.type})</span>
                      </div>
                      <div className={`text-gray-700 text-sm`}>
                        Item(s): {inv.items.join(", ")}
                      </div>
                      <div className={`text-gray-400 text-xs`}>Issued {inv.issued}</div>
                    </div>
                  </div>

                  {/* Right side */}
                  <div className={`flex flex-col items-end`}>
                    <div className={`text-sm font-semibold`}>{inv.amount}</div>

                    {inv.status === "PAID" && (
                      <>
                        <div className="text-green-600 text-sm font-medium">{inv.status}</div>
                        <div className="text-gray-400 text-xs">{inv.paidDate}</div>
                      </>
                    )}

                    {inv.status === "UNPAID" && (
                      <>
                        <div className="text-orange-500 text-sm font-medium">{inv.status}</div>
                        <div className="text-orange-500 text-xs">
                          {inv.amount} due {inv.due}
                        </div>
                      </>
                    )}

                    {inv.status === "CANCELLED" && (
                      <>
                        <div className="text-red-500 text-sm font-medium">{inv.status}</div>
                        <div className="text-gray-400 text-xs">
                          This order was cancelled
                        </div>
                      </>
                    )}

                    {inv.status === "REFUNDED" && (
                      <>
                        <div className="text-blue-500 text-sm font-medium">{inv.status}</div>
                        <div className="text-gray-400 text-xs">
                          Refunded on {inv.paidDate}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))
            ):(
              <div className="relative flex flex-col items-center justify-center min-h-[400px] w-full">
                <div className={`w-full max-w-2xl ${styles.sv}`}>
                <PlaceholderRow showRight={!isMobile}/>
                <PlaceholderRow leftWidths={[300, 220, 180]} rightWidths={[84, 128]} showRight={!isMobile}/>
                {/* This third row only shows on desktop */}
                {!isMobile && (
                    <PlaceholderRow leftWidths={[280, 230, 190]} rightWidths={[72, 132]} showRight={true}/>
                )}
                </div> 

                {/* begin search  */}
                
                <div className="absolute inset-0 flex items-center justify-center">
         
                    <div className={`${styles.placeh} bg-[#FFFFFF] rounded-[10px] border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-black flex flex-col gap-[15px] items-center text-center`}>
                  
                    <h3>No results</h3>
                    <p>There are no invoices to show.</p>
                    </div>
 
                </div>
              </div>
            )}

          </div>          

          {/* <div className="space-y-4">
            {invoices?.length > 0 ? (
              invoices.slice(0, 4).map((inv) => (
                <div key={inv.id} className="p-3 border rounded">
                  <p className="font-medium">{inv.number}</p>
                  <p className="text-sm text-gray-600">
                    Issued {new Date(inv.issuedAt).toLocaleDateString()}
                  </p>
                  <p className="font-semibold">${inv.amount}</p>
                  <div className="flex items-center gap-2 mt-1">
                    {inv.status === "paid" ? (
                      <FcPaid />
                    ) : (
                      <TbCancel className="text-red-500" />
                    )}
                    <span className="capitalize">{inv.status}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No invoices</p>
            )}
          </div> */}
        </section>

        <section className={`bg-white rounded ${styles.lent}`}>
          <div className={`flex items-center-safe justify-between`}>
            <h2 className="text-lg font-semibold mb-3">Active tickets</h2>
            <div className={`flex item-center justify-center border gap-[5px] rounded-[50px] ${styles.view}`}>
              <h1>View all</h1>
              < IoArrowForward />
            </div>
          </div>
          <div className="space-y-4">
            {tickets?.length > 0 ? (
              tickets.map((t) => (
                <div key={t.id} className="p-3 border rounded">
                  <p className="font-medium">{t.subject}</p>
                  <p className="text-sm text-gray-600 capitalize">
                    {t.status}
                  </p>
                </div>
              ))
            ) : (
              <div className="relative flex flex-col items-center justify-center min-h-[400px] w-full">
                <div className={`w-full max-w-2xl flex flex-col items-center justify-center ${styles.sv}`}>
                <Placeholderticket showRight={!isMobile}/>
                <Placeholderticket leftWidths={[300, 220, 180]} rightWidths={[84, 128]} showRight={!isMobile}/>
                {/* This third row only shows on desktop */}
                {!isMobile && (
                    <Placeholderticket leftWidths={[280, 230, 190]} rightWidths={[72, 132]} showRight={true}/>
                )}
                </div> 

                {/* begin search  */}
                
                <div className="absolute inset-0 flex items-center justify-center  backdrop-blur-[2px]">

                    <div className={`${styles.placeh} bg-[#FFFFFF] rounded-[10px] border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-black flex flex-col gap-[15px] items-center text-center`}>
                  
                    <h3>No results</h3>
                    <p>You have no active tickets.</p>
                    </div>

                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Activity Log */}
      {/* <section>
        <h2 className="text-lg font-semibold mb-3">Recent activity</h2>
        <div className="space-y-2">
          {activity?.length > 0 ? (
            activity.map((log, idx) => (
              <div
                key={idx}
                className="flex justify-between text-sm p-2 border-b"
              >
                <span>{log.action}</span>
                <span className="text-gray-500">
                  {log.at ? new Date(log.at).toLocaleDateString() : "N/A"}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No activity yet</p>
          )}
        </div>
      </section> */}
    </div>
  );
}