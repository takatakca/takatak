"use client"
import { useEffect, useRef, useState } from "react";
import styles from "./host.module.css"
import { FaSearch } from "react-icons/fa";
import { BsClipboard } from "react-icons/bs";
import { RiShieldUserLine } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { AiOutlineGlobal } from "react-icons/ai";
import { ChevronDown, ChevronUp, Route, Repeat, Send, BookCopy } from "lucide-react";


const everysip = [
  {
    icon : <BsClipboard />,
    title : "One-click installation",
    details : "Launch your WordPress site instantly with one-click setup. Get your blog, shop, or landing page live in no time."
  },
  {
    icon : <RiShieldUserLine />,
    title : "AI-powered security for WordPress",
    details : "Stay protected with tailored WordPress security, AI-driven monitoring, and advanced"
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
  
];

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
  
];
const customers = [
  {
    star: '/img/stars.svg',
    title : 'Polite and professional service',
    message : 'The TAKATAK support team handled my WordPress issue quickly and professionally. I couldn’t get my site running until their AI-powered setup walked me through it. Everything was resolved smoothly, and I’m grateful for their polite and expert service.',
    name : 'Wealth Angel'
  },
  {
    star: '/img/stars.svg',
    title : 'Fastest WP hosting and professional support',
    message : 'Fastest WP hosting and professional support',
    name : 'Denys'
  },
  {
    star: '/img/stars.svg',
    title : 'PHP issue solved in one chat',
    message : 'I had a PHP problem that broke my site, and TAKATAK solved it in a single chat. I previously waited a week at another host with no fix — TAKATAK fixed everything instantly. Their reliability is unmatched.',
    name : 'Redline Designs'
  },
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


export default function Hostingpage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <main>
      <script type="module" src="https://embed.upmind.app/upm-widget.js" strategy="afterInteractive"/>
      <section className={`flex flex-col lg:flex-row items-start lg:items-center justify-around text-[white] gap-[30px] bg-[] ${styles.chat}`}>
        <div className={`flex flex-col gap-[15px] ${styles.hos}`}>
          <h4 className="text-[#b3aeff]">HOSTING FOR WORDPRESS</h4>
          <h1 className="text-[33px] lg:w-[40vw] lg:text-[40px]"><span className="font-bold">Power up success</span> with our hosting for Website</h1>
          <p className="text-[20px] w-full">Ready to create without limits? Our WordPress hosting is the perfect mix of speed, AI security, and nonstop support. We’ve crafted hosting solutions that are never watered down, ensuring your site performs at peak efficiency. Whether you’re launching a personal blog or scaling a full e-commerce store, our plans adapt to your needs. It’s time to say goodbye to slowdowns and hello to TAKATAK WordPress hosting that’s bold, stable, and built for 2025.</p>
          <button className={`bg-[white] text-[black] rounded-[8px] text-[18px] w-max ${styles.cbtn}`}>Find the plan for me</button>
        </div>
        <img src="/img/hosting.webp" alt="" className="h-[280px] lg:h-[400px] sm:h-[500px] w-full"/>
       </section>
      <section  className={`flex flex-col items-center justify-center text-black gap-[30px] bg-white ${styles.sip}`}>
        <div className="text-center">
          <h1>Pick a plan and<span>supercharge your WordPress.</span></h1>
          <p>Order your go-to setup, or explore a bold new option. Our TAKATAK WordPress hosting plans are built to match any project — including yours.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-[20px]">
          {/*1 Portfolio Hosting */}
        <upm-widget
          as="PlanCard"
          locale="en"
          bind={`{
            "id": "61e50989-73d2-4752-053c-e45e610832d7",
            "currencyCode": "cad"
          }`}
        ></upm-widget>

        {/*2 Bronze Hosting */}
        <upm-widget
          as="PlanCard"
          locale="en"
          bind={`{
            "id": "1e96d298-537d-4e75-383b-14e120637085",
            "currencyCode": "cad"
          }`}
        ></upm-widget>

        {/*3 Silver Hosting */}
        <upm-widget
          as="PlanCard"
          locale="en"
          bind={`{
            "id": "80d1639e-237d-4395-3e2a-54610589e572",
            "currencyCode": "cad"
          }`}
        ></upm-widget>
        {/*4 Gold Hosting */}
        <upm-widget
          as="PlanCard"
          locale="en"
          bind={`{
            "id": "0381d780-e72d-4dd6-701c-8413569926e5",
            "currencyCode": "cad"
          }`}
        ></upm-widget>
        </div>
      </section>
      <section className={`flex flex-col items-center justify-center text-black gap-[30px] bg-white ${styles.sip}`}>
        <h1 className="text-[33px] text-center">Our hosting gets{" "} <span className="font-extrabold lg:font-bold">smarter with every click.</span></h1>
              <p className="text-center text-[19px] font-semibold w-[85vw] lg:w-[49vw]">What do our clients love about TAKATAK WordPress hosting? Whatever plan you choose, know for certain that your site is in a safe pair of hands.</p>
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
            <h1 className="text-[33px] text-start font-extrabold lg:font-bold">We’ve <span className="font-medium">optimized performance</span> especially for WordPress.</h1>
            <p className="text-start text-[19px] font-semibold lg:w-[49vw] lg:font-normal lg:text-[#545964]">We want every part of your TAKATAK WordPress hosting experience to be smooth, fast, and reliable. Our LiteSpeed servers and AI caching deliver lightning-fast load times, zero downtime, and a custom WordPress setup designed to eliminate interruptions.</p>
            <hr className="text-[#d8dbdf]"/>
            <div className="flex items-center gap-[15px]">
              <IoMdCheckmark className="bg-[#5d33ff] text-white rounded-[50px] flex self-center justify-center-safe"/>
              <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">LiteSpeed servers with AI tuning for maximum speed</p>
            </div>
            <div className="flex items-center gap-[15px]">
              <IoMdCheckmark className="bg-[#5d33ff] text-white rounded-[50px] flex self-center justify-center-safe"/>
              <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">Seamless operation backed by zero-downtime architecture</p>
            </div>
            <div className="flex items-center gap-[15px]">
              <IoMdCheckmark className="bg-[#5d33ff] text-white w-[6vw] lg:w-max sm:w-max md:w-max  rounded-full flex self-center justify-center-safe"/>
              <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">Custom WordPress optimization for uninterrupted performance</p>
            </div>
          </div>
            <img src="/img/Top.webp" alt="" className="h-[230px] lg:h-[400px]"/>
        </section>
        <section className={`flex flex-col lg:flex-row items-center justify-around text-black gap-[30px] bg-[white] ${styles.secur}`}>
          <img src="/img/Nohidden.webp" alt="" className="h-[230px] lg:h-[400px]" />
          <div className={`flex flex-col gap-[30px]`}>
            <h1 className="text-[33px] text-start font-extrabold lg:font-bold">Effortlessly<span className="font-medium">build your WordPress site</span> </h1>
            <p className="text-start text-[19px] font-semibold lg:w-[38vw] lg:font-normal lg:text-[#545964]">Build a site that feels effortless — launch instantly with TAKATAK’s one-click WordPress install, the Gutenberg block editor, and access to countless plugins and themes. Everything is supported by expert guidance and AI-driven setup, so you can focus on creating without technical barriers.</p>
            <hr className="text-[#d8dbdf]"/>
  
            <div className="flex items-center gap-[15px]">
              <IoMdCheckmark className="bg-[#5d33ff] text-white w-[7vw] lg:w-max sm:w-max md:w-max rounded-full flex self-center justify-center-safe"/>
              <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">Instant WordPress installation</p>
            </div>
            <div className="flex items-center gap-[15px]">
              <IoMdCheckmark className="bg-[#5d33ff] text-white w-[7vw] lg:w-max sm:w-max md:w-max rounded-full flex self-center justify-center-safe"/>
              <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">No technical background required</p>
            </div>
            <div className="flex items-center gap-[15px]">
              <IoMdCheckmark className="bg-[#5d33ff] text-white  w-[8vw] lg:w-max sm:w-max md:w-max rounded-full flex self-center justify-center-safe"/>
              <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">Access to premium themes, plugins, and AI guidance</p>
            </div>
          </div>
        </section>
        <section className={`flex flex-col lg:flex-row items-center justify-around text-black gap-[30px] bg-[#f7f8f8] ${styles.secur}`}>
          <div className={`flex flex-col gap-[30px]`}>
            <h1 className="text-[33px] text-start ">Let us handle your <span className="font-extrabold  lg:font-bold">free WordPress migration.</span></h1>
            <p className="text-start text-[19px] font-semibold lg:w-[48vw] lg:font-normal lg:text-[#545964]">Seamlessly move your WordPress site to TAKATAK — no hassle, no downtime. Our expert-led migration ensures a smooth transfer with AI-assisted setup and hands-on guidance. Got multiple sites to move? Bring them all — we’ll take care of it.</p>
            <hr className="text-[#d8dbdf]"/>
            <div className="flex items-center gap-[15px]">
              <IoMdCheckmark className="bg-[#5d33ff] text-white  w-[7vw] lg:w-max sm:w-max md:w-max rounded-full flex self-center justify-center-safe"/>
              <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">Expert-led free migrations for existing sites</p>
            </div>
            <div className="flex items-center gap-[15px]">
              <IoMdCheckmark className="bg-[#5d33ff] text-white  w-[8vw] lg:w-max sm:w-max md:w-max rounded-full flex self-center justify-center-safe"/>
              <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">Zero interruptions during the migration process</p>
            </div>
            <div className="flex items-center gap-[15px]">
              <IoMdCheckmark className="bg-[#5d33ff] text-white  w-[10vw] lg:w-max sm:w-max md:w-max rounded-full flex self-center justify-center-safe"/>
              <p className="text-[#5d33ff] text-[20px] font-medium lg:font-normal">AI-powered + human support throughout the journey</p>
            </div>
          </div>
            <img src="/img/support.webp" alt="" className="h-[230px] lg:h-[380px]"/>
       </section>
       <section className={`flex flex-col items-center justify-center text-black gap-[30px] bg-[white] ${styles.sip}`}>
          <h1 className="text-[33px] text-center ">Don’t just <span className="font-bold">take our word for it.</span></h1>
          <p className="text-center text-[19px] font-normal w-[85vw] lg:w-[52vw] lg:text-[#545964]">We love our TAKATAK WordPress hosting clients and making their day — plus, they say “TAKATAK is unstoppable” way better than we do.</p>
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
  );
}
