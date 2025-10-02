// import React from 'react'
// import styles from "./invoice.module.css"

// const Invoice = () => {
//   return (
//     <div>Invoice</div>
//   )
// }

// export default Invoice

"use client";

import { IoIosCheckmark } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdRefresh } from "react-icons/md";
import { Ban } from "lucide-react";

const statusIcons = {
  PAID: <IoIosCheckmark className="text-green-500 text-lg" />,
  UNPAID: <RiErrorWarningFill className="text-orange-400 text-lg" />,
  CANCELLED: <Ban className="text-red-500 text-lg" />,
  REFUNDED: <MdRefresh className="text-blue-500 text-lg" />,
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
  },
  {
    id: "M-INV-391275",
    type: "Renewal",
    items: [".ca (viennoise.ca)"],
    issued: "Sep 10th",
    amount: "$17.99",
    status: "UNPAID",
    due: "Oct 10th",
  },
  {
    id: "M-INV-373940",
    type: "New order",
    items: [".ca (sitie.ca)"],
    issued: "Sep 7th",
    amount: "$17.99",
    status: "CANCELLED",
  },
  {
    id: "M-INV-248791",
    type: "New order",
    items: [".ca (mimt.ca)"],
    issued: "Sep 7th",
    amount: "$15.45",
    status: "REFUNDED",
    paidDate: "Paid Sep 13th",
  },
];

export default function InvoicesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Invoices</h1>

      <div className="bg-white rounded shadow">
        {invoices.map((inv) => (
          <div key={inv.id} className="flex items-start justify-between border-b py-4 px-4">
            {/* Left */}
            <div className="flex gap-3">
              <span>{statusIcons[inv.status]}</span>
              <div className="flex flex-col">
                <div className="text-sm font-semibold">
                  {inv.id} <span className="text-gray-500 text-xs">({inv.type})</span>
                </div>
                <div className="text-gray-700 text-sm">
                  Item(s): {inv.items.join(", ")}
                </div>
                <div className="text-gray-400 text-xs">Issued {inv.issued}</div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-end">
              <div className="text-sm font-semibold">{inv.amount}</div>

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
                  <div className="text-gray-400 text-xs">This order was cancelled</div>
                </>
              )}

              {inv.status === "REFUNDED" && (
                <>
                  <div className="text-blue-500 text-sm font-medium">{inv.status}</div>
                  <div className="text-gray-400 text-xs">Refunded on {inv.paidDate}</div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
