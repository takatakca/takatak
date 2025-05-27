"use client"
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
// import { useRouter } from 'next/router';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    if(!email || !password || !confirmPassword){
      alert("All fields are require")
    }
    // Perform your signup logic here (e.g., API call)
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    console.log('Signing up with:', email, password);
    // Redirect to login page after successful signup
    // router.push('/login');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default',
        p: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>

      <form onSubmit={handleSignup} style={{ width: '100%', maxWidth: 400 }}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Sign Up
        </Button>
      </form>

      <Typography variant="body2" sx={{ mt: 2 }}>
        Already have an account?{' '}
        <Button
          onClick={() => router.push('/login')}
          variant="text"
          sx={{ textTransform: 'none' }}
        >
          Login
        </Button>
      </Typography>
    </Box>
  );
}
