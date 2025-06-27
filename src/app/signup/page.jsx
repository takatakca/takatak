"use client"
import React, { useState } from 'react';
export default function Signup() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <div className='flex items-center'>
        <h2 className="text-white text-2xl font-semibold text-center w-[10vw]">
          Here’s your first step with us!
        </h2>
        <img
            src="/img/signup.svg"
            alt="People illustration"
            className="w-48 h-32 object-contain"
          />
      </div>
      <div>
         {/* Form */}
          <form className="bg-white">
            <input
              type="text"
              placeholder="First name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            
            <div className="">
              <span className=" text-gray-500">+1</span>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-semibold py-2 rounded-full hover:bg-teal-600 transition"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?
          </p>
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
