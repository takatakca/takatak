'use client';
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import {jwtDecode} from "jwt-decode";
import { useRouter } from 'next/navigation';


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [upmindClientId, setUpmindClientId] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const router = useRouter();

    const [orders, setOrders] = useState([]);
const [invoices, setInvoices] = useState([]);
const [activity, setActivity] = useState([]);


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
            const res = await axios.post("https://takatak.onrender.com/register", regData);
            if (res.data.user) 
              setUser(res.data.user);
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
      const res = await axios.post('https://takatak.onrender.com/login', loginData);
      if (res.data.user) 
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
      const res = await axios.post('https://takatak.onrender.com/verify-otp', verifyotpData);
      if (res.data.user) 
        setUser(res.data.user);
      return res.data;
    } catch (err) {
      throw err;
    }finally{
      setLoading(false);
    }
  }

  const resendcode = async(data)=>{
    setLoading(true);
    try {
      const res = await axios.post('https://takatak.onrender.com/resend-code', data);
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
    if (!token) throw new Error("No auth token");

    try {
      const res = await axios.get('https://takatak.onrender.com/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }); 


    //   const userData = res.data?.data || res.data?.user || null;
    //    if (userData) {
    //   setUser(userData);
    //   return userData;
    //   }else {
    //   throw new Error("Invalid dashboard response");
    // }

        const { user, orders, invoices, activity } = res.data;

    if (user) {
      setUser(user);

      // Optionally: you can also store orders, invoices, activity in context
      setOrders(orders || []);
      setInvoices(invoices || []);
      setActivity(activity || []);

      return { user, orders, invoices, activity };
    } else {
      throw new Error("Invalid dashboard response");
    }
    } catch (err) {
       console.error("Dashboard fetch failed:", err);
    throw err;
    } finally {
      setLoading(false);
      
    }
  }

  // const getUpmindClientId = async () => {
  //   const token = sessionStorage.getItem("authToken");
  //   try {
  //     const res = await axios.get("https://takatak.onrender.com/upmindClientId", {
  //       headers: { Authorization: `Bearer ${token}` }
  //     });
  //     return res.data.upmindClientId;
  //   } catch (err) {
  //     throw err;
  //   }
  // };


  const fetchUpmindClientId = async () => {
    // setLoading(true);
    try {
      const token = sessionStorage.getItem("authToken");
      if (!token){
        // console.warn("No auth token yet, skipping Upmind fetch");
        setUpmindClientId(null);
        return null;
      }

      const res = await axios.get(
        "https://takatak.onrender.com/upmindClientId",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const { upmindToken } = res.data;

      // Decode JWT to extract clientId
      const decoded = jwtDecode(upmindToken);      
      setUpmindClientId(decoded.upmindId);
      return decoded.upmindId;
    } catch (err) {
      console.error("Failed to fetch Upmind clientId:", err);
      setUpmindClientId(null);
    }finally {
      setLoading(false);
    }
  };



    return (
    <AppContext.Provider value={{ user, loading, orders, invoices, activity, upmindClientId, signup, login, verifyotp, resendcode, fetchUpmindClientId, dashboard}}>
      {children}
    </AppContext.Provider>
  );
};