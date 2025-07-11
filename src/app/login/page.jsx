"use client"
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import styles from "./page.module.css"
import 'react-phone-input-2/lib/style.css'; // required for flags
import PhoneInput from 'react-phone-input-2';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation';
import { AppContext } from '../context/AppContext';




export default function Login() {
  const router = useRouter();
  const {login, loading} = useContext(AppContext);
  const [load, setLoad] = useState(false);
  const [loguser, setLoguser] = useState({ phone: "" });

  const handleSubmit = async () => {
    if ( !loguser.phone) {
      toast.error("Number fields is required", { position: "top-center" });
      return;
    }
    setLoad(true)
      try {
        setLoad(false);
        await login(loguser)
        
        
        toast.success("Otp sent to your number!", { position: "top-center" });
        sessionStorage.setItem("verifyPhone", loguser.phone);
        router.push('/otp');
      } catch (err) {
        setLoad(false)
        const errorMessage =
        err?.response?.data?.error ||     // API error (e.g., 400, 401, etc.)
        err?.response?.data?.message ||   // Some APIs use `message` instead of `error`
        err?.message === 'Network Error'  // Axios network error
          ? 'Network error. Please check your internet connection.'
          : 'An unexpected error occurred';
          toast.error(errorMessage, { position: "top-center" });
      }
  }


  return (
   <main className={` flex flex-col w-full items-center justify-center min-h-screen ${styles.main}`}>
    <ToastContainer />
      <div className={`bg-[white] rounded-[10px] ${styles.log}`}>
        <div className={`flex  items-center justify-between ${styles.spc}`}>
          <Link href='/otp'>
          <h2 className="text-black lg:text-[30px] text-[20px] font-semibold text-start lg:w-[10vw]">
            Already have an Account?
          </h2>
          </Link>
          <img
              src="/img/signup.svg"
              alt="People illustration"
              className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-contain"
            />
        </div>
      
        <div className='flex flex-col gap-[60px] items-center'>

          <PhoneInput
            value={loguser.phone}
            onChange={(value) => setLoguser({ ...loguser, phone: value })}
            country={'us'}
            enableSearch
            enableAreaCodes
            inputClass={styles.inpclass}
            buttonClass={styles.flagDropdown}
            containerClass={styles.phncountr}
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: false,
            }}
          />

          <div className='flex flex-col gap-[30px]'>
            <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full bg-[#01A2D9] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition ${styles.btn} ${loading ? 'bg-blue-500 animate-pulse' : 'bg-[#01A2D9]'}`}>
              {loading? "sending code...":"Login"}
            </button>

            <div className='flex items-center w-full justify-center gap-[10px]'>
              <hr className='w-[5vw]'/>
              <p className={`text-center text-[black] text-sm `}> New user? <Link href="/signup"> <span className='text-[blue]'>Register Now</span></Link></p>
              <hr className='w-[5vw]'/>
            </div>
          </div>
        </div>
      </div>
   </main>
  );
}