"use client"
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import styles from "./page.module.css";
import 'react-phone-input-2/lib/style.css'; 
import PhoneInput from 'react-phone-input-2';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation';
import { AppContext } from '../context/AppContext';

export default function Login() {
  const router = useRouter();
  const { login, loading } = useContext(AppContext);
  const [load, setLoad] = useState(false);
  const [loguser, setLoguser] = useState({ 
    phone: "",
    email:""
   });

  const handleSubmit = async (e) => {
    e.preventDefault
    // if (!loguser.phone) {
    //   toast.error("Phone number is required", { position: "top-center" });
    //   return;
    // }

    setLoad(true);
    try {
      await login(loguser);
      toast.success("Otp sent to your number!", { position: "top-center" });

      // Save separately
      sessionStorage.setItem("verifyPhone", loguser.phone || "");
      sessionStorage.setItem("verifyEmail", loguser.email || "");

      router.push('/otp');
    } catch (err) {
      const errorMessage =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        (err?.message === 'Network Error'
          ? 'Network error. Please check your internet connection.'
          : 'An unexpected error occurred');
      toast.error(errorMessage, { position: "top-center" });
    } finally {
      setLoad(false);
    }
  };

  return (
    <main className={`flex flex-col w-full items-center justify-center min-h-screen ${styles.main}`}>
      <ToastContainer />
      <div className={`bg-white rounded-[10px] ${styles.log}`}>
        <div className={`flex items-center justify-between ${styles.spc}`}>
          <Link href='/otp'>
            <h2 className="text-black lg:text-[30px] text-[20px] font-semibold">
              Already have an Account?
            </h2>
          </Link>
          <img
            src="/img/signup.svg"
            alt="People illustration"
            className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-contain"
          />
        </div>

        <div className='flex flex-col gap-[40px] items-center'>
          <form action="">
            {/* Email Input */}
            <input
              className={`border border-black outline-0 px-3 py-2 rounded w-full text-black text-[20px] ${styles.emal}`}
              value={loguser.email}
              onChange={(e) => setLoguser({ ...loguser, email: e.target.value })}
              type="email"
              placeholder="Enter your email"
              required
            />

          </form>

          {/* Phone Input */}
          {/* <PhoneInput
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
          /> */}

          <div className='flex flex-col gap-[30px]'>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full text-white font-semibold rounded-full transition ${styles.btn} ${
                loading ? 'bg-blue-500 animate-pulse' : 'bg-[#01A2D9] hover:bg-[#1d4ed8]'
              }`}>
              {loading ? "Sending code..." : "Login"}
            </button>

            <div className='flex items-center justify-center gap-[10px]'>
              <hr className='w-[5vw]'/>
              <p className="text-black text-sm">
                New user? <Link href="/signup"><span className='text-blue-600'>Register Now</span></Link>
              </p>
              <hr className='w-[5vw]'/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}



// "use client"
// import React, { useContext, useState } from 'react';
// import Link from 'next/link';
// import styles from "./page.module.css"
// import 'react-phone-input-2/lib/style.css'; // required for flags
// import PhoneInput from 'react-phone-input-2';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from 'next/navigation';
// import { AppContext } from '../context/AppContext';




// export default function Login() {
//   const router = useRouter();
//   const {login, loading} = useContext(AppContext);
//   const [load, setLoad] = useState(false);
//   const [loguser, setLoguser] = useState({ phone: "" });

//   const handleSubmit = async () => {
//     if ( !loguser.phone) {
//       toast.error("Number fields is required", { position: "top-center" });
//       return;
//     }
//     setLoad(true)
//       try {
//         setLoad(false);
//         await login(loguser)
        
        
//         toast.success("Otp sent to your number!", { position: "top-center" });
//         sessionStorage.setItem("verifyPhone", loguser.phone);
//         router.push('/otp');
//       } catch (err) {
//         setLoad(false)
//         const errorMessage =
//           err?.response?.data?.error ||
//           err?.response?.data?.message ||
//           (err?.message === 'Network Error'
//             ? 'Network error. Please check your internet connection.'
//             : 'An unexpected error occurred');
//           toast.error(errorMessage, { position: "top-center" });
//       }
//   }


//   return (
//    <main className={` flex flex-col w-full items-center justify-center min-h-screen ${styles.main}`}>
//     <ToastContainer />
//       <div className={`bg-[white] rounded-[10px] ${styles.log}`}>
//         <div className={`flex  items-center justify-between ${styles.spc}`}>
//           <Link href='/otp'>
//           <h2 className="text-black lg:text-[30px] text-[20px] font-semibold text-start lg:w-[10vw]">
//             Already have an Account?
//           </h2>
//           </Link>
//           <img
//               src="/img/signup.svg"
//               alt="People illustration"
//               className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-contain"
//             />
//         </div>
      
//         <div className='flex flex-col gap-[60px] items-center'>

//           <PhoneInput
//             value={loguser.phone}
//             onChange={(value) => setLoguser({ ...loguser, phone: value })}
//             country={'us'}
//             enableSearch
//             enableAreaCodes
//             inputClass={styles.inpclass}
//             buttonClass={styles.flagDropdown}
//             containerClass={styles.phncountr}
//             inputProps={{
//               name: 'phone',
//               required: true,
//               autoFocus: false,
//             }}
//           />

//           <div className='flex flex-col gap-[30px]'>
//             <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className={`w-full bg-[#01A2D9] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition ${styles.btn} ${loading ? 'bg-blue-500 animate-pulse' : 'bg-[#01A2D9]'}`}>
//               {loading? "sending code...":"Login"}
//             </button>

//             <div className='flex items-center w-full justify-center gap-[10px]'>
//               <hr className='w-[5vw]'/>
//               <p className={`text-center text-[black] text-sm `}> New user? <Link href="/signup"> <span className='text-[blue]'>Register Now</span></Link></p>
//               <hr className='w-[5vw]'/>
//             </div>
//           </div>
//         </div>
//       </div>
//    </main>
//   );
// }