'use client';
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const INACTIVITY_LIMIT = 10 * 60 * 60 * 1000; // 10 hours in ms

    // ✅ Auto-logout on inactivity
    useEffect(() => {
      let timeout;

      const resetTimer = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          const token = sessionStorage.getItem("authToken");
          if(token){
            console.log("User inactive for 10 hours. Logging out...");
            sessionStorage.removeItem("authToken");
            setUser(null);
            router.push('/login');
            }
        }, INACTIVITY_LIMIT);
      };

      const activityEvents = ['mousemove', 'keydown', 'scroll', 'click'];
      activityEvents.forEach(event =>
        window.addEventListener(event, resetTimer)
      );

      resetTimer(); // Start timer on mount

      return () => {
        activityEvents.forEach(event =>
          window.removeEventListener(event, resetTimer)
        );
        clearTimeout(timeout);
      };
    }, []);

    const signup = async(regData)=>{
        setLoading(true);
        try {
            const res = await axios.post("https://tak-q7r0.onrender.com/register", regData);
            setUser(res.data.user);
            // Optionally store token
            return res.data;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const login = async (loginData) => {
    setLoading(true);
    try {
      const res = await axios.post('https://tak-q7r0.onrender.com/login', loginData);
      setUser(res.data.user);
      return res.data;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const verifyotp = async (verifyotpData)=>{
    setLoading(true);
    try {
      const res = await axios.post('https://tak-q7r0.onrender.com/verify-otp', verifyotpData);
      setUser(res.data.user);
      return res.data;
    } catch (err) {
      throw err;
    }finally{
      setLoading(false);
    }
  }

  const resendcode = async(data)=>{
    try {
      const res = await axios.post('https://tak-q7r0.onrender.com/resend-code', data);
      if (res.data.user) 
        setUser(res.data.user);
      return res.data;
    } catch (err) {
      throw err;
    }finally{
      setLoading(false);
    }
  }

  const dashboard = async()=>{
    const token = sessionStorage.getItem("authToken");
    try {
      const res = await axios.get('https://tak-q7r0.onrender.com/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }); 
      if (res.data.data) 
        setUser(res.data.data);
      return res.data;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
      
    }
  }


    return (
    <AppContext.Provider value={{ user, loading, signup, login, verifyotp, resendcode, dashboard}}>
      {children}
    </AppContext.Provider>
  );
};