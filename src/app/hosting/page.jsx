"use client"
import { useEffect, useRef, useState } from "react";
import styles from "./host.module.css"


export default function Hostingpage() {
  return (
    <main>
      <script type="module" src="https://embed.upmind.app/upm-widget.js" strategy="afterInteractive"/>
      <section className="flex flex-col items-start gap-[30px]">
        <h4>HOSTING FOR WORDPRESS</h4>
        <h1 className="text-[33px]">Stir up success <span>with our hosting for WordPress.</span></h1>
        <p className="text-[20px]">Choose the plan that best suits your needs:</p>
      </section>
      <section>
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
