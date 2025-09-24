"use client";
import Image from "next/image";
import styles from "./home.module.css";
import { ChevronDown } from "lucide-react";

import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";

const cards = [
  {
    id: "dating",
    title: "LIKE OR NOT - Dating",
    topAction: "Sign up",
    img: "/img/chat.webp",
    cta: "Continue to Sign Up",
    variant: "dating"
  },
  {
    id: "cuba",
    title: "Cuba Travel (Agency)",
    topAction: "Search",
    img: "/img/thumbnail.jpg",
    cta: "Search Packages",
    variant: "travel"
  },
  {
    id: "social",
    title: "Social Platform",
    topAction: "Metricool-style",
    img: "/img/catalogfr.jpg",
    cta: "Open Dashboard",
    variant: "social"
  },
  {
    id: "voip",
    title: "VoIP Business Phone",
    topAction: "phone2.feel",
    img: "/img/webhost.png",
    cta: "Continue to Checkout",
    variant: "voip"
  },
  {
    id: "lead",
    title: "Lead Finder",
    topAction: "Bark-style",
    img: "/img/class.png",
    cta: "Find Providers",
    variant: "lead"
  },
  {
    id: "property",
    title: "Property Management",
    topAction: "Owners & Tenants",
    img: "/img/complete.png",
    cta: "Open Suite",
    variant: "property"
  }
];

function SmallSelect({ children }) {
  // small styled select wrapper
  return (
    <div className="relative w-full">
      <select className={`text-white w-full bg-[#959ef1] border border-slate-700 rounded appearance-none ${styles.wrapper}`}>
        {children}
      </select>
      <ChevronDown
        className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[white]"
        size={16}
      />
    </div>
  );
}


