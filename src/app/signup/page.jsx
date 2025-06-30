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
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: ""
  })


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("buttn pressed");
    

    if (!form.firstname || !form.lastname || !form.username || !form.email || !form.phone) {
      console.log("All fields are required");
      
    toast.error("All fields are required", { position: "top-center" });
    return;
  }
  console.log("Form before submit:", form);
    try {
      const res = await signup(form);
      toast.success("Signed up successfully!", { position: "top-center" });
      console.log(res);
      router.push('/login');
    } catch (err) {
       let errorMsg = "Something went wrong";

        // Check if it's an Axios-style error
        if (err?.response?.data) {
          errorMsg = err.response.data.error || err.response.data.message || errorMsg;
        } else if (err?.message) {
          errorMsg = err.message;
        }

        console.error("Signup error:", errorMsg);
        toast.error(errorMsg, { position: "top-center" });
    }
  };


  return (
    <main className={`flex flex-col items-center justify-center min-h-screen ${styles.main}`}>
      <div className='flex items-center'>
        <h2 className="text-white text-[30px] font-semibold text-start w-[10vw]">
          Here’s your first step with us!
        </h2>
        <img
            src="/img/signup.svg"
            alt="Illustration of people signing up"
            className="w-[200px] h-[200px] object-contain"
          />
      </div>
      <div className='flex flex-col gap-[30px] items-center'>
         {/* Form */}
          <form className={`bg-[white] flex flex-col gap-[20px] ${styles.form}`} onSubmit={handleSubmit}>
            <input
              value={form.firstname}
              onChange={e => setForm({ ...form, firstname: e.target.value })}
              type="text"
              placeholder="First name"
              className={` text-blue-800 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none  ${styles.fistname}`}
            />
            <input
              value={form.lastname}
              onChange={e => setForm({ ...form, lastname: e.target.value })}
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
              className={`w-full bg-[#01A2D9] text-white font-semibold py-2 rounded-full hover:bg-[#1d4ed8] transition ${styles.btn}`}
            >
              Register
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