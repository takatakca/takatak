"use client"
import { useEffect, useRef, useState } from "react";
import styles from "./domain.module.css"
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
            <script src="https://widgets.upmind.app/dac/upm-dac.min.js"></script>
            <upm-dac
              ref={upmRef}
              order-config-url="https://fimjpyw0mnzy.upmind.app/order/product"
              currency-code="CAD"
            ></upm-dac>
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

    </main>
  )
}