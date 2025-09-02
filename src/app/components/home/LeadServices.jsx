"use client";
import styles from "./home.module.css";
import { useRef } from "react";
import Link from 'next/link';
// import styles from "./home.module.css";

const services = [
  {
    title: "Basic Lead Generation",
    tag: "Starter",
    tagicon: "🎯",
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
    tagicon: "🚀",
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
    tagicon: "💼",
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
    tagicon: "📱",
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
    <section className={`relative w-full flex flex-col md:item-center md:justify-center md:gap-[50px] ${styles.gradient}`}>
          <div className={`flex flex-col lg:flex-row items-center justify-center lg:justify-between p-12 text-white md:pb-[30px] ${styles.ttp}`}>
          <div className={`max-w-lg flex flex-col lg:items-start lg:text-left items-center text-center gap-[30px] ${styles.pag}`}>
            <h2 className="lg:text-[48px] lg:w-[40vw] lg:leading-[60px] font-bold">Powering Your Business to the Next Level</h2>
            <p className="lg:text-[20px] lg:w-[42vw]">Seamless solutions to drive growth, streamline operations, and enhance customer relationships.</p>
            <Link href='/signup'>
              {/* <button className={`bg-[#01A2D9] text-white-700 font-semibold lg:w-[13vw] ${styles.butn}`}>Get Started</button> */}
            </Link>
          </div>
          <div className="relative z-10 mt-10 lg:mt-0">
            <img src="/img/hmp.png" alt="Profile" className={`lg:w-[500px] lg:h-[500px] object-cover w-[400px] h-[400px] lg:rounded-full mx-auto ${styles.img}`}
            style={{
              maskImage: 'linear-gradient(to bottom, black 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)',
            }} />
            <div className={`text-yellow-400 text-[30px] text-center z-20 relative top-[-10px] lg:right-[50px] ${styles.star}`}>  ★★★★★ </div>
          </div>
          </div>

           <div className={`w-full ${styles.gm}`}>
      {/* Header */}
      <div className={`text-center ${styles.grt}`}>
        <span className="bg-blue-500 text-white rounded-full text-sm font-semibold">
          Growth & Marketing
        </span>
        <h2 className={`text-3xl font-bold text-[white]`}>Lead Generation Services</h2>
        <p className="text-[white]">Grow your business with targeted leads</p>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className={`flex gap-6 overflow-x-auto no-scrollbar `}
      >
        {services.map((s, i) => (
          <div
            key={i}
            className={`min-w-[300px] w-[300px] rounded-2xl shadow-lg bg-white`}
          >
            <main className={`relative  w-full h-40 rounded-t-lg shadow-lg bg-gradient-to-r from-gray-800 to-orange-500 flex items-center justify-center `}>
              {s.tag && (
              <span className={`absolute top-3 right-3 text-xs bg-blue-500 text-white rounded-full w-fit ${styles.tag}`}>
                {s.tag}
              </span>
            )}
            <span className="text-4xl">{s.tagicon}</span>
            </main>
            <div className={`flex flex-col gap-[8px] ${styles.card}`}>
              <h3 className="text-lg font-semibold text-black">{s.title}</h3>
              <p className="text-black ">{s.desc}</p>
              <section className="flex gap-[10px] items-start justify-items-normal">
                <p className="text-[orange]">{s.rating}</p>
                <p className="text-black">{s.reviews}</p>
              </section>
              <p className="text-blue-500 font-bold text-xl">{s.price}</p>
              <ul className="text-sm text-black space-y-1">
                {s.features.map((f, idx) => (
                  <li key={idx}>✓ {f}</li>
                ))}
              </ul>
              <button className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r from-gray-800 to-orange-500">
                {s.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className={`flex justify-center gap-4 ${styles.navbt}`}>
        <button
          onClick={() => scroll("left")}
          className="px-4 py-2 bg-gray-200 text-black rounded-lg"
        >
          ← Previous
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          View All Marketing Services
        </button>
        <button
          onClick={() => scroll("right")}
          className="px-4 py-2 bg-gray-200 text-black rounded-lg"
        >
          Next →
        </button>
      </div>
    </div>

          {/* <div className={` w-full md:gap-x-[50px] md:gap-[30px] grid grid-cols-1 md:grid-cols-2 md:items-center lg:grid-cols-4 justify-center ${styles.servic} `}>
          {cards.map((card) => (
            <div key={card.title} className={`bg-white text-blue-800 rounded-[20px] shadow-lg flex flex-col gap-[13px] lg:w-[17vw] w-full md:w-[vw]  ${styles.serv}`}>
              <div className='flex items-center gap-[15px]'>
                <p className='text-[30px]'>{card.icon}</p>
                <h3 className={`font-bold text-[15px] lg:w-[13vw] ${styles.tit}`}>{card.title}</h3>
              </div>
              <ul className="space-y-1 text-sm">
                {card.desc.map((item, idx) => <li key={idx}>• {item}</li>)}
              </ul>
              <a href="#" className="text-blue-600 text-sm mt-2 inline-block underline">Learn More</a>
            </div>
          ))}
        </div> */}
      </section>
   
  );
}
