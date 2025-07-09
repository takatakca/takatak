"use client"
import React, { useState, useRef, useContext, useEffect } from 'react';
import Link from 'next/link';
import styles from "./page.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AppContext } from '../context/AppContext';
import { useRouter } from 'next/navigation';


export default function Otp() {
  const router = useRouter();

  // Refs to manage input focus programmatically
  const inputRefs = useRef([]);

  // OTP input values (6 digits)
  const [otp, setOtp] = useState(new Array(6).fill(""));

  // Step to determine which screen to show: phone, email entry, or email OTP
  const [step, setStep] = useState("otp-phone");

  // Controls resend button cooldown
  const [canResend, setCanResend] = useState(true);
  const [attempts, setAttempts] = useState(0);
    const {verifyotp, loading, login, resendcode} = useContext(AppContext);
    const [load, setLoad] = useState(false);
    const [loguser, setLoguser] = useState({ 
      otp: "",
      phone: "",
      email: ""
    });

    // Retrieve stored values from sessionStorage on mount
    useEffect(() => {
      const phone = sessionStorage.getItem("verifyPhone");
      const email = sessionStorage.getItem("verifyEmail");
      setLoguser(prev => ({
        ...prev,
        phone: phone || "",
        email: email || "",
      }));
    }, []);

    // Countdown timer state for resend
    const [countdown, setCountdown] = useState(60);

    // Starts countdown when resend is triggered
    useEffect(() => {
      let timer;
      if (!canResend) {
        setCountdown(60);
        timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
      return () => clearInterval(timer);
    }, [canResend]);

    // Focus first input on mount
    useEffect(() => {
      inputRefs.current[0]?.focus();
    }, []);


    // Handle backspace key: go back to previous input if current is empty
  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputRefs.current[idx - 1].focus();
    }
  };

  useEffect(() => {
    const storedAttempts = sessionStorage.getItem("otpAttempts");
    if (storedAttempts) setAttempts(parseInt(storedAttempts));
  }, []);
  
  useEffect(() => {
    sessionStorage.setItem("otpAttempts", attempts.toString());
  }, [attempts]);
  

  // Reset OTP inputs when changing step
  useEffect(() => {
    setOtp(new Array(6).fill(""));
  }, [step]);

  // Autofocus the first empty box on step change
  useEffect(() => {
    const firstEmpty = otp.findIndex(val => val === "");
    if (firstEmpty !== -1 && inputRefs.current[firstEmpty]) {
      inputRefs.current[firstEmpty].focus();
    }
  }, [step]);


  const handleSubmit = async (e) => {
    if (e?.preventDefault) e.preventDefault();
  
    if (attempts >= 3) {
      toast.error("Too many attempts. Try again later.");
      return;
    }

    if (otp.some(digit => digit === "")) {
      toast.error("Please enter all 6 digits", { position: "top-center" });
      return;
    }

    const joinedOtp = otp.join("");
    const finalData = { ...loguser, otp: joinedOtp };
    // console.log("Final payload to backend:", finalData);
    
  
    setLoad(true);
    setAttempts(prev => prev + 1);
  
    try {
      const res = await verifyotp(finalData);
      // console.log(" OTP verified:", res);
      // console.log(" Final payload to backend:", res.message);
      // console.log(" Final payload to backend:", res.token);
  
      toast.success("User Currently Active", { position: "top-center" });
      sessionStorage.removeItem("verifyPhone");
      sessionStorage.removeItem("verifyEmail");
      sessionStorage.removeItem("otpAttempts");
  
      router.push('/dashboard');
    } catch (err) {
      // console.log("Full error:", err?.response?.data);
      const errorMessage = err?.response?.data?.error || err?.response?.data?.message || "An unexpected error occurred";
      toast.error(errorMessage, { position: "top-center" });
    } finally {
      setLoad(false);
    }
  };
  

  // Handles input change in each OTP box
  const handleChange = (e, idx) => {
    const val = e.target.value.trim();

    if (!/^[0-9]?$/.test(val)) return; // only allow numbers

    const updatedOtp = [...otp];
    updatedOtp[idx] = val;
    setOtp(updatedOtp);
    if (val && idx < 5) {
      inputRefs.current[idx + 1].focus();
    }
    
    
  };
  useEffect(() => {
  if (otp.every(d => d !== "") && otp.length === 6) {
    handleSubmit(new Event('submit'));
  }
}, [otp]);


  const handleMailSubmit = async(e)=>{
    e.preventDefault();
    if ( !loguser.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loguser.email)) {
      toast.error("Email fields is required", { position: "top-center" });
      return;
    }
    setLoad(true)
    setAttempts(0);
    try {
      const res = await login(loguser)
      // console.log(res);
      // console.log("Resend success:", res.message); 
      // console.log(res.response?.data?.message);
      toast.success("Otp sent to your email!", { position: "top-center" });
      sessionStorage.setItem("verifyEmail", loguser.email);
      // router.push('/otp');
      setStep("otp-email");
    } catch (err) {
      // console.log(err)
      // console.error("Full error response:", err); 
      const errorMessage = err?.response?.data?.error || "An unexpected error occurred";
      // console.log(errorMessage);
      toast.error(errorMessage, { position: "top-center" });
    }finally{
        setLoad(false);
    }  
  }

  // Resend OTP via email
  const resendotp = async()=>{
    if (!canResend) return;

    if(!loguser.email && !loguser.phone){
      toast.error("email or phone number is not found", { position: "top-center" });
      return;
    }
    setLoad(true);
    try {
      setCanResend(false); // disable right away
      setCountdown(60); // start timer
      const res = await resendcode(loguser);
      toast.success(res.message || "OTP has been resent!", { position: "top-center" });
    } catch (err) {
      
      const errorMessage = err?.response?.data?.error || err?.response?.data?.message || "Something went wrong.";
      toast.error(errorMessage, { position: "top-center" });

    }finally {
    setTimeout(() => setCanResend(true), 60000); // re-enable after 60s
    setLoad(false)
  }
  };
  
  // Styling for input box based on whether it has a digit
  const getOtpInputClass = (val) => 
    `w-10 h-10 text-center border rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-teal-500 ${
      val ? "border-gray-300" : "border-red-400"
    }`;
  
    return (
        <main className={` flex flex-col items-center justify-center min-h-screen ${styles.main}`}>
          <ToastContainer />
          <div className={`bg-[white] rounded-[10px] ${styles.log}`}>
            {step === "otp-phone" && (
              <div>
                <div className={`flex  items-center justify-between`}>
                    <h2 className="text-black lg:text-[25px] text-[20px] font-semibold text-start lg:w-[13vw]">
                        Please enter the one-time password
                    </h2>
                    <img
                        src="/img/signup.svg"
                        alt="People illustration"
                        className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-contain"
                    />
                </div>
                  <div className='flex flex-col gap-[25px]'>
                  {loguser?.phone ?(
                    <div className="flex items-center gap-2">
                    <p className={`${styles.whts}`}><FaWhatsapp className='text-[white]'/></p>
                    <span className="text-lg text-[black] font-semibold">{ loguser.phone}</span>
                  </div>
                  ) : loguser?.email ? (
                    <div className="flex items-center gap-2">
                      <MdEmail className="text-blue-500 text-xl" />
                      <span className="text-lg text-black font-semibold">
                        {loguser.email}
                      </span>
                    </div>
                  ) : (
                    <span className="text-lg text-red-600 font-semibold">
                      No Contact Info Found. Please Return to Login Page.
                    </span>
                  )}

                  {/* OTP input boxes */}
                  <form 
                  onSubmit={handleSubmit}
                  className="flex justify-center gap-2 mb-6">
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
                        disabled={attempts >= 3}
                        className={getOtpInputClass(digit)}
                      />
                    ))}
                  </form>

                  {attempts >= 3 && (
                    <p className="text-red-500 text-center text-sm font-medium mt-2">
                      You've reached the maximum number of attempts. Please try again later.
                    </p>
                  )}


                  {/* <Link href="/mailotp"> */}
                  <button
                    // onClick={handleSubmit}
                    type="submit"
                    disabled={ loading || load || attempts >= 3}
                    className={`w-full bg-[#01A2D9] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition ${styles.btn} ${loading ? 'animate-pulse' : ''}`}
                  >
                    {loading || load ? "Verifying..." : "Verify"}
                  </button>
                  {/* </Link> */}

                  <div className='flex flex-col items-center gap-[25px]'>
                    <button 
                    onClick={resendotp}
                    className="text-[18px] text-gray-700 font-bold cursor-pointer hover:underline" 
                    >{canResend ? 'Resend one-time password' : `Please wait... ${countdown}s`}</button>
                    <button className="text-[18px] text-gray-700 font-bold cursor-pointer hover:underline"  onClick={() =>{ setAttempts(0); setStep("enter-email")}}>Receive code with mail</button>
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
                    value={loguser.email}
                    onChange={(e) => setLoguser({ ...loguser, email: e.target.value })}
                    type="email"
                    placeholder="you@example.com"
                    className={`w-full  border border-gray-300 rounded-md ${styles.einput}`}
                  />
                  <button
                    onClick={handleMailSubmit}
                    disabled={loading}
                    className={`w-full bg-[#01A2D9] text-white font-semibold rounded-full py-2 hover:bg-[#1d4ed8] transition   ${styles.bt} ${loading ? 'bg-blue-500 animate-pulse' : 'bg-[#01A2D9]'}`}
                  >
                     {loading? "sending code...":"Send Code"}
                  </button>

                  <p
                    className="text-sm text-gray-700 font-medium text-center mt-4 cursor-pointer hover:underline"
                    onClick={() =>{setAttempts(0); setStep("otp-phone")}}
                  >
                    Use phone number instead
                  </p>
                </div>
              )}
              {step === "otp-email" && (
                <div className='flex flex-col gap-[30px]'>

                  {loguser?.email ? (
                    <div className="flex flex-col items-center gap-2">
                      <h2 className="text-black text-[22px] font-semibold mb-4">
                        Enter the code sent to
                      </h2>
                      <div className='flex gap-[10px]'>
                        <MdEmail className="text-blue-500 text-xl" />
                        <span className="text-lg text-black font-semibold">
                          {loguser.email}
                        </span>

                      </div>
                    </div>
                  ):(
                    <span className="text-lg text-red-600 font-semibold">
                      No Contact Info Found. Please Return to Login Page.
                    </span>
                  )}
                  

                  <form 
                  onSubmit={handleSubmit}
                  className="flex justify-center gap-2 mb-6">
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
                        disabled={attempts >= 3}
                        className={getOtpInputClass(digit)}
                      />
                    ))}
                  </form>
                  {attempts >= 3 && (
                    <p className="text-red-500 text-center text-sm font-medium mt-2">
                      You've reached the maximum number of attempts. Please try again later.
                    </p>
                  )}


                  {/* <Link href="/mailotp"> */}
                    <button 
                    //  onClick={handleSubmit}
                     type="submit"
                     disabled={loading || attempts >= 3} 
                    className={`w-full bg-[#01A2D9] text-white font-semibold rounded-full py-2 hover:bg-[#1d4ed8] transition  ${styles.bt}  ${loading ? 'bg-blue-500 animate-pulse' : 'bg-[#01A2D9]'}`}>
                      {loading? "Verifying...":"Verify"}
                    </button>
                  {/* </Link> */}

                  <p
                  disabled={!canResend}
                    className="text-sm text-gray-700 font-medium text-center mt-4 cursor-pointer hover:underline"
                    onClick={() => {
                      resendotp();
                    }}
                  >
                    {load ? "Sending..." : (canResend ? "Resend code to email" : `Resend in ${countdown}s`)}
                  </p>
                </div>
              )}
          </div>
        </main>
    );
}
