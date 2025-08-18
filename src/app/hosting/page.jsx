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
    details : "Launch WordPress in seconds with our guided one-click setup. Get your shop, blog, or landing page live without delay."
  },
  {
    icon : <RiShieldUserLine />,
    title : "Security for WordPress",
    details : "Stay protected with tailored WordPress security, AI-driven monitoring, and advanced WordPress-tuned hardening boost stability and guard against threats—24/7."
  },
  {
    icon : <Route />,
    title : "Automatic backups",
    details : "Enjoy worry-free backups stored offsite, with easy browsing, quick restores, and downloads—no extra plugins."
  },
  {
    icon : <Repeat />,
    title : "Free migrations",
    details : "Move your site with zero downtime. We handle the transfer and verification, including multiple sites at no extra cost."
  },
  {
    icon : <Send />,
    title : "cPanel control panel",
    details : "Manage sites, PHP, DNS, and files with cPanel/WHM plus our clean dashboard—Linux-friendly and simple to use."
  },
  {
    icon : <AiOutlineGlobal />,
    title : "Unlimited databases",
    details : "Create as many MySQL/MariaDB databases as you need, with ample space to grow apps, content, and stores."
  },
  {
    icon : <LiaHandHoldingUsdSolid />,
    title : "Speed optimized",
    details : "Handle traffic spikes with elastic resources so you can grow your audience with no downtime."
  },
  {
    icon : <BookCopy />,
    title : "Scalable resources",
    details : "Enjoy hassle‑free contact management — make changes, do trades or transfers, or update contact details in bulk with ease."
  },
  
];

const Orderup = [
  {
    icon : '/img/Freetransfer.svg',
    title : "Free migration",
    details : "Transfer your website to our platform at zero cost, ensuring a smooth transition with no downtime or disconnection for your audience."
  },
  {
    icon : '/img/Notification.svg',
    title : "Instant setup",
    details : "With rapid site setup from our expert + AI team, enjoy swift deployment of your hosting plan and a quick launch for your website."
  },
  {
    icon : '/img/transfer.svg',
    title : "Transparent pricing",
    details : "Get what you pay for—no surprises. Clear, straightforward pricing with no hidden fees, plus useful features included."
  },
  {
    icon : '/img/management.svg',
    title : "Free SSL certificates",
    details : "Secure your site from day one with automatically issued SSL. Encrypt traffic, boost trust, and meet best‑practice standards."
  },
  {
    icon : '/img/domains.svg',
    title : "24/7 expert support",
    details : "From managed migrations to tricky PHP errors, rely on AI‑backed specialists to enhance performance and resolve issues quickly."
  },
  {
    icon : '/img/support.svg',
    title : "Global service",
    details : "Choose servers across worldwide regions for reliable performance, low latency, and proximity to your target audience."
  },
  {
    icon : '/img/support.svg',
    title : "99.9% uptime guarantee",
    details : "Rest easy with our uptime assurance—your website stays consistently available, building reliability and trust for your brand."
  },
  {
    icon : '/img/support.svg',
    title : "Carbon‑neutral hosting",
    details : "Run greener infrastructure with our carbon‑neutral approach, reducing impact while maintaining top‑tier hosting quality."
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
    question: "What is WordPress hosting?",
    answer:
      "If you already run a WordPress site, this is tailor-made for you. TAKATAK's WordPress hosting ensures your site runs on servers fully optimized for WordPress with enterprise-grade security, speed, and uptime .",
  },
  {
    question: "Do all of your WordPress support plans?",
    answer:
     "Yes — every single plan is built with WordPress in mind.",
  },
  {
    question: "Which WordPress hosting plan is best for me?",
    answer:
      "Our plans are designed to fit all levels of business — from personal blogs to high-traffic eCommerce stores. The best choice depends on your visitors, features (like WooCommerce), and how much you want TAKATAK to manage for you. If you'd like expert guidance, our team is always ready to help.",
  },
  {
    question: "I already have a WordPress site with another host, can I migrate it to TAKATAK?",
    answer:
      "Absolutely! Just open a migration request in your dashboard, share your old host logins, and we'll move your site over with zero downtime — usually in under 24 hours.",
  },
  {
    question: "Do you offer specific WordPress support?",
    answer:
      "Yes. Our support team is made up of WordPress specialists available 24/7 . If you're ever in a tough spot, just reach out — we'll get you back on track quickly.",
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
        <img src="/img/hosting.webp" alt="" className="h-[300px] lg:h-[400px] sm:h-[500px] w-full"/>
       </section>
      <section  className={`flex flex-col items-center justify-center text-black gap-[30px] bg-white ${styles.sip}`}>
        <div className=" flex flex-col items-center">
          <h1 className="text-[33px] text-center">Pick a plan and<span className="font-bold lg:font-bol"> supercharge your WordPress.</span></h1>
          <p className="text-center text-[19px] font-semibold w-[85vw] lg:w-[49vw" >Order your go-to setup, or explore a bold new option. Our TAKATAK WordPress hosting plans are built to match any project — including yours.</p>
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
              <p className="text-center text-[19px] font-semibold w-[85vw] lg:w-[49vw]">What do our clients love about TAKATAK WordPress hosting? Whatever plan you choose, know for certain your site is safe, fast, and AI-optimized around the clock.</p>
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
              <h1 className="text-[33px] text-center font-extrabold lg:font-bold">Order up!</h1>
              <p className="text-center text-[19px] font-semibold w-[85vw] lg:w-[52vw]">What do our clients love about TAKATAK? Whatever plan you choose, know for certain that you and your site are in safe, AI‑optimized hands.</p>
              <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-[20px]">
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

        <section className={`flex flex-col lg:flex-row items-start lg:items-center justify-around text-[white] gap-[30px]  ${styles.chat}`}>
          <div className={`flex flex-col gap-[15px] ${styles.assi}`}>
            <h4 className="text-[#B2ADFE]">WORDPRESS ASSISTANCE</h4>
            <h1 className="text-[33px] lg:w-[40vw] lg:text-[40px]">Got questions? We'll deliver the perfect solution.</h1>
            <p className="text-[20px] w-full">Our expert + AI support team is available 24/7 for any WordPress needs. We don't rely on caffeine or late-night rushes — our specialists are based worldwide, ensuring you always get the right answer, delivered fast and at full strength.</p>
            <button className={`bg-[white] text-[black] rounded-[8px] text-[18px] w-max ${styles.cbtn}`}>Let’s have a chat</button>
          </div>
          <img src="/img/assistant.webp" alt="assistant" className="h-[300px] lg:h-[500px] w-full"/>
        </section>

        <section className={`flex flex-col lg:flex-row items-start  justify-around text-[white] gap-[30px] bg-[white] ${styles.secur}`}>
          <div className="flex flex-col gap-[30px] flex-wrap">
            <h1 className="text-3xl lg:text-[30px] lg:w-max text-[#1a1a4b] w-full max-w-full md:max-w-fit">
            Frequently asked questions
            </h1>
            <p className="text-gray-600 text-[20px] w-full max-w-4xl">
              Here's a quick round-up of our most common TAKATAK WordPress Hosting questions. If you're still looking for answers, jump into our live chat and one of our AI + human experts will be there for you.
            </p>
          </div>

          <div className="w-full max-w-full space-y-4">
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