export default function Hero() {
  const { upmindClientId } = useContext(AppContext);
  return (
    <main className={`${styles.gradient}`}>
      {/* Hero section */}
      <section className={`grid lg:grid-cols-2 gap-8  ${styles.tp}`}>
        <div className={`flex flex-col gap-[24px]`}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">Build, Market, and Scale — All in One Place</h1>
          <p className="text-white ">
            Domains, hosting, apps, local visibility, ads, VoIP, travel, social & dating — all under <strong>TACHYTECH</strong>, the Canadian marketplace with real 24/7 support.
          </p>

          <div className="grid grid-cols-2 gap-3 ">
            <div className={`text-xs inline-flex items-center gap-2 rounded bg-[#9a97b864] text-white border border-black ${styles.serv}`}>THE AMAZON OF THE ONLINE WEB SERVICE</div>
            <div className={`text-xs inline-flex items-center gap-2 rounded bg-[#9a97b864] text-white border border-black ${styles.serv}`}>#1 CANADIAN HOSTING & WEB SERVICES</div>
          </div>

          <div className="flex gap-4">
            <button className={`rounded font-semibold text-white bg-blue-600 ${styles.butn}`}>Get Started</button>
            <button className={`font-bold inline-flex items-center gap-2 rounded bg-[#9a97b864] text-white border border-black ${styles.serv}`}>Explore Marketplace</button>
          </div>
        </div>

        <div className="">
          <div className="rounded-[20px] overflow-hidden shadow-lg">
            <img src="/img/server.png" alt="" className="object-cover w-full h-64 sm:h-80 md:h-96"/>
          </div>
        </div>
      </section>


      {/* MarketplaceGrid */}
       <section className={`text-white flex flex-col gap-[30px] w-full ${styles.servic}`}>
        <div className="flex flex-col gap-[10px] ">
          <h2 className="text-2xl font-semibold ">Marketplace</h2>
          <p className="text-sm ">
            Quick launch widgets for Dating, Travel, Social, VoIP & Lead Finder.
          </p>
        </div>
     

      <div   className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 w-full">
        {cards.map((c) => (
          <article
            key={c.id}
            className={` flex flex-col bg-[#021198] border border-slate-800 rounded-[20px] overflow-hidden w-full lg:w-[23vw] ${styles.cardsec}`}
            aria-labelledby={`card-${c.id}`}
          >
            {/* top header: left small label, right mini action button */}
            <div className={`flex items-center justify-between ${styles.ctop}`}>
              <div className="text-[15px] font-bold text-slate-200 ">
                {c.title}
              </div>
              <div>
                <button className={`text-sm rounded-[10px] bg-slate-400 border border-slate-700 ${styles.topaction}`}>
                  {c.topAction}
                </button>
              </div>
            </div>

            {/* image hero */}
            <div className="rounded ">
              <img
                src={c.img}
                alt={c.title}
                className="h-[100px] w-full object-cover block"
              />
            </div>

            {/* card unique content */}
            <div className={` ${styles.cbotom} flex flex-col gap-[10px]`}>
              {/* switch by variant */}
              {c.variant === "dating" && (
                <>
                  <div className="grid grid-cols-2 gap-2">
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

                  <p className="text-sm text-white ">
                    Twilio/WhatsApp login · VIP/GOLD · privacy first.
                  </p>
                </>
              )}

              {c.variant === "travel" && (
                <>
                  <div className="grid grid-cols-2 gap-2">
                    <SmallSelect>
                      <option>Montreal (YUL)</option>
                      <option>Toronto (YYZ)</option>
                    </SmallSelect>
                    <SmallSelect>
                      <option>Varadero (VRA)</option>
                      <option>Havana (HAV)</option>
                    </SmallSelect>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
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

                  <p className="text-sm text-white">
                    Styled to match cubaresort.ca — swap this hero image with yours later.
                  </p>
                </>
              )}

              {c.variant === "social" && (
                <>
                  <div className="grid grid-cols-2 gap-2">
                    <SmallSelect>
                      <option>Connect — Facebook</option>
                      <option>Connect — Instagram</option>
                    </SmallSelect>
                    <SmallSelect>
                      <option>Goal — Schedule</option>
                      <option>Goal — Awareness</option>
                    </SmallSelect>
                  </div>

                  <p className="text-sm text-white">
                    Scheduling · Analytics · Reports · UTM · Ad calls.
                  </p>
                </>
              )}

              {c.variant === "voip" && (
                <>
                  <div className="inline-flex items-center gap-2">
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

                  <p className="text-sm text-white">
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

                  <div className="">
                    <input
                      type="text"
                      placeholder="Postal code (e.g., H1E1)"
                      className={`w-full text-white bg-[#0B1621] border border-slate-300 rounded outline-0 ${styles.leadfind}`}
                    />
                  </div>

                  <p className="text-sm text-white">
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

                  <p className="text-sm text-white">
                    Stripe/ACH · notices · vendor management · reporting.
                  </p>
                </>
              )}
            </div>

            {/* CTA row */}
            <div className="mt-3">
              <button className={` rounded-[10px] bg-blue-600 text-sm ${styles.cbtn}`}>
                {c.cta}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* Domain */}
    <section>
    <div className={`flex flex-col gap-[20px]  text-white ${styles.servic}`}>
        
        {/* Heading + Paragraph */}
        <div className={``}>
          <h2 className={`text-[25px] font-bold`}>Domain Names</h2>
          {/* <button className={`text-sm  `}>
            Explore pricing →
          </button> */}
        </div>
        <p className={`text-[18px]`}>
          Search & register .ca, .com, .org, WHOIS privacy & DNS tools included.
        </p>

        {/* Domain Pricing Cards */}
        <div className={`grid md:grid-cols-3 gap-6`}>
          
          {/* Card 1 - Basic Domain */}
          <div className={`bg-[#021198] rounded-xl shadow-lg overflow-hidden w-full lg:w-[23vw]`}>
            <div className={`h-36 w-full bg-[url('/img/nohidden.webp')] bg-cover bg-center`} />
            <div className={`flex flex-col gap-[20px] ${styles.domin}`}>
              <div className="flex items-center gap-[20px]">
              <span className={`text-xs uppercase bg-[#9a97b864] border border-[#c5c3e4ae] text-white  rounded-[15px] ${styles.sta}`}>
                Starter
              </span>
              <span className="font-bold">
                Basic Domain
              </span>
              </div>
              <div className="flex items-center">
              <p className={`text-2xl font-bold`}>
                $12.99
              </p>
              <p className={`text-[13px]`}><span className={`text-2xl font-bold`}>/yr</span>.ca first year</p>
              </div>
              <ul className={`flex flex-col gap-[7px] text-sm`}>
                <li>✔ Free WHOIS privacy</li>
                <li>✔ DNS + email forward</li>
                <li>✔ 1-click connect</li>
              </ul>
              <div className={`mt-6 flex gap-3`}>
                <button className={`bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm ${styles.trf}`}>
                  Search
                </button>
                <button className={`border border-[#c5c3e4ae] rounded-md text-sm ${styles.trf}`}>
                  Transfer
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - Pro Bundle */}
          <div className={`bg-[#021198] rounded-xl shadow-lg overflow-hidden w-full lg:w-[23vw]`}>
            <div className={`h-36 w-full bg-[url('/img/assistant.webp')] bg-cover bg-center`} />
            <div className={`flex flex-col gap-[10px] ${styles.domin}`}>
              <div className="flex items-center gap-[20px]">
              <span className={`text-xs uppercase bg-[#9a97b864] border border-[#c5c3e4ae] text-white  rounded-[15px] ${styles.sta}`}>
              Popular
              </span>
              <span className="font-bold">
              Pro Bundle
              </span>
              </div>
              <div className="flex items-center">
              <p className={`text-2xl font-bold`}>
              $24.99
              </p>
              <p className={`text-[13px]`}><span className={`text-2xl font-bold`}>/yr</span>+ security</p>
              </div>
              <ul className={`flex flex-col gap-[7px] text-sm`}>
                <li>✔ DNSSEC + SSL redirect</li>
                <li>✔ Uptime alerts</li>
                <li>✔ Brand-watch</li>
              </ul>
              <div className={`mt-6 flex gap-3`}>
                <button className={`bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm ${styles.trf}`}>
                  Choose Pro
                </button>
                <button className={`border border-[#c5c3e4ae] rounded-md text-sm ${styles.trf}`}>
                  Details
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - Portfolio Manager */}
          <div className={`bg-[#021198] rounded-xl shadow-lg overflow-hidden w-full lg:w-[23vw]`}>
            <div className={`h-36 w-full bg-[url('/img/migration.webp')] bg-cover bg-center`} />
            <div className={`flex flex-col gap-[10px] ${styles.domin}`}>
            <div className="flex items-center gap-[20px]">
              <span className={`text-xs uppercase bg-[#9a97b864] border border-[#c5c3e4ae] text-white  rounded-[15px] ${styles.sta}`}>
              Popular
              </span>
              <span className="font-bold">
              Pro Bundle
              </span>
              </div>
              <div className="flex items-center">
              <p className={`text-2xl font-bold`}>
              Custom
              </p>
              <p className={`text-[13px]`}><span className={`text-[15px] font-semibold`}>50+</span> domains</p>
              </div>
              <ul className={`flex flex-col gap-[7px] text-sm`}>
                <li>✔ Bulk tools</li>
                <li>✔ Dedicated manager</li>
                <li>✔ API & SSO</li>
              </ul>
              <div className={`mt-6 flex gap-3`}>
                <button className={`bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm ${styles.trf}`}>
                  Talk to Sales
                </button>
                <button className={`border border-[#c5c3e4ae] rounded-md text-sm ${styles.trf}`}>
                  Compare
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <div className={`grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-[20px] ${styles.servic}`}>
          {/*1 Portfolio Hosting */}
        <upm-widget
          as="PlanCard"
          client-id={upmindClientId}
          locale="en"
          bind={`{
            "id": "61e50989-73d2-4752-053c-e45e610832d7",
            "currencyCode": "cad"
          }`}
        ></upm-widget>

        {/*2 Bronze Hosting */}
        <upm-widget
          as="PlanCard"
          client-id={upmindClientId}
          locale="en"
          bind={`{
            "id": "1e96d298-537d-4e75-383b-14e120637085",
            "currencyCode": "cad"
          }`}
        ></upm-widget>

        {/*3 Silver Hosting */}
        <upm-widget
          as="PlanCard"
          client-id={upmindClientId}
          locale="en"
          bind={`{
            "id": "80d1639e-237d-4395-3e2a-54610589e572",
            "currencyCode": "cad"
          }`}
        ></upm-widget>
        {/*4 Gold Hosting */}
        <upm-widget
          as="PlanCard"
          client-id={upmindClientId}
          locale="en"
          bind={`{
            "id": "0381d780-e72d-4dd6-701c-8413569926e5",
            "currencyCode": "cad"
          }`}
        ></upm-widget>

       </div> 
    </main>
  );
}