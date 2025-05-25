"use client"
import React, { useEffect, useState } from 'react';

// Define the AnimatedText component
const AnimatedText = () => {
  const randomColors = [
    'text-red-400', 'text-orange-400', 'text-yellow-400', 
    'text-green-400', 'text-teal-400', 'text-blue-400', 
    'text-indigo-400', 'text-purple-400', 'text-pink-400',
  ];

  const text = 'TAKATAK COMING SOON';

  return (
    <div className="flex flex-col items-center gap-[40px] space-x-2 lg:text-5xl text-[38px] lg:w-full w-[95%] text-center font-extrabold">
      <div>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block ${randomColors[index % randomColors.length]} animate-slide `}
          style={{
            animationDelay: `${index * 0.3}s`,
            animationDuration: '5s',
            animationIterationCount: 'infinite',
            animationName: index % 2 === 0 ? 'slideInLeft' : 'slideInRight',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      </div>
      <h2 className="text-[30px] mt-6 text-gray-400">Welcome to My App</h2>

    </div>
  );
};

// Main component (Home)
export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAnimation(false); // Remove animation
      setTimeout(() => {
        setShowAnimation(true); // Re-trigger it after 100ms
      }, 100);
    }, 120000); // Every 2 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen bg-black text-white">
      {showAnimation && <AnimatedText />}
    </main>
  );
}
