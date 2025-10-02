"use client"
import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css"
import { IoArrowBack } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

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


export default function checkout() {

    const [hasTyped, setHasTyped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const upmRef = useRef(null);



    // const { upmindClientId } = useContext(AppContext);
    
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


    const router = useRouter();
     return (
        <main >
            <div className={`bg-white flex items-center text-[black] gap-[30px] ${styles.pagetop}`}>
                <button className={`bg-[#dfdfeb]  flex items-center gap-[10px] rounded ${styles.butn}`}  onClick={() => router.back()}>
                    <IoArrowBack />
                    Back
                </button>

                <p className="font-semibold">Checkout: Get Started With Your Domain & Hosting Journey</p>

            </div>
            <section className={`${styles.cont} flex flex-col item-center justify-center`}>
               <div className="flex flex-col items-center justify-center text-white gap-[40px]">
                <h1 className="text-center text-[30px] w-[90vw] lg:text-[34px] font-[700] lg:w-[45vw]">Power Your Online Success{" "} <span className="font-medium">with the Perfect Domain.</span> </h1>
                {/* <p className="text-[18px] font-[600] w-[80vw] text-center lg:w-[60vw]">
                    Whether you’re building your first website, expanding your business presence, or launching the next big brand, TAKATAK makes securing your domain name fast, simple, and affordable.
                    From entrepreneurs and small businesses to large enterprises, we’ve got the right domain for every vision. With instant registration.
                </p>
                <a href="/checkout" className={` rounded-[8px] text-[18px] w-max font-semibold ${styles.cbtn}`}>Continue To Purchase</a> */}
                </div>
                
                <div>
                <div className={`${styles.bar} `}>

                    {/* <script src="https://widgets.upmind.app/dac/upm-dac.min.js"></script> */}
                    <upm-dac
                    ref={upmRef}
                    // client-id={upmindClientId}
                    order-config-url="https://fimjpyw0mnzy.upmind.app/order/product"
                    currency-code="CAD"
                    ></upm-dac>




                    {/* <upm-widget
                    as="Dac"
                    locale="en"
                    ref={upmRef}
                    bind='{"orderConfigUrl":"https://fimjpyw0mnzy.upmind.app/order/product", "currencyCode":"CAD"}'
                    // order-config-url="https://fimjpyw0mnzy.upmind.app/order/product"
                    // currency-code="CAD"
                    ></upm-widget> */}
                </div>
                
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

            <section  className={`flex flex-col items-center justify-center text-black gap-[30px] bg-white ${styles.sip}`}>
                <div className=" flex flex-col items-center gap-[15px]">
                    <h1 className="text-[33px] text-center">Pick a plan and<span className="font-bold lg:font-bol"> supercharge your WordPress.</span></h1>
                    <p className="text-center text-[19px] font-semibold w-[85vw] lg:w-[49vw" >Order your go-to setup, or explore a bold new option. Our TAKATAK WordPress hosting plans are built to match any project — including yours.</p>
                </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-[20px]">
                    {/* 1 Portfolio Hosting */}
                <upm-widget
                    as="PlanCard"
                    // client-id={upmindClientId}
                    locale="en"
                    bind={`{
                    "id": "61e50989-73d2-4752-053c-e45e610832d7",
                    "currencyCode": "cad"
                    }`}
                ></upm-widget>
        
                {/* 2 Bronze Hosting */}
                <upm-widget
                    as="PlanCard"
                    // client-id={upmindClientId}
                    locale="en"
                    bind={`{
                    "id": "1e96d298-537d-4e75-383b-14e120637085",
                    "currencyCode": "cad"
                    }`}
                ></upm-widget>
        
                {/* 3 Silver Hosting */}
                <upm-widget
                    as="PlanCard"
                    // client-id={upmindClientId}
                    locale="en"
                    bind={`{
                    "id": "80d1639e-237d-4395-3e2a-54610589e572",
                    "currencyCode": "cad"
                    }`}
                ></upm-widget>
                {/* 4 Gold Hosting */}
                <upm-widget
                    as="PlanCard"
                    // client-id={upmindClientId}
                    locale="en"
                    bind={`{
                    "id": "0381d780-e72d-4dd6-701c-8413569926e5",
                    "currencyCode": "cad"
                    }`}
                ></upm-widget>
                </div> 
            </section>
                 
        </main>
     )
}