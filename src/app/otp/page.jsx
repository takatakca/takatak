"use client"
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from "./page.module.css"
import { FaWhatsapp } from "react-icons/fa";


export default function Otp() {

  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [step, setStep] = useState("otp-phone");
  const [email, setEmail] = useState("");



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

    const handleSendCodeToEmail = () => {
    // if (!/\S+@\S+\.\S+/.test(email)) {
    //   alert("Please enter a valid email");
    //   return;
    // }

    // send OTP to email logic here
    console.log("Send code to", email);
    setStep("otp-email");
  };


    return (
        <main className={` flex flex-col items-center justify-center min-h-screen ${styles.main}`}>
          <div className={`bg-[white] rounded-[10px] ${styles.log}`}>
            {step === "otp-phone" && (
              <div>
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

                
                  <div className='flex flex-col gap-[25px]'>
                  <div className="flex items-center gap-2">
                    <p className={`${styles.whts}`}><FaWhatsapp className='text-[white]'/></p>
                    {/* <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" /> */}
                    <span className="text-lg text-[black] font-semibold">+1 234 567 8900</span>
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

                  <Link href="/mailotp">
                  <button
                    type="submit"
                    className={`w-full bg-[#01A2D9] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition ${styles.btn}`}
                  >
                    Verify
                  </button>
                  </Link>

                  <div className='flex flex-col items-center gap-[25px]'>
                    <p className="text-[18px] text-gray-700 font-bold cursor-pointer hover:underline">Resend one-time password</p>
                    <p className="text-[18px] text-gray-700 font-bold cursor-pointer hover:underline" onClick={() => setStep("enter-email")}>Receive code with mail</p>
                  </div>
                </div>
              </div>
              )}
              {step === "enter-email" && (
                <div className='flex flex-col gap-[30px]'>
                  <h2 className="text-black text-[22px] font-semibold mb-4">
                    Enter your email to receive a code
                  </h2>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full  border border-gray-300 rounded-md ${styles.einput}`}
                  />
                  <button
                    onClick={handleSendCodeToEmail}
                    className={`w-full bg-[#01A2D9] text-white font-semibold rounded-full py-2 hover:bg-[#1d4ed8] transition   ${styles.bt}`}
                  >
                    Send Code
                  </button>

                  <p
                    className="text-sm text-gray-700 font-medium text-center mt-4 cursor-pointer hover:underline"
                    onClick={() => setStep("otp-phone")}
                  >
                    Use phone number instead
                  </p>
                </div>
              )}
              {step === "otp-email" && (
                <div className='flex flex-col gap-[30px]'>
                  <h2 className="text-black text-[22px] font-semibold mb-4">
                    Enter the code sent to <br /> <span className="text-blue-600">{email}</span>
                  </h2>

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
                        className="w-10 h-10 text-center border border-gray-300 rounded-md text-xl"
                      />
                    ))}
                  </form>

                  <Link href="/mailotp">
                    <button className={`w-full bg-[#01A2D9] text-white font-semibold rounded-full py-2 hover:bg-[#1d4ed8] transition  ${styles.bt}`}>
                      Verify
                    </button>
                  </Link>

                  <p
                    className="text-sm text-gray-700 font-medium text-center mt-4 cursor-pointer hover:underline"
                    onClick={() => setStep("enter-email")}
                  >
                    Resend code to email
                  </p>
                </div>
              )}
          </div>
        </main>
    );
}
