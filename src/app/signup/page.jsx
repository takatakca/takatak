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


export default function Signup() {
  const router = useRouter();
  

  const {signup, loading} = useContext(AppContext);
  const [load, setLoad] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: ""
  })


  const handleSubmit = async (e) => {
    e.preventDefault();
    

    if (!form.firstName || !form.lastName || !form.username || !form.email || !form.phone) {
      
    toast.error("All fields are required", { position: "top-center" });
    return;
    
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    toast.error("Please enter a valid email address", { position: "top-center" });
    return;
  }
  setLoad(true)
    try {
      setLoad(false)
      await signup(form);
      sessionStorage.setItem("verifyPhone", form.phone);
      
      toast.success("Otp sent to your number!", { position: "top-center" });
      router.push('/otp');
    } catch (err) {
      setLoad(false)
      const errorMessage =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        (err?.message === 'Network Error'
          ? 'Network error. Please check your internet connection.'
          : 'An unexpected error occurred');
       toast.error(errorMessage, { position: "top-center" });
    }
  };


  return (
    <main className={`flex flex-col w-full items-center justify-center min-h-screen ${styles.main}`}>
       <ToastContainer />
      <div className={`flex  items-center justify-between ${styles.spc}`}>
        <h2 className="text-white lg:text-[30px] text-[20px] font-semibold text-start lg:w-[10vw]">
          Here’s your first step with us!
        </h2>
        <img
            src="/img/signup.svg"
            alt="Illustration of people signing up"
            className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-contain"
          />
      </div>
      <div className={`flex flex-col gap-[30px] items-center   ${styles.formdv}`}>
         {/* Form */}
          <form className={`bg-[white] flex flex-col gap-[20px] ${styles.form}`} onSubmit={handleSubmit} >
            <input
              value={form.firstName}
              onChange={e => setForm({ ...form, firstName: e.target.value })}
              type="text"
              placeholder="First name"
              className={` text-blue-800 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none  ${styles.fistname}`}
            />
            <input
              value={form.lastName}
              onChange={e => setForm({ ...form, lastName: e.target.value })}
              type="text"
              placeholder="Last name"
              className=" border border-gray-300 rounded-lg px-4 py-2 focus:outline-none  "
            />
            <input
              value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })}
              type="text"
              placeholder="Username"
              className=" border border-gray-300 rounded-lg px-4 py-2 focus:outline-none "
            />
            <input
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
              className=" border border-gray-300 rounded-lg px-4 py-2 focus:outline-none "
            />
            

            <PhoneInput
              value={form.phone}
              // onChange={e => setForm({ ...form, phone: e.target.value })}
              onChange={(value, country) => setForm({ ...form, phone: value })}
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

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#01A2D9] text-white font-semibold py-2 rounded-full hover:bg-[#1d4ed8] transition ${styles.btn}  ${loading ? 'bg-blue-500 animate-pulse' : 'bg-[#01A2D9]'}`}
            >
              {loading? "sending code...":"Register"}
            </button>
          </form>

          <div className='flex items-center gap-[10px] w-full justify-center'>
            <hr className='w-[5vw]'/>
            <p className={`text-center text-sm `}> Already have an account? <Link href="/login"> <span className='text-[white]'>Login</span></Link></p>
            <hr className='w-[5vw]'/>
          </div>
      </div>
    </main>
  );
}