"use client";
import styles from "./home.module.css";
import { useRef } from "react";

const services = [
  {
    title: "Basic Lead Generation",
    tag: "Starter",
    desc: "Targeted campaigns to generate quality leads",
    rating: "★★★★★",
    reviews: "(856 campaigns)",
    price: "$199.99/month",
    features: ["Up to 50 qualified leads"],
    button: "Start Generating",
  },
  {
    title: "Pro Lead Campaign",
    tag: "Popular",
    desc: "Multi-channel campaigns with advanced targeting",
    rating: "★★★★★",
    reviews: "(634 campaigns)",
    price: "$499.99/month",
    features: ["Up to 150 leads + CRM integration"],
    button: "Scale Up",
  },
  {
    title: "Enterprise Lead System",
    tag: "Enterprise",
    desc: "Full-scale lead generation with account manager",
    rating: "★★★★★",
    reviews: "(298 enterprises)",
    price: "$999.99/month",
    features: ["Unlimited leads + Custom strategies"],
    button: "Contact Sales",
  },
  {
    title: "Social Media Marketing",
    tag: "",
    desc: "Complete social media management and advertising",
    rating: "★★★★★",
    reviews: "(1,234 brands)",
    price: "$299.99/month",
    features: ["All platforms + Content creation"],
    button: "Boost Presence",
  },
];

export default function LeadServices() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full px-6 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
          Growth & Marketing
        </span>
        <h2 className="text-3xl font-bold mt-4">Lead Generation Services</h2>
        <p className="text-gray-600">Grow your business with targeted leads</p>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar pb-6"
      >
        {services.map((s, i) => (
          <div
            key={i}
            className="min-w-[300px] w-[300px] rounded-2xl shadow-lg border bg-white flex flex-col p-6"
          >
            {s.tag && (
              <span className="text-xs bg-yellow-200 px-2 py-1 rounded-full mb-2 w-fit">
                {s.tag}
              </span>
            )}
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="text-gray-500 mt-2">{s.desc}</p>
            <p className="text-orange-500 font-bold mt-4 text-xl">{s.price}</p>
            <ul className="text-sm text-gray-600 mt-3 space-y-1">
              {s.features.map((f, idx) => (
                <li key={idx}>✓ {f}</li>
              ))}
            </ul>
            <button className="mt-auto bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
              {s.button}
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => scroll("left")}
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          ← Previous
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          View All Marketing Services
        </button>
        <button
          onClick={() => scroll("right")}
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
