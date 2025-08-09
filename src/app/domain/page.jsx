"use client"
import styles from "./domain.module.css"
import { FaSearch } from "react-icons/fa";


function PlaceholderRow({ leftWidths = [320, 240, 200], rightWidths = [80, 140] }) {
  return (
    <div className={styles.row}>
      {/* LEFT SVG */}
      <svg
        className={styles.leftSvg}
        viewBox="0 0 420 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="20" y="20" width="17" height="17" rx="6" className={styles.shape} />
        <rect x="52" y="8" width='80' height="10" rx="5" className={styles.shape2} />
        <rect x="52" y="23" width='150' height="15" rx="4" className={styles.shape} />
        <rect x="52" y="44" width='120' height="8" rx="5" className={styles.shape} />
      </svg>

      {/* RIGHT SVG */}
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
    </div>
  );
}

export default function DomainPage() {
  return (
    <main className="">
       <section className={`${styles.cont} flex flex-col item-center justify-center`}>
        <div className="flex flex-col items-center justify-center text-white gap-[40px]">
          <h1 className="text-center text-[34px] font-[700] w-[45vw]">Power Your Online Success{" "} <span className="font-medium">with the Perfect Domain.</span> </h1>
          <p className="text-[18px] text-center w-[60vw]">
            Whether you’re building your first website, expanding your business presence, or launching the next big brand, TAKATAK makes securing your domain name fast, simple, and affordable.
            From entrepreneurs and small businesses to large enterprises, we’ve got the right domain for every vision. With instant registration.
          </p>
        </div>
        <div>
          <div className={`${styles.bar} border`}>
            <script src="https://widgets.upmind.app/dac/upm-dac.min.js"></script>
            <upm-dac
              order-config-url="https://fimjpyw0mnzy.upmind.app/order/product"
              currency-code="CAD"
            ></upm-dac>
          </div>

          <div>
            <div className={`${styles.sv}`}>
              <PlaceholderRow />
              <PlaceholderRow leftWidths={[300, 220, 180]} rightWidths={[84, 128]} />
              <PlaceholderRow leftWidths={[280, 230, 190]} rightWidths={[72, 132]} />
            </div>

            {/* <div className={`${styles.placeh} relative  bottom-[300px] z-10`}>
              <div className="flex flex-col items-center text-white bg-[#1B076E] rounded-[10px]">
                <h1 className={`${styles.icon} border-2 rounded-full text-[20px] font-[900]`}>
                <FaSearch />
                </h1>
                <h3>Search & Secure Your Domain Now</h3>
                <p>(Integrated with instant availability check & proceed)</p>
              </div>

            </div> */}

          </div>

        </div>
       </section>

    </main>
  )
}

















