"use client"
import { useEffect, useRef, useState } from "react";
import styles from "./host.module.css"

export default function Hostingpage() {
  return (
    <main>
        <section className={`flex flex-col items-start justify-around text-[white] gap-[30px]  ${styles.chat}`}>
            <h4>HOSTING FOR WORDPRESS</h4>
            <h1 className="text-[33px] ">Stir up success <span>with our hosting for WordPress.</span></h1>
            <p className="text-[20px] ">Ready to espresso your creativity online? Our WordPress hosting is the perfect blend of speed, security, and support. We've roasted up hosting solutions that are never watered down, ensuring your site performs at its peak. Whether you're a small-batch blogger or running a full-bodied e-commerce operation, our plans cater to every taste. It's time to say goodbye to bitter experiences and hello to WordPress hosting that's bold, smooth, and never leaves an aftertaste.</p>
            <button className={`bg-[white] text-[black] rounded-[8px] text-[18px] ${styles.cbtn}`}>Find the plan for me</button>
            <img src="/img/chat.webp" alt="" className="h-[280px] w-full"/>
        </section>
    </main>
  )
}
