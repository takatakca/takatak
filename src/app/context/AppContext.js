'use client';
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

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


    return (
    <AppContext.Provider value={{ user, loading, signup, }}>
      {children}
    </AppContext.Provider>
  );
};