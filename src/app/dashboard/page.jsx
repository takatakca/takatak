"use client"
import React, { useContext, useEffect, useState } from 'react';
import styles from "./page.module.css"
import { AppContext } from '../context/AppContext';
import { useRouter } from 'next/navigation';


export default function Dashboard() {
    const {dashboard, user} = useContext(AppContext);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(()=>{
        const token = sessionStorage.getItem("authToken");

        if (!token) {
        // Redirect if not authenticated
        router.push('/login');
        return;
        }

        const fetchUser = async ()=>{
            try {
                await dashboard(); // Will set user in context
            } catch (error) {
                console.log("Dashboard fetch failed:", error);
                // Optionally remove invalid token and redirect
                sessionStorage.removeItem("authToken");
                router.push('/login');
            }finally {
                setLoading(false);
              }
        };
        fetchUser();
    }, []);

    if (loading) return <div className='flex justify-center'><p className={`${styles.load}`}>Loading dashboard...</p></div>;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white">
            <h1 className="text-2xl font-bold mb-4">Home Page Dashboard</h1>
            {user ? (
                <p className="text-lg text-white">Hi {user.username}, welcome to Takatak Dashboard!</p>
            ) : (
                <p className="text-lg text-white">Welcome to Takatak Dashboard</p>
            )}
        </div>

    )
}