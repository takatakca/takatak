"use client"
import React, { useEffect, useState } from 'react';


const cards = [
  { title: "AI Automation", desc: ["Athletic queue cravings", "Manipulation emulations"] },
  { title: "Marketing", desc: ["Footcontact at overnice", "Annimemication policies"] },
  { title: "CRM Integration", desc: ["Toilsolution writingulation", "Immitation nitroductions"] },
  { title: "Targeting Exumeting TAKATAK", desc: ["Maxinpringcia Metheo", "Teenuanose"] },
];

export default function Home() {
  return (
    <main className='bg-gradient-to-r from-blue-700 to-[#4ca8ea]'>
      <section>
          <div className="flex flex-col lg:flex-row items-center justify-between p-12 text-white">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold mb-4">Powering Your Business to the Next Level</h2>
            <p className="mb-6">Seamless solutions to drive growth, streamline operations, and enhance customer relationships.</p>
            <button className="bg-white text-blue-700 px-6 py-2 rounded-md font-semibold">Get Started</button>
          </div>
          <div className="mt-10 lg:mt-0">
            <img src="/img/hmp.png" alt="Profile" className="w-[500px] h-[400px] object-cover rounded-full mx-auto" />
            <div className="text-yellow-400 text-center text-2xl mt-2">★★★★★</div>
          </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-12">
          {cards.map((card) => (
            <div key={card.title} className="bg-white text-blue-800 p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <ul className="space-y-1 text-sm">
                {card.desc.map((item, idx) => <li key={idx}>• {item}</li>)}
              </ul>
              <a href="#" className="text-blue-600 text-sm mt-2 inline-block underline">Learn More</a>
            </div>
          ))}
        </div>
      </section>
      <section></section>
    </main>
  )
}

// "use client"
// import React, { useEffect, useState } from 'react';

// // Define the AnimatedText component
// const AnimatedText = () => {
//   const randomColors = [
//     'text-red-400', 'text-orange-400', 'text-yellow-400', 
//     'text-green-400', 'text-teal-400', 'text-blue-400', 
//     'text-indigo-400', 'text-purple-400', 'text-pink-400',
//   ];

//   const text = 'TAKATAK COMING SOON';

//   return (
//     <div className="flex flex-col items-center gap-[40px] space-x-2 lg:text-5xl text-[38px] lg:w-full w-[95%] text-center font-extrabold">
//       <div>
//       {text.split('').map((char, index) => (
//         <span
//           key={index}
//           className={`inline-block ${randomColors[index % randomColors.length]} animate-slide `}
//           style={{
//             animationDelay: `${index * 0.3}s`,
//             animationDuration: '5s',
//             animationIterationCount: 'infinite',
//             animationName: index % 2 === 0 ? 'slideInLeft' : 'slideInRight',
//           }}
//         >
//           {char === ' ' ? '\u00A0' : char}
//         </span>
//       ))}
//       </div>
//       <h2 className="text-[30px] mt-6 text-gray-400">Welcome to My App</h2>

//     </div>
//   );
// };

// // Main component (Home)
// export default function Home() {
//   const [showAnimation, setShowAnimation] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowAnimation(false); // Remove animation
//       setTimeout(() => {
//         setShowAnimation(true); // Re-trigger it after 100ms
//       }, 100);
//     }, 120000); // Every 2 minutes

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main className="flex items-center justify-center min-h-screen bg-black text-white">
//       {showAnimation && <AnimatedText />}
//     </main>
//   );
// }
