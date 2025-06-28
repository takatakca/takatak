"use client"
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from "./page.module.css"


export default function Otp() {

    const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (e, idx) => {
    const val = e.target.value;
    if (!/^[0-9]?$/.test(val)) return; // only allow numbers

    const updatedOtp = [...otp];
    updatedOtp[idx] = val;
    setOtp(updatedOtp);

    if (val && idx < 5) {
      inputRefs.current[idx + 1].focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputRefs.current[idx - 1].focus();
    }
  };


    return (
        <main className={` flex flex-col items-center justify-center min-h-screen ${styles.main}`}>
        <div className={`bg-[white] rounded-[10px] ${styles.log}`}>
            <div className='flex items-center'>
                <h2 className="text-black text-[25px] font-semibold text-start w-[13vw]">
                    Please enter the one-time password
                </h2>
                <img
                    src="/img/signup.svg"
                    alt="People illustration"
                    className="w-[200px] h-[200px] object-contain"
                />
            </div>

        <div className="flex items-center justify-center gap-2 mb-6">
          <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
          <span className="text-lg font-medium">+1 234 567 8900</span>
        </div>

        {/* OTP input boxes */}
        <form className="flex justify-center gap-2 mb-6">
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
        </form>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white font-semibold py-2 rounded-full hover:bg-teal-600 transition mb-4"
        >
          Verify
        </button>

        <p className="text-sm text-gray-700 mb-1 cursor-pointer hover:underline">Resend one-time password</p>
        <p className="text-sm text-gray-700 cursor-pointer hover:underline">Change number</p>
      </div>
    {/* </div> */}
    </main>
    );
}