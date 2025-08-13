"use client"
import { useEffect, useRef, useState } from "react";
import styles from "./domain.module.css"
import { FaSearch } from "react-icons/fa";
import { BsClipboard } from "react-icons/bs";
import { RiShieldUserLine } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";


// import { VscStarHalf } from "react-icons/vsc";


const everysip = [
  {
    icon : <BsClipboard />,
    title : "Instant registration",
    details : "Secure the domain you’ve always wanted without delay — register it instantly with AI‑guided setup."
  },
  {
    icon : <RiShieldUserLine />,
    title : "Free WHOIS privacy protection",
    details : "Privacy is important — that’s why we include full WHOIS protection and proactive security checks with every domain."
  },
  {
    icon : "",
    title : "Free web forwarding",
    details : "Redirect traffic from your domain to a preferred website, making navigation and accessibility easier than ever."
  },
  {
    icon : "",
    title : "Simple transfers (policy)",
    details : "Transfers are straightforward: CA$100 to transfer in. Generate your auth codes in our control panel. Transfers‑out available after 12 months."
  },
  {
    icon : "",
    title : "Unlimited email forwarding",
    details : "Redirect unlimited emails to chosen addresses — forwarding only (no inbox hosting) — so you stay connected with efficient communication."
  },
  {
    icon : "",
    title : "Flat‑rate domain renewal",
    details : "Predictable pricing at CA$19.99/mo across terms. We cover domain, transaction, and admin costs — without sacrificing quality."
  },
  {
    icon : "",
    title : "Anycast DNS & 99.9% uptime",
    details : "Global Anycast DNS and resilient infrastructure deliver fast lookups and reliable resolution — built for speed and stability."
  },
  {
    icon : "",
    title : "Easy contact management",
    details : "Enjoy hassle‑free contact management — make changes, do trades or transfers, or update contact details in bulk with ease."
  },
  
]
const Orderup = [
  {
    icon : <BsClipboard />,
    title : "Transparent domain pricing",
    details : "Enjoy world-class service at a flat CA$19.99/mo — our pricing is transparent so you can make informed decisions without hidden fees or surprises."
  },
  {
    icon : <BsClipboard />,
    title : "Smart domain alerts",
    details : "Never miss critical updates again! Our AI-driven dashboard and tailored alerts keep you up-to-date with every aspect of your domain management."
  },
  {
    icon : "",
    title : "Always in your control",
    details : "All domains are registered in your name and fully belong to you, giving you complete authority to edit, transfer, or sell when you decide."
  },
  {
    icon : "",
    title : "Effortless management",
    details : "Our intuitive tools make managing your domain simple, secure, and efficient — keeping your online presence fully under your control."
  },
  {
    icon : "",
    title : "Multiple domain support",
    details : "Add as many domains as you need to grow your business — TAKATAK scales with you, without performance limits."
  },
  {
    icon : "",
    title : "24/7 expert assistance",
    details : "Contact us anytime — our dedicated AI-backed support team is committed to your success and ready to solve any challenge."
  },
  
]

const customers = [
  {
    star: '⭐️⭐️⭐️⭐️⭐️',
    title : 'Prompt solutions',
    message : 'The support team at TAKATAK has always been prompt, and most of the time the solution is quick and thorough. Some issues were technical, some billing-related, and some domain-specific. Last time, I was referred to a senior AI-assisted tech specialist who resolved my mail service problem instantly. Thank you!',
    name : 'Marcus D'
  },
  {
    star: '⭐️⭐️⭐️⭐️⭐️',
    title : 'Top-notch support and customer service',
    message : 'We moved our existing domains from another host to TAKATAK. During the transfer, a few domains had issues, but TAKATAK’s team resolved them quickly so we could resume business without delays. Their AI+human support is top-notch, and very client-focused! Thank you TAKATAK!',
    name : 'Clark A'
  },
  {
    star: '⭐️⭐️⭐️⭐️⭐️',
    title : 'I have 11 services & 6 domains with TAKATAK',
    message : 'I manage 11 services and 6 domains with TAKATAK. Their service is amazing, and their support — especially via WhatsApp — has been fast, friendly, and incredibly helpful. TAKATAK is highly recommended!',
    name : 'Omar'
  },
]


function PlaceholderRow({ 
  leftWidths = [320, 240, 200], 
  rightWidths = [80, 140], 
  showRight = true,
}) {
  return (
    <div className={styles.row}>
      {/* LEFT SVG */}
      <svg
        className={`${styles.leftSvg} ${styles.mobileSvg}`}
        viewBox="0 0 420 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="20" y="20" width="17" height="17" rx="6" className={styles.shape} />
        <rect x="52" y="8" width='80' height="10" rx="5" className={styles.shape2} />
        <rect x="52" y="23" width='150' height="15" rx="4" className={styles.shape} />
        <rect x="52" y="44" width='120' height="8" rx="5" className={styles.shape} />

        {/* ✅ New extra shape for mobile only */}
        <rect
          className={`${styles.shape} ${styles.mobileOnly}`}
          x="52"
          y="70"
          width="150"
          height="30"
          rx="4"
        />
      </svg>

      {/* RIGHT SVG (conditionally shown)*/}
      {showRight && (
        <svg
        className={styles.rightSvg}
        viewBox="0 0 300 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="23" width='50' height="20" rx="5" className={styles.shape} />
        <rect
          x={rightWidths[0] }
          y="16"
          width={rightWidths[1]}
          height="32"
          rx="5"
          className={styles.shape2}
        />
        <line
          x1="0"
          x2="300"
          y1="62"
          y2="62"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="1"
        />
      </svg>
      )}
    </div>
  );
}

export default function DomainPage() {
  const [hasTyped, setHasTyped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const upmRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (upmRef.current) {
        const input = upmRef.current.shadowRoot?.querySelector("input");
        if (input && !input.hasListenerAttached) {
          input.hasListenerAttached = true;

          input.addEventListener("input", () => {
            setHasTyped(input.value.trim().length > 0);
          });
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);


  return (
    <main className="">
      <script type="module" src="https://embed.upmind.app/upm-widget.js" strategy="afterInteractive"/>
       <section className={`${styles.cont} flex flex-col item-center justify-center`}>
        <div className="flex flex-col items-center justify-center text-white gap-[40px]">
          <h1 className="text-center text-[30px] w-[90vw] lg:text-[34px] font-[700] lg:w-[45vw]">Power Your Online Success{" "} <span className="font-medium">with the Perfect Domain.</span> </h1>
          <p className="text-[18px] font-[600] w-[80vw] text-center lg:w-[60vw]">
            Whether you’re building your first website, expanding your business presence, or launching the next big brand, TAKATAK makes securing your domain name fast, simple, and affordable.
            From entrepreneurs and small businesses to large enterprises, we’ve got the right domain for every vision. With instant registration.
          </p>
        </div>
        <div>
          <div className={`${styles.bar} `}>
            {/* <script src="https://widgets.upmind.app/dac/upm-dac.min.js"></script>
            <upm-widget
              as="Dac"
              locale="en"
              ref={upmRef}
              bind='{"orderConfigUrl":"https://fimjpyw0mnzy.upmind.app/order/product", "currencyCode":"CAD"}'
              // order-config-url="https://fimjpyw0mnzy.upmind.app/order/product"
              // currency-code="CAD"
            ></upm-widget> */}
            <script src="https://widgets.upmind.app/dac/upm-dac.min.js"></script>
            <upm-dac
              ref={upmRef}
              order-config-url="https://fimjpyw0mnzy.upmind.app/order/product"
              currency-code="CAD"
            ></upm-dac>
          </div>
          {/* <div className={`${styles.bar} border`}>
            <script src="https://widgets.upmind.app/dac/upm-dac.min.js"></script>
            <upm-dac
              ref={upmRef}
              order-config-url="https://fimjpyw0mnzy.upmind.app/order/product"
              currency-code="CAD"
            ></upm-dac>
          </div> */}
        
          {!hasTyped && (
          <div>
            <div className={`${styles.sv}`}>
              <PlaceholderRow showRight={!isMobile}/>
              <PlaceholderRow leftWidths={[300, 220, 180]} rightWidths={[84, 128]} showRight={!isMobile}/>
              {/* This third row only shows on desktop */}
               {!isMobile && (
                <PlaceholderRow leftWidths={[280, 230, 190]} rightWidths={[72, 132]} showRight={true}/>
              )}
            </div> 

            {/* begin search  */}
            
               <div className="relative bottom-[300px] lg:bottom-[400px] z-10">
              <div className={`flex items-center justify-center`}>
                <div className={`${styles.placeh} bg-[#1B076E] rounded-[10px] text-white flex flex-col gap-[15px] items-center text-center`}>
                <h1 className={`${styles.icon} border-2 rounded-full text-[20px] font-[900]`}>
                <FaSearch />
                </h1>
                <h3>Search & Secure Your Domain Now</h3>
                <p>(Integrated with instant availability check & proceed)</p>
                </div>
              </div>
            </div>
          </div>
            )} 
        </div>
       </section>

       <section className={`flex flex-col items-center justify-center text-black gap-[30px] bg-white ${styles.sip}`}>
        <h1 className="text-[33px] text-center">We get better with{" "} <span className="font-extrabold">every tap.</span></h1>
        <p className="text-center text-[19px] font-semibold w-[85vw]">What’s in a TAKATAK domain? Everything you could want and more. From AI‑assisted setup to instant registration, you can expect our best in every. Single. One.</p>
        <div className="grid grid-cols-1 gap-[20px]">
          {everysip.map((data, dex) =>(
            <div key={dex} className={`bg-[#f7f8f8] ${styles.dex} rounded-[10px] flex flex-col gap-[15px]`}>
              <h1 className={`bg-[blue] ${styles.icon} max-w-[11.8vw] text-white text-[25px] rounded-[8px]`}>{data.icon}</h1>
              <h2 className="font-extrabold text-[18px] w-full">{data.title}</h2>
              <p className="font-medium ">{data.details}</p>
            </div>
          ))}
        </div>
       </section>

       <section className={`flex flex-col items-center justify-center text-black gap-[30px] bg-white ${styles.sip}`}>
        <h1 className="text-[33px] text-center font-extrabold">Locked in with every click!</h1>
        <p className="text-center text-[19px] font-semibold w-[85vw]">What do our clients love about TAKATAK? Whatever plan you choose, know for certain that you and your domain are in safe, secure, AI-optimized hands.</p>
        <div className="grid grid-cols-1 gap-[20px]">
          {Orderup.map((data, dex) =>(
            <div key={dex} className={`bg-[#f7f8f8] ${styles.dex} rounded-[10px] flex flex-col gap-[15px]`}>
              <h1 className={`bg-[#e8e7ff] ${styles.icon} max-w-[11.8vw] text-[#8f59e1] text-[25px] rounded-[8px]`}>{data.icon}</h1>
              <h2 className="font-extrabold text-[18px] w-full">{data.title}</h2>
              <p className="font-medium ">{data.details}</p>
            </div>
          ))}
        </div>
       </section>

       <section className={`flex flex-col items-center justify-around text-black gap-[30px] bg-[#f7f8f8] ${styles.sip}`}>
        <div className={`flex flex-col gap-[30px]`}>
          <h1 className="text-[33px] text-start font-extrabold">Next-level <span className="font-medium">security</span></h1>
          <p className="text-start text-[19px] font-semibold ">Protect your data and online identity with enterprise-grade, AI-driven safeguards. With TAKATAK, you can rest easy with free WHOIS privacy, domain locking, and advanced two-factor authentication for unbeatable account security.</p>
          <hr className="text-[#d8dbdf]"/>
          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white rounded-[50px]"/>
            <p className="text-[#5d33ff] text-[20px] font-medium">LiteSpeed-optimized servers</p>
          </div>
          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white rounded-[50px]"/>
            <p className="text-[#5d33ff] text-[20px] font-medium">Zero-downtime architecture</p>
          </div>
          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white  w-[6vw] rounded-full"/>
            <p className="text-[#5d33ff] text-[20px] font-medium">Custom AI-tuned configuration with no timeouts</p>
          </div>
        </div>
          <img src="/img/Top.webp" alt="" className="h-[230px]"/>
       </section>

       <section className={`flex flex-col items-center justify-around text-black gap-[30px] bg-[white] ${styles.sip}`}>
       <img src="/img/Nohidden.webp" alt="" className="h-[230px]" />
        <div className={`flex flex-col gap-[30px]`}>
          <h1 className="text-[33px] text-start font-extrabold">No <span className="font-medium">hidden fees</span> </h1>
          <p className="text-start text-[19px] font-semibold ">What you see is what you pay — no surprises. TAKATAK’s transparent flat-rate pricing means no extra charges or mystery fees, so you always know exactly what your domain will cost.</p>
          <hr className="text-[#d8dbdf]"/>

          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white rounded-[50px]"/>
            <p className="text-[#5d33ff] text-[20px] font-medium">LiteSpeed-optimized servers</p>
          </div>
          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white rounded-[50px]"/>
            <p className="text-[#5d33ff] text-[20px] font-medium">Zero-downtime architecture</p>
          </div>
          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white  w-[6vw] rounded-full"/>
            <p className="text-[#5d33ff] text-[20px] font-medium">Custom AI-tuned configuration with no timeouts</p>
          </div>
        </div>
       </section>

       <section className={`flex flex-col items-center justify-around text-black gap-[30px] bg-[#f7f8f8] ${styles.sip}`}>
        <div className={`flex flex-col gap-[30px]`}>
          <h1 className="text-[33px] text-start font-extrabold">24/7 <span className="font-medium">AI-backed support</span></h1>
          <p className="text-start text-[19px] font-semibold ">Our dedicated human-plus-AI support team is available around the clock to assist you with any domain-related questions or issues. Get instant answers, expert guidance, and hands-on troubleshooting anytime, anywhere in the world.</p>
          <hr className="text-[#d8dbdf]"/>
          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white w-[7vw] rounded-full"/>
            <p className="text-[#5d33ff] text-[20px] font-medium">Round-the-clock help to resolve your questions quickly</p>
          </div>
          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white w-[8vw] rounded-full"/>
            <p className="text-[#5d33ff] text-[20px] font-medium">Access expert and AI-powered assistance 24/7 for any concerns</p>
          </div>
          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white  w-[10vw] rounded-full"/>
            <p className="text-[#5d33ff] text-[20px] font-medium">Consistent, reliable support whenever you need help with your domain</p>
          </div>
        </div>
          <img src="/img/support.webp" alt="" className="h-[230px]"/>
       </section>

       <section className={`flex flex-col items-center justify-center text-black gap-[30px] bg-[white] ${styles.sip}`}>
        <h1 className="text-[33px] text-center font-bold">Don’t just take our word for it.</h1>
        <p className="text-center text-[19px] font-normal w-[85vw]">We love our domain customers and making their day — plus, they say “TAKATAK delivers” way better than we do.</p>
        <div className="grid grid-cols-1 gap-[20px]">
          {customers.map((cus, index)=>(
            <div key={index} className={`bg-[#f7f8f8] ${styles.dex} rounded-[10px] flex flex-col gap-[15px]`}>
              <h1 className="bg-[green] ${styles.icon} max-w-[28vw]">{cus.star}</h1>
              <h2 className="font-bold text-[18px] w-full">{cus.title}</h2>
              <p className="">{cus.message}</p>
              <h3 className="underline-offset-[3px] underline font-bold">{cus.name}</h3>
            </div>
          ))}
        </div>
       </section>
       <section className={`flex flex-col items-start justify-around text-[white] gap-[30px] bg-[#5D31FF] ${styles.chat}`}>
        <h4>DOMAINS SUPPORT</h4>
        <h1 className="text-[33px] ">Give your domain questions an AI boost of solutions.</h1>
        <p className="text-[20px] ">Our support team is available 24/7 for any domain questions or needs you have. And we’re not just running on coffee and late-night shifts — our experts and AI systems are based worldwide, so you’re always getting our best energy, instantly matched to yours.</p>
        <button className={`bg-[white] text-[black] rounded-[8px] text-[18px] ${styles.cbtn}`}>Let’s have a chat</button>
        <img src="/img/chat.webp" alt="" className="h-[280px] w-full"/>
       </section>
       <section></section>
       <section></section>
       <section></section>
       <section></section>
       <section></section>
       <section></section>
       <section></section>
       <section></section>
       <section></section>
       <section></section>
       <section></section>
       <section></section>
       <section></section>
       <section></section>
       <section></section>
       <section></section>
       

    </main>
  )
}