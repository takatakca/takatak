"use client"
import { useEffect, useRef, useState } from "react";
import styles from "./host.module.css"


export default function Hostingpage() {
  return (
    <main>
      <script type="module" src="https://embed.upmind.app/upm-widget.js" strategy="afterInteractive"/>
      {/* <section className="flex flex-col items-start gap-[30px]">
        <h4></h4>
        <h1 className="text-[33px]">Stir up success <span>with our hosting for WordPress.</span></h1>
        <p className="text-[20px]">Choose the plan that best suits your needs:</p>
      </section> */}
      <section className={`flex flex-col lg:flex-row items-start lg:items-center justify-around text-[white] gap-[30px] bg-[] ${styles.chat}`}>
        <div className="flex flex-col gap-[15px]">
          <h4 className="text-[#b3aeff]">HOSTING FOR WORDPRESS</h4>
          <h1 className="text-[33px] lg:w-[40vw] lg:text-[40px]"><span className="font-bold">Power up success</span> with our hosting for Website</h1>
          <p className="text-[20px] w-full">Ready to create without limits? Our WordPress hosting is the perfect mix of speed, AI security, and nonstop support. We’ve crafted hosting solutions that are never watered down, ensuring your site performs at peak efficiency. Whether you’re launching a personal blog or scaling a full e-commerce store, our plans adapt to your needs. It’s time to say goodbye to slowdowns and hello to TAKATAK WordPress hosting that’s bold, stable, and built for 2025.</p>
          <button className={`bg-[white] text-[black] rounded-[8px] text-[18px] w-max ${styles.cbtn}`}>Find the plan for me</button>
        </div>
        <img src="/img/hosting.webp" alt="" className="h-[280px] lg:h-[400px] sm:h-[500px] w-full"/>
       </section>
      <section className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-[20px]">
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
      </section>


    </main>
  );
}
