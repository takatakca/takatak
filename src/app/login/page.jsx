"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from "./page.module.css"
import 'react-phone-input-2/lib/style.css'; // required for flags
import PhoneInput from 'react-phone-input-2';




export default function Login() {
  const handleChange = (value, data, event, formattedValue) => {
    console.log('Phone:', value); // full number with code
    console.log('Country:', data); // flag and country info
  };


  return (
   <main className={` flex flex-col items-center justify-center min-h-screen ${styles.main}`}>
      <div className={`bg-[white] rounded-[10px] ${styles.log}`}>
        <div className='flex items-center'>
          <h2 className="text-black text-[30px] font-semibold text-start w-[10vw]">
            Already have an Account?
          </h2>
          <img
              src="/img/signup.svg"
              alt="People illustration"
              className="w-[200px] h-[200px] object-contain"
            />
        </div>
      
        <div className='flex flex-col gap-[60px] items-center'>

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

          <div className='flex flex-col gap-[30px]'>
            <Link href="/otp">
            <button
            type="submit"
            className={`w-full bg-[#01A2D9] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition ${styles.btn}`}>
              Login
            </button>
            </Link>

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












// "use client"
// import React, { useState } from 'react';
// import { TextField, Button, Box, Typography } from '@mui/material';
// import { useRouter } from 'next/router';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const router = useRouter();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if(!email || !password){
//       alert("All fields are require")
//     }
//     // Perform your login logic here (e.g., API call)
//     console.log('Logging in with:', email, password);

//     // Redirect to dashboard after successful login (for example)
//     // router.push('/dashboard');
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
//         Login
//       </Typography>

//       <form onSubmit={handleLogin} style={{ width: '100%', maxWidth: 400 }}>
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
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           sx={{ mt: 2 }}
//         >
//           Login
//         </Button>
//       </form>

//       <Typography variant="body2" sx={{ mt: 2 }}>
//         Don't have an account?{' '}
//         <Button
//           onClick={() => router.push('/signup')}
//           variant="text"
//           sx={{ textTransform: 'none' }}
//         >
//           Sign Up
//         </Button>
//       </Typography>
//     </Box>
//   );
// }
