"use client";
import Image from "next/image";
import styles from "./home.module.css";



const cards = [
  {
    id: "dating",
    title: "LIKE OR NOT - Dating",
    topAction: "Sign up",
    img: "/img/server.png",
    cta: "Continue to Sign Up",
    variant: "dating"
  },
  {
    id: "cuba",
    title: "Cuba Travel (Agency)",
    topAction: "Search",
    img: "/img/server.png",
    cta: "Search Packages",
    variant: "travel"
  },
  {
    id: "social",
    title: "Social Platform",
    topAction: "Metricool-style",
    img: "/img/server.png",
    cta: "Open Dashboard",
    variant: "social"
  },
  {
    id: "voip",
    title: "VoIP Business Phone",
    topAction: "phone2.feel",
    img: "/img/server.png",
    cta: "Continue to Checkout",
    variant: "voip"
  },
  {
    id: "lead",
    title: "Lead Finder",
    topAction: "Bark-style",
    img: "/img/server.png",
    cta: "Find Providers",
    variant: "lead"
  },
  {
    id: "property",
    title: "Property Management",
    topAction: "Owners & Tenants",
    img: "/img/server.png",
    cta: "Open Suite",
    variant: "property"
  }
];

function SmallSelect({ children }) {
  // small styled select wrapper
  return (
    <select className="w-full text-sm bg-[#0B1621] border border-slate-700 rounded px-3 py-2 appearance-none">
      {children}
    </select>
  );
}


