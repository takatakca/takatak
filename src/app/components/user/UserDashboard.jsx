"use client";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./userdash.module.css"
import { FcPaid } from "react-icons/fc";
import { TbCancel } from "react-icons/tb";
import { IoArrowForward } from "react-icons/io5";
import { GiCardRandom } from "react-icons/gi";

function SummaryCard({ title, value, time }) {
  return (
    <div className={`rounded bg-[#E6E7E9] shadow-sm ${styles.alltime}`}>
      <p className=" ">{title}</p>
      <p className=" text-gray-500">{time}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
const prd =[
  {title:"product.1"},
  {title:"product.2"},
  {title:"product.3"},
  {title:"product.3"},
  {title:"product.3"},
  {title:"product.3"},
  {title:"product.3"},
  {title:"product.3"},
  {title:"product.3"},
  {title:"product.3"},
  {title:"product.3"},
]

export default function UserDashboard() {
  const { dashboard, user, orders, invoices, tickets, activity, summary } = useContext(AppContext);
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
            <div>
              <GiCardRandom />
              <h3>No products or services</h3>
              <p className="text-gray-500">Products and services will appear here once you've successfully completed your first order.</p>
              <button>Place new order</button>
            </div>
          )}
          
        </div>
      </section>

      {/* Invoices + Tickets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <section>
          <h2 className="text-lg font-semibold mb-3">Invoices</h2>
          <div className="space-y-4">
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
          </div>
        </section> */}

        {/* <section>
          <h2 className="text-lg font-semibold mb-3">Active tickets</h2>
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
              <p className="text-gray-500">No active tickets</p>
            )}
          </div>
        </section> */}
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