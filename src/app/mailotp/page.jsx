"use client"
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from "./page.module.css"


export default function Mailotp() {
    // const inputRefs = useRef([]);
    // const [otp, setOtp] = useState(new Array(6).fill(""));
    
    //   const handleChange = (e, idx) => {
    //     const val = e.target.value;
    //     if (!/^[0-9]?$/.test(val)) return; // only allow numbers
    
    //     const updatedOtp = [...otp];
    //     updatedOtp[idx] = val;
    //     setOtp(updatedOtp);
    
    //     if (val && idx < 5) {
    //       inputRefs.current[idx + 1].focus();
    //     }
    //   };
    
    //   const handleKeyDown = (e, idx) => {
    //     if (e.key === "Backspace" && !otp[idx] && idx > 0) {
    //       inputRefs.current[idx - 1].focus();
    //     }
    //   };



    return (
        <main className={` flex flex-col w-full items-center justify-center min-h-screen ${styles.main}`}>
            <div className={`bg-[white] rounded-[10px] ${styles.log}`}>
                {/* <div className='flex items-center'>
                  <h2 className="text-black text-[25px] font-semibold text-start w-[13vw]">
                      Verify your email
                  </h2>
                  <img
                      src="/img/signup.svg"
                      alt="People illustration"
                      className="w-[200px] h-[200px] object-contain"
                  />
                </div> */}
                <div className='flex flex-col gap-[30px]'>
                    {/* <div>
                        <p className='text-[black]'>Please enter the 6-digit code sent to</p>
                        <span className='text-[black] font-semibold'>example@example.com</span>
                    </div> */}
                    {/* OTP input boxes */}
                    {/* <form className="flex justify-center gap-2 ">
                    {otp.map((digit, idx) => (
                        <input
                        key={idx}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e, idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        ref={(el) => (inputRefs.current[idx] = el)}
                        className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-xl"
                        />
                    ))}
                    </form> */}
                        {/* <button className='text-[#01A2D9] font-semibold'>Resend code</button>
                        <Link href="/mailotp">
                        <button
                        type="submit"
                        className={`w-full bg-[#01A2D9] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition ${styles.btn}`}
                        >
                        Verify
                        </button>
                        </Link> */}
                </div>
            </div>    
        </main>      
    );
}