export default function Hero() {
  return (
    <main className={`${styles.gradient}`}>
      {/* Hero section */}
      <section className={`grid lg:grid-cols-2 gap-8  ${styles.tp}`}>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Build, Market, and Scale — All in One Place</h1>
          <p className="text-slate-300 mb-6">
            Domains, hosting, apps, local visibility, ads, VoIP, travel, social & dating — all under <strong>TACHYTECH</strong>, the Canadian marketplace with real 24/7 support.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="text-xs inline-flex items-center gap-2 px-3 py-2 rounded bg-[#0E162C] border border-slate-700">THE AMAZON OF THE ONLINE WEB SERVICE</div>
            <div className="text-xs inline-flex items-center gap-2 px-3 py-2 rounded bg-[#0E162C] border border-slate-700">#1 CANADIAN HOSTING & WEB SERVICES</div>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded bg-blue-600">Get Started</button>
            <button className="px-6 py-3 rounded bg-transparent border border-slate-700">Explore Marketplace</button>
          </div>
        </div>

        <div className="">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/img/server.png" alt="" className="object-cover w-full h-64 sm:h-80 md:h-96"/>
          </div>
        </div>
      </section>


      {/* MarketplaceGrid */}
       <section className="py-8">
      <h2 className="text-2xl font-semibold mb-2">Marketplace</h2>
      <p className="text-sm text-slate-400 mb-6">
        Quick launch widgets for Dating, Travel, Social, VoIP & Lead Finder.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c) => (
          <article
            key={c.id}
            className="card p-4 flex flex-col h-full border border-slate-800"
            aria-labelledby={`card-${c.id}`}
          >
            {/* top header: left small label, right mini action button */}
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-semibold text-slate-200 px-2 py-1 rounded bg-[#0E162C]">
                {c.title}
              </div>
              <div>
                <button className="text-xs px-2 py-1 rounded bg-[#0E2A4A] border border-slate-700">
                  {c.topAction}
                </button>
              </div>
            </div>

            {/* image hero */}
            <div className="h-28 rounded overflow-hidden mb-3">
              {/* Using next/image for correct sizing; images in /public/img/ */}
              <img
                src={c.img}
                alt={c.title}
                // width={1200}
                // height={800}
                className="w-full h-full object-cover"
                // priority={false}
              />
            </div>

            {/* card unique content */}
            <div className="flex-1">
              {/* switch by variant */}
              {c.variant === "dating" && (
                <>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <SmallSelect>
                      <option>Seeking — Women</option>
                      <option>Seeking — Men</option>
                      <option>Seeking — Everyone</option>
                    </SmallSelect>
                    <SmallSelect>
                      <option>Age — 18–30</option>
                      <option>Age — 31–45</option>
                      <option>Age — 46+</option>
                    </SmallSelect>
                  </div>

                  <div className="mb-2">
                    <SmallSelect>
                      <option>Montreal, QC</option>
                      <option>Toronto, ON</option>
                      <option>Vancouver, BC</option>
                    </SmallSelect>
                  </div>

                  <p className="text-xs text-slate-400 mt-2">
                    Twilio/WhatsApp login · VIP/GOLD · privacy first.
                  </p>
                </>
              )}

              {c.variant === "travel" && (
                <>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <SmallSelect>
                      <option>Montreal (YUL)</option>
                      <option>Toronto (YYZ)</option>
                    </SmallSelect>
                    <SmallSelect>
                      <option>Varadero (VRA)</option>
                      <option>Havana (HAV)</option>
                    </SmallSelect>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <SmallSelect>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </SmallSelect>
                    <SmallSelect>
                      <option>Economy</option>
                      <option>Package</option>
                      <option>All-Inclusive</option>
                    </SmallSelect>
                    <div className="invisible sm:visible" />
                  </div>

                  <p className="text-xs text-slate-400 mt-2">
                    Styled to match cubaresort.ca — swap this hero image with yours later.
                  </p>
                </>
              )}

              {c.variant === "social" && (
                <>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <SmallSelect>
                      <option>Connect — Facebook</option>
                      <option>Connect — Instagram</option>
                    </SmallSelect>
                    <SmallSelect>
                      <option>Goal — Schedule</option>
                      <option>Goal — Awareness</option>
                    </SmallSelect>
                  </div>

                  <p className="text-xs text-slate-400 mt-2">
                    Scheduling · Analytics · Reports · UTM · Ad calls.
                  </p>
                </>
              )}

              {c.variant === "voip" && (
                <>
                  <div className="text-xs inline-flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 rounded bg-[#072037] border border-slate-700">
                      Essentials — $19/user
                    </span>
                    <span className="px-2 py-1 rounded bg-[#072037] border border-slate-700">
                      phone2.feel
                    </span>
                  </div>

                  <div className="mb-2">
                    <SmallSelect>
                      <option>Keep my number</option>
                      <option>Get new number</option>
                    </SmallSelect>
                  </div>

                  <p className="text-xs text-slate-400 mt-2">
                    Integrate eSim/Sim+IVR activation after checkout · IVR · SMS · WhatsApp/Twilio.
                  </p>
                </>
              )}

              {c.variant === "lead" && (
                <>
                  <div className="mb-2">
                    <SmallSelect>
                      <option>Plumber</option>
                      <option>Electrician</option>
                      <option>Cleaner</option>
                    </SmallSelect>
                  </div>

                  <div className="mb-2">
                    <input
                      type="text"
                      placeholder="Postal code (e.g., H1E1)"
                      className="w-full text-sm bg-[#0B1621] border border-slate-700 rounded px-3 py-2"
                    />
                  </div>

                  <p className="text-xs text-slate-400 mt-2">
                    We'll route your requests to the best local providers in seconds.
                  </p>
                </>
              )}

              {c.variant === "property" && (
                <>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <SmallSelect>
                      <option>Portfolio — 1–20 units</option>
                      <option>Portfolio — 21–100 units</option>
                    </SmallSelect>
                    <SmallSelect>
                      <option>Need — Payments</option>
                      <option>Need — Maintenance</option>
                    </SmallSelect>
                  </div>

                  <p className="text-xs text-slate-400 mt-2">
                    Stripe/ACH · notices · vendor management · reporting.
                  </p>
                </>
              )}
            </div>

            {/* CTA row */}
            <div className="mt-3">
              <button className="w-full px-4 py-2 rounded bg-blue-600 text-sm">
                {c.cta}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
    </main>
  );
}




// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';

// export default function Homechoose() {
//   return (
//     <div className="min-h-screen bg-[#0B1221] text-white font-sans">
//       {/* Top Bar */}
//       <div className="bg-[#0E162C] text-xs text-center py-2 border-b border-gray-700">
//         <span>THE AMAZON OF THE ONLINE WEB SERVICE • WE ♡ CANADIAN HOSTING AND WEB SERVICES • 24/7 CUSTOMER SUPPORT</span>
//       </div>

//       {/* Header */}
//       <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-[#0B1221]">
//         <div className="text-2xl font-bold text-white">TACHYTECH</div>
//         <div className="flex gap-2 items-center">
//           <input
//             type="text"
//             placeholder="Search services, plans, help..."
//             className="px-3 py-2 rounded bg-[#0E162C] border border-gray-700 text-sm w-60"
//           />
//           <button className="px-4 py-2 bg-blue-600 rounded">Search</button>
//         </div>
//         <div className="flex items-center gap-6">
//           <a href="#" className="hover:underline">Account</a>
//           <a href="#" className="hover:underline">Cart (0)</a>
//         </div>
//       </header>

//       {/* Nav */}
//       <nav className="flex flex-wrap gap-4 px-6 py-3 bg-[#0E162C] border-b border-gray-800 text-sm">
//         {['Marketplace','Domain','Hosting','Mobile Apps','Local Listings','Lead Gen','VoIP','Cuba Travel','Dating','Property'].map((item, i) => (
//           <a key={i} href="#" className="hover:text-blue-400">{item}</a>
//         ))}
//       </nav>

//       {/* Hero */}
//       <section className="px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
//         <div>
//           <h1 className="text-4xl font-bold mb-4">Build, Market, and Scale — All in One Place</h1>
//           <p className="mb-6 text-gray-300">Domains, hosting, apps, local visibility, ads, VoIP, travel, social & dating — all under <strong>TACHYTECH</strong>, the Canadian marketplace with real 24/7 support.</p>
//           <ul className="mb-6 text-gray-400 space-y-1">
//             <li>• THE AMAZON OF THE ONLINE WEB SERVICE</li>
//             <li>• #1 CANADIAN HOSTING & WEB SERVICES</li>
//             <li>• 24/7 CUSTOMER SUPPORT</li>
//           </ul>
//           <div className="flex gap-4">
//             <button className="px-6 py-3 bg-blue-600 rounded">Get Started</button>
//             <button className="px-6 py-3 bg-[#0E162C] border border-gray-700 rounded">Explore Marketplace</button>
//           </div>
//         </div>
//         <div>
//           {/* <Image src="/img/server.png" alt="Server" width={600} height={400} className="rounded-lg" /> */}
//         </div>
//       </section>

//       {/* Marketplace Section */}
//       <section className="px-6 py-12">
//         <h2 className="text-2xl font-bold mb-6">Marketplace</h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             {title:'LIKE OR NOT - Dating', btn:'Continue to Sign Up', style:'Sign up'},
//             {title:'Cuba Travel (Agency)', btn:'Search Package', style:'Search'},
//             {title:'Social Platform', btn:'Open Dashboard', style:'Metricool-style'},
//             {title:'VoIP Business Phone', btn:'Continue to Checkout', style:'phone2.feel'},
//             {title:'Lead Finder', btn:'Find Providers', style:'Bark-style'},
//             {title:'Property Management', btn:'Open Suite', style:'Owners & Tenants'}
//           ].map((card, i)=>(
//             <div key={i} className="bg-[#0E162C] rounded-lg p-4 border border-gray-800 flex flex-col justify-between">
//               <h3 className="font-bold mb-3">{card.title}</h3>
//               <button className="mt-auto px-4 py-2 bg-blue-600 rounded text-sm">{card.btn}</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Domain Names */}
//       <section className="px-6 py-12 bg-[#0E162C]">
//         <h2 className="text-2xl font-bold mb-6">Domain Names</h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="p-6 bg-[#0B1221] rounded-lg border border-gray-800">
//             <h3 className="font-bold mb-3">Basic Domain</h3>
//             <p className="text-3xl font-bold mb-2">$12.99/yr</p>
//             <ul className="text-gray-400 mb-4 space-y-1 text-sm">
//               <li>✔ Free WHOIS privacy</li>
//               <li>✔ DNS + email forward</li>
//               <li>✔ 1-click connect</li>
//             </ul>
//             <button className="px-4 py-2 bg-blue-600 rounded text-sm">Search</button>
//           </div>
//           <div className="p-6 bg-[#0B1221] rounded-lg border border-gray-800">
//             <h3 className="font-bold mb-3">Pro Bundle</h3>
//             <p className="text-3xl font-bold mb-2">$24.99/yr</p>
//             <ul className="text-gray-400 mb-4 space-y-1 text-sm">
//               <li>✔ DNSSEC + SSL redirect</li>
//               <li>✔ Uptime alerts</li>
//               <li>✔ Brand-watch</li>
//             </ul>
//             <button className="px-4 py-2 bg-blue-600 rounded text-sm">Choose Pro</button>
//           </div>
//           <div className="p-6 bg-[#0B1221] rounded-lg border border-gray-800">
//             <h3 className="font-bold mb-3">Portfolio Manager</h3>
//             <p className="text-3xl font-bold mb-2">Custom</p>
//             <ul className="text-gray-400 mb-4 space-y-1 text-sm">
//               <li>✔ Bulk tools</li>
//               <li>✔ Dedicated manager</li>
//               <li>✔ API & SSO</li>
//             </ul>
//             <button className="px-4 py-2 bg-blue-600 rounded text-sm">Talk to Sales</button>
//           </div>
//         </div>
//       </section>

//       {/* Hosting Section */}
//       <section className="px-6 py-12">
//         <h2 className="text-2xl font-bold mb-6">Web Hosting</h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="p-6 bg-[#0E162C] rounded-lg border border-gray-800">Hosting Card</div>
//           <div className="p-6 bg-[#0E162C] rounded-lg border border-gray-800">Hosting Card</div>
//           <div className="p-6 bg-[#0E162C] rounded-lg border border-gray-800">Hosting Card</div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="px-6 py-6 bg-[#0E162C] text-center text-sm border-t border-gray-800">
//         <p>© 2025 TACHYTECH. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }
