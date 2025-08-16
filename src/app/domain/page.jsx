"use client"
import { useEffect, useRef, useState } from "react";
import styles from "./domain.module.css"
import { FaSearch } from "react-icons/fa";
import { BsClipboard } from "react-icons/bs";
import { RiShieldUserLine } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { AiOutlineGlobal } from "react-icons/ai";
import { ChevronDown, ChevronUp, Route, Repeat, Send, BookCopy } from "lucide-react";


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
    icon : <Route />,
    title : "Free web forwarding",
    details : "Redirect traffic from your domain to a preferred website, making navigation and accessibility easier than ever."
  },
  {
    icon : <Repeat />,
    title : "Simple transfers (policy)",
    details : "Transfers are straightforward: CA$100 to transfer in. Generate your auth codes in our control panel. Transfers‑out available after 12 months."
  },
  {
    icon : <Send />,
    title : "Unlimited email forwarding",
    details : "Redirect unlimited emails to chosen addresses — forwarding only (no inbox hosting) — so you stay connected with efficient communication."
  },
  {
    icon : <LiaHandHoldingUsdSolid />,
    title : "Flat‑rate domain renewal",
    details : "Predictable pricing at CA$19.99/mo across terms. We cover domain, transaction, and admin costs — without sacrificing quality."
  },
  {
    icon : <AiOutlineGlobal />,
    title : "Anycast DNS & 99.9% uptime",
    details : "Global Anycast DNS and resilient infrastructure deliver fast lookups and reliable resolution — built for speed and stability."
  },
  {
    icon : <BookCopy />,
    title : "Easy contact management",
    details : "Enjoy hassle‑free contact management — make changes, do trades or transfers, or update contact details in bulk with ease."
  },
  
]
const Orderup = [
  {
    icon : '/img/Freetransfer.svg',
    title : "Transparent domain pricing",
    details : "Enjoy world-class service at a flat CA$19.99/mo — our pricing is transparent so you can make informed decisions without hidden fees or surprises."
  },
  {
    icon : '/img/Notification.svg',
    title : "Smart domain alerts",
    details : "Never miss critical updates again! Our AI-driven dashboard and tailored alerts keep you up-to-date with every aspect of your domain management."
  },
  {
    icon : '/img/transfer.svg',
    title : "Always in your control",
    details : "All domains are registered in your name and fully belong to you, giving you complete authority to edit, transfer, or sell when you decide."
  },
  {
    icon : '/img/management.svg',
    title : "Effortless management",
    details : "Our intuitive tools make managing your domain simple, secure, and efficient — keeping your online presence fully under your control."
  },
  {
    icon : '/img/domains.svg',
    title : "Multiple domain support",
    details : "Add as many domains as you need to grow your business — TAKATAK scales with you, without performance limits."
  },
  {
    icon : '/img/support.svg',
    title : "24/7 expert assistance",
    details : "Contact us anytime — our dedicated AI-backed support team is committed to your success and ready to solve any challenge."
  },
  
]

const customers = [
  {
    star: '/img/stars.svg',
    title : 'Prompt solutions',
    message : 'The support team at TAKATAK has always been prompt, and most of the time the solution is quick and thorough. Some issues were technical, some billing-related, and some domain-specific. Last time, I was referred to a senior AI-assisted tech specialist who resolved my mail service problem instantly. Thank you!',
    name : 'Marcus D'
  },
  {
    star: '/img/stars.svg',
    title : 'Top-notch support and customer service',
    message : 'We moved our existing domains from another host to TAKATAK. During the transfer, a few domains had issues, but TAKATAK’s team resolved them quickly so we could resume business without delays. Their AI+human support is top-notch, and very client-focused! Thank you TAKATAK!',
    name : 'Clark A'
  },
  {
    star: '/img/stars.svg',
    title : 'I have 11 services & 6 domains with TAKATAK',
    message : 'I manage 11 services and 6 domains with TAKATAK. Their service is amazing, and their support — especially via WhatsApp — has been fast, friendly, and incredibly helpful. TAKATAK is highly recommended!',
    name : 'Omar'
  },
];

const redemptionFees = [
  { tld: ".com, .net, .org, .info, .biz", price: "CA$100" },
  { tld: ".ag, .blackfriday, .diet, .ec, .flowers, .guitars, .hiv, .md, .mg, .nf, .property", price: "CA$300" },
  { tld: ".ai, .game, .id, .kyoto, .lat, .movie, .sc, .so, .sport, .sucks, .versicherung, .zuerich, .watches", price: "CA$700" },
  { tld: ".new, .theatre, .tickets", price: "CA$1,000" },
  { tld: ".auto, .cars, .car, .bank, .insurance, .juegos, .ki, .lotto, .pr, .storage", price: "CA$3,150" },
  { tld: ".dealer, .inc, .protection, .rich, .security, .trust, .voting", price: "CA$5,000" },
  { tld: ".sexy", price: "CA$6,000" },
  { tld: ".spreadbetting", price: "CA$60,000" },
  { tld: "All other domains", price: "CA$250" }
];

const faqs = [
  {
    question: "What is a domain name?",
    answer:
      "Think of it as your business address online. Instead of a physical storefront, you have a unique domain where your brand lives and customers can connect with you.",
  },
  {
    question: "How do I choose a domain name?",
    answer:
      // "That’s what our handy domain search tool is for – just scroll back to the top of this page and punch in some ideas to find the one that screams \"you!\"",
      "That’s where our smart search tool comes in — just type in your ideas and our AI will suggest the perfect match."
  },
  {
    question: "Can I transfer my domain(s) to TAKATAK?",
    answer:
      "Yes — our transfer process is near-instant. Once your payment clears, check your inbox for a welcome email and access to your TAKATAK dashboard. Transfer-in fee: CA$100, with transfer-out available after 12 months.",
  },
  {
    question: "How long does it take for a newly registered domain to become active?",
    answer:
      "Almost instantly. We’ve built an automated setup process so your domain is live and ready in minutes.",
  },
  {
    question: "Do you provide domain privacy protection services?",
    answer:
      "Absolutely — full WHOIS privacy is included with every TAKATAK domain at no extra charge.",
  },
  {
    question: "Do you provide domain name parking?",
    answer:
      "Yes — we can park unlimited domains for you at no cost, until you’re ready to connect them.",
  },
  {
    question: "Can I manage my domain's DNS settings?",
    answer:
      "Yes — manage A, CNAME, MX, TXT, and more with full control via our dashboard.",
  },
  {
    question: "Can I automatically renew my domain?",
    answer:
      "Yes — auto-renew keeps your site running without interruptions, 24/7.",
  },
  {
    question: "Do you offer bulk discounts on domains?",
    answer:
      "Yes — if you’re registering 50 or more, our team can tailor a pricing plan for you.",
  },
];




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
  const [openIndex, setOpenIndex] = useState(null);

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

  

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


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
        <h1 className="text-[33px] text-center">We get better with{" "} <span className="font-extrabold lg:font-bold">every tap.</span></h1>
        <p className="text-center text-[19px] font-semibold w-[85vw] lg:w-[49vw]">What’s in a TAKATAK domain? Everything you could want and more. From AI‑assisted setup to instant registration, you can expect our best in every. Single. One.</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-[20px]">
          {everysip.map((data, dex) =>(
            <div key={dex} className={`bg-[#f7f8f8] ${styles.dex} rounded-[10px] flex flex-col gap-[15px]`}>
              <h1 className={`bg-[#632EF6] ${styles.icon} text-white text-[25px] rounded-[8px] flex self-start justify-center-safe`}>{data.icon}</h1>
              <h2 className="font-extrabold lg:font-bold text-[18px] w-full">{data.title}</h2>
              <p className="font-medium lg:text-[#545964]">{data.details}</p>
            </div>
          ))}
        </div>
       </section>

       <section className={`flex flex-col items-center justify-center text-black gap-[30px] bg-white ${styles.sip}`}>
        <h1 className="text-[33px] text-center font-extrabold lg:font-bold">Locked in with every click!</h1>
        <p className="text-center text-[19px] font-semibold w-[85vw] lg:w-[52vw]">What do our clients love about TAKATAK? Whatever plan you choose, know for certain that you and your domain are in safe, secure, AI-optimized hands.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-[20px]">
          {Orderup.map((data, dex) =>(
            <div key={dex} className={`bg-[#f7f8f8] ${styles.dex} rounded-[10px] flex flex-col gap-[15px]`}>
              <img src={data.icon} alt="icon" className={`h-[60px] w-[60px] flex self-start justify-center-safe ${styles.icon}`}/>
              <h2 className="font-extrabold lg:font-bold text-[18px] w-full">{data.title}</h2>
              <p className="font-medium lg:text-[#545964]">{data.details}</p>
            </div>
          ))}
        </div>
       </section>

       <section className={`flex flex-col lg:flex-row items-center justify-around text-black gap-[30px] bg-[#f7f8f8] ${styles.secur}`}>
        <div className={`flex flex-col gap-[30px]`}>
          <h1 className="text-[33px] text-start font-extrabold lg:font-bold">Next-level <span className="font-medium">security</span></h1>
          <p className="text-start text-[19px] font-semibold lg:w-[49vw] lg:font-normal lg:text-[#545964]">Protect your data and online identity with enterprise-grade, AI-driven safeguards. With TAKATAK, you can rest easy with free WHOIS privacy, domain locking, and advanced two-factor authentication for unbeatable account security.</p>
          <hr className="text-[#d8dbdf]"/>
          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white rounded-[50px] flex self-center justify-center-safe"/>
            <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">LiteSpeed-optimized servers</p>
          </div>
          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white rounded-[50px] flex self-center justify-center-safe"/>
            <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">Zero-downtime architecture</p>
          </div>
          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white w-[6vw] lg:w-max sm:w-max md:w-max  rounded-full flex self-center justify-center-safe"/>
            <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">Custom AI-tuned configuration with no timeouts</p>
          </div>
        </div>
          <img src="/img/Top.webp" alt="" className="h-[230px] lg:h-[400px]"/>
       </section>

       <section className={`flex flex-col lg:flex-row items-center justify-around text-black gap-[30px] bg-[white] ${styles.secur}`}>
       <img src="/img/Nohidden.webp" alt="" className="h-[230px] lg:h-[400px]" />
        <div className={`flex flex-col gap-[30px]`}>
          <h1 className="text-[33px] text-start font-extrabold lg:font-bold">No <span className="font-medium">hidden fees</span> </h1>
          <p className="text-start text-[19px] font-semibold lg:w-[38vw] lg:font-normal lg:text-[#545964]">What you see is what you pay — no surprises. TAKATAK’s transparent flat-rate pricing means no extra charges or mystery fees, so you always know exactly what your domain will cost.</p>
          <hr className="text-[#d8dbdf]"/>

          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white w-[7vw] lg:w-max sm:w-max md:w-max rounded-full flex self-center justify-center-safe"/>
            <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">Flat CA$19.99/mo — no hidden add-ons or upsells</p>
          </div>
          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white w-[7vw] lg:w-max sm:w-max md:w-max rounded-full flex self-center justify-center-safe"/>
            <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">Full breakdown of domain-related costs for total clarity</p>
          </div>
          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white  w-[8vw] lg:w-max sm:w-max md:w-max rounded-full flex self-center justify-center-safe"/>
            <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">Goodbye to surprise charges with our straightforward model</p>
          </div>
        </div>
       </section>

       <section className={`flex flex-col lg:flex-row items-center justify-around text-black gap-[30px] bg-[#f7f8f8] ${styles.secur}`}>
        <div className={`flex flex-col gap-[30px]`}>
          <h1 className="text-[33px] text-start font-extrabold  lg:font-bold">24/7 <span className="font-medium">AI-backed support</span></h1>
          <p className="text-start text-[19px] font-semibold lg:w-[48vw] lg:font-normal lg:text-[#545964]">Our dedicated human-plus-AI support team is available around the clock to assist you with any domain-related questions or issues. Get instant answers, expert guidance, and hands-on troubleshooting anytime, anywhere in the world.</p>
          <hr className="text-[#d8dbdf]"/>
          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white  w-[7vw] lg:w-max sm:w-max md:w-max rounded-full flex self-center justify-center-safe"/>
            <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">Round-the-clock help to resolve your questions quickly</p>
          </div>
          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white  w-[8vw] lg:w-max sm:w-max md:w-max rounded-full flex self-center justify-center-safe"/>
            <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">Access expert and AI-powered assistance 24/7 for any concerns</p>
          </div>
          <div className="flex items-center gap-[15px]">
            <IoMdCheckmark className="bg-[#5d33ff] text-white  w-[10vw] lg:w-max sm:w-max md:w-max rounded-full flex self-center justify-center-safe"/>
            <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">Consistent, reliable support whenever you need help with your domain</p>
          </div>
        </div>
          <img src="/img/support.webp" alt="" className="h-[230px] lg:h-[380px]"/>
       </section>

       <section className={`flex flex-col items-center justify-center text-black gap-[30px] bg-[white] ${styles.sip}`}>
        <h1 className="text-[33px] text-center font-bold">Don’t just take our word for it.</h1>
        <p className="text-center text-[19px] font-normal w-[85vw] lg:w-[52vw] lg:text-[#545964]">We love our domain customers and making their day — plus, they say “TAKATAK delivers” way better than we do.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-[20px]">
          {customers.map((cus, index)=>(
            <div key={index} className={`bg-[#f7f8f8] ${styles.dex} flex flex-col gap-[15px]`}>
              <img src={cus.star} alt="stars"  className={`h-[20px] flex self-start`}/>
              <h2 className="font-bold text-[18px] w-full">{cus.title}</h2>
              <p className="lg:text-[#545964]">{cus.message}</p>
              <h3 className="underline-offset-[3px] underline font-bold">{cus.name}</h3>
            </div>
          ))}
        </div>
       </section>

       <section className={`flex flex-col lg:flex-row items-start lg:items-center justify-around text-[white] gap-[30px] bg-[#5D31FF] ${styles.chat}`}>
        <div className="flex flex-col gap-[15px]">
          <h4 className="text-[#B2ADFE]">DOMAINS SUPPORT</h4>
          <h1 className="text-[33px] lg:w-[40vw] lg:text-[40px]">Give your domain questions an AI boost of solutions.</h1>
          <p className="text-[20px] w-full">Our support team is available 24/7 for any domain questions or needs you have. And we’re not just running on coffee and late-night shifts — our experts and AI systems are based worldwide, so you’re always getting our best energy, instantly matched to yours.</p>
          <button className={`bg-[white] text-[black] rounded-[8px] text-[18px] w-max ${styles.cbtn}`}>Let’s have a chat</button>
        </div>
        <img src="/img/chat.webp" alt="" className="h-[280px] lg:h-[400px] w-full"/>
       </section>


       <section className={`flex flex-col items-center justify-center text-black gap-[30px] bg-[#f7f8f8] ${styles.sip}`}>
          <h1 className="text-3xl lg:text-[40px]  text-center text-[#1a1a4b] mb-4">
            Redemption Fees
          </h1>
          <p className="text-center w-[85vw] lg:w-[55vw] text-[20px] text-gray-600 ">
          Many domain registries charge an additional fee if a domain is not renewed on time. Since these fees vary depending on the registry, we’ve listed the current prices for clarity and transparency.
          </p>

          <div className="w-full max-w-4xl overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className={`bg-gray-100 `}>
                  <th className={` text-sm font-semibold text-[#1a1a4b] ${styles.tb}`}>Tld</th>
                  <th className={`relative p-4 text-sm font-semibold text-[#1a1a4b] ${styles.prc}`}>
                    <div className="absolute inset-y-0 -left-3 w-px bg-gray-300" />
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {redemptionFees.map((item, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className={` text-sm text-gray-700 ${styles.tb}`}>{item.tld}</td>
                    <td className={`relative p-4 text-sm text-gray-900 font-medium ${styles.prc}`}>
                      <div className="absolute inset-y-0 -left-3 w-px bg-gray-200" />
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </section>

          <section className={`flex flex-col lg:flex-row items-start  justify-around text-[white] gap-[30px] bg-[white] ${styles.secur}`}>
          <div className="flex flex-col gap-[30px]">
            <h1 className="text-3xl lg:text-[40px] lg:w-max text-[#1a1a4b] w-full max-w-4xl">
            Frequently asked questions
            </h1>
            <p className="text-gray-600 text-[20px] w-full max-w-4xl">
              Here’s a shot of our most frequently asked domain questions. If you’re still stirring for answers, pop into our{" "}
              live chat and one of our experts will be happy to assist you.
            </p>
          </div>

          <div className="w-full max-w-4xl space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`border-b border-gray-200 flex flex-col gap-[20px] ${styles.tb}`}>
                <button
                  onClick={() => toggle(index)}
                  className={`flex justify-between items-center w-full ${styles.qs} text-left text-[#1a1a4b] text-[20px] hover:opacity-80 transition`}
                >
                  <span className="w-[70vw] lg:w-max">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp size={20} className={`text-[#1a1a4b]`} />
                  ) : (
                    <ChevronDown size={20} className={`text-[#1a1a4b]`} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="pb-4 text-[16px] text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
       </section>
    </main>
  )
}