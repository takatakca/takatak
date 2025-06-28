"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from "./page.module.css"
import 'react-phone-input-2/lib/style.css'; // required for flags
import PhoneInput from 'react-phone-input-2';


export default function Signup() {
  const handleChange = (value, data, event, formattedValue) => {
    console.log('Phone:', value); // full number with code
    console.log('Country:', data); // flag and country info
  };



  return (
    <main className={`flex flex-col items-center justify-center min-h-screen ${styles.main}`}>
      <div className='flex items-center'>
        <h2 className="text-white text-[30px] font-semibold text-start w-[10vw]">
          Here’s your first step with us!
        </h2>
        <img
            src="/img/signup.svg"
            alt="People illustration"
            className="w-[200px] h-[200px] object-contain"
          />
      </div>
      <div className='flex flex-col gap-[30px] items-center'>
         {/* Form */}
          <form className={`bg-white flex flex-col gap-[20px] ${styles.form}`}>
            <input
              type="text"
              placeholder="First name"
              className={` text-blue-800 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none  ${styles.fistname}`}
            />
            <input
              type="text"
              placeholder="Last name"
              className=" border border-gray-300 rounded-lg px-4 py-2 focus:outline-none  "
            />
            <input
              type="text"
              placeholder="Username"
              className=" border border-gray-300 rounded-lg px-4 py-2 focus:outline-none "
            />
            <input
              type="email"
              placeholder="Email"
              className=" border border-gray-300 rounded-lg px-4 py-2 focus:outline-none "
            />
            

            <PhoneInput
              country={'us'}
              enableSearch
              enableAreaCodes
              onChange={handleChange}
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



// "use client"
// import React, { useState } from 'react';
// import { TextField, Button, Box, Typography } from '@mui/material';
// // import { useRouter } from 'next/router';

// export default function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   // const router = useRouter();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     if(!email || !password || !confirmPassword){
//       alert("All fields are require")
//     }
//     // Perform your signup logic here (e.g., API call)
//     if (password !== confirmPassword) {
//       alert("Passwords don't match!");
//       return;
//     }

//     console.log('Signing up with:', email, password);
//     // Redirect to login page after successful signup
//     // router.push('/login');
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: '100vh',
//         bgcolor: 'background.default',
//         p: 3,
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         Sign Up
//       </Typography>

//       <form onSubmit={handleSignup} style={{ width: '100%', maxWidth: 400 }}>
//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <TextField
//           label="Password"
//           type="password"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <TextField
//           label="Confirm Password"
//           type="password"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           sx={{ mt: 2 }}
//         >
//           Sign Up
//         </Button>
//       </form>

//       <Typography variant="body2" sx={{ mt: 2 }}>
//         Already have an account?{' '}
//         <Button
//           onClick={() => router.push('/login')}
//           variant="text"
//           sx={{ textTransform: 'none' }}
//         >
//           Login
//         </Button>
//       </Typography>
//     </Box>
//   );
// }
