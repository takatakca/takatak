"use client"
import React, { useEffect, useState } from 'react';
import styles from "./page.module.css";
import { SiInductiveautomation, SiGooglemarketingplatform, SiCivicrm   } from "react-icons/si";
import { GiTargeting } from "react-icons/gi";


const cards = [
  { title: "AI Automation", desc: ["Athletic queue cravings", "Manipulation emulations"], icon:<SiInductiveautomation /> },
  { title: "Marketing", desc: ["Footcontact at overnice", "Annimemication policies"], icon:<SiGooglemarketingplatform /> },
  { title: "CRM Integration", desc: ["Toilsolution writingulation", "Immitation nitroductions"], icon:<SiCivicrm /> },
  { title: "Targeting Exumeting TAKATAK", desc: ["Maxinpringcia Metheo", "Teenuanose"], icon:<GiTargeting /> },
];

const services = [
    {
      icon:<SiInductiveautomation />,
      title: "AI Automation",
      tit1: "key features",
      points: ["Eliminatorem vent omnium", "Emicta imitationi arctati"],
      tit2: "benefits",
      benefits: ["Emorcium ded sa faith", "Minuni"],
    },
    {
      icon:<SiInductiveautomation />,
      title: "Marketing",
      points: ["Choose in reasoning and serve", "Semnosum lumibeth arceae"],
      tit2: "awareness",
      awareness: ["Praestero diate", "Busineerce", "Effrailot", "Busineerce"]
    },
    {
      icon:<SiInductiveautomation />,
      title: "AI File Organizer TAKATAK",
      tit1: "benefits",
      points: ["Entotecatwine", "Recaribe rescoudations"]
    },
    {
      icon:<SiInductiveautomation />,
      title: "Reviews Management",
      points: ["Endlet interamining amg", "Aninam and demonstratee", "Endlet interamining amg"]
    },
  ];

export default function Home() {

  const handleSearch = () => {
  // logic for filtering or API call
};

const freelancers = [
  { name: "Elite Crafttech", rating: 5, img:"/img/elite5.webp" },
  { name: "A+", rating: 5, img:"/img/user6.webp" },
  { name: "Opsi Perles", rating: 5, img:"/img/user1.png" },
  { name: "matt wallace", rating: 5, img:"/img/user5.webp" },
  { name: "Inimu Drisg", rating: 5, img:"/img/user4.jpg" },
  { name: "Aviti Nano", rating: 5, img:"/img/user3.png" },
  { name: "Rich Pehri", rating: 5, img:"/img/user2.jpeg" },
  
  
];

  return (
    <main>
      <section className={`relative w-full flex flex-col ${styles.gradient}`}>
          <div className="flex flex-col lg:flex-row items-center justify-between p-12 text-white">
          <div className={`max-w-lg flex flex-col gap-[30px] ${styles.pag}`}>
            <h2 className="text-[48px] w-[40vw] leading-[60px] font-bold">Powering Your Business to the Next Level</h2>
            <p className="text-[20px] w-[42vw]">Seamless solutions to drive growth, streamline operations, and enhance customer relationships.</p>
            <button className={`bg-[#01A2D9] text-white-700 font-semibold w-[13vw] ${styles.butn}`}>Get Started</button>
          </div>
          <div className="relative z-10 mt-10 lg:mt-0">
            <img src="/img/hmp.png" alt="Profile" className={`w-[500px] h-[500px] object-cover rounded-full mx-auto ${styles.img}`}
            style={{
              maskImage: 'linear-gradient(to bottom, black 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)',
            }} />
            <div className={`text-yellow-400 text-[30px] text-center z-20 relative top-[-10px] right-[50px] ${styles.star}`}>  ★★★★★ </div>
          </div>
          </div>

          <div className={`relative z-0 -mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${styles.servic} `}>
          {cards.map((card) => (
            <div key={card.title} className={`bg-white text-blue-800 rounded-[20px] shadow-lg flex flex-col gap-[13px] ${styles.serv}`}>
              <div className='flex items-center gap-[15px]'>
                <p className='text-[30px]'>{card.icon}</p>
                <h3 className="font-bold text-[15px] w-[13vw]">{card.title}</h3>
              </div>
              <ul className="space-y-1 text-sm">
                {card.desc.map((item, idx) => <li key={idx}>• {item}</li>)}
              </ul>
              <a href="#" className="text-blue-600 text-sm mt-2 inline-block underline">Learn More</a>
            </div>
          ))}
        </div>
      </section>
      
      <section className={`bg-[#e0ecf7] flex gap-[150px] justify-center ${styles.dscm}`}>
        <div>
          <div className='flex flex-col gap-[20px]'>
              <h1 className='text-blue-900 font-bold text-[28px]'>Details Service & Campaigns</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-[150px] gap-y-[30px] px-12 py-10'>
              {services.map((item, idx) => (
                <div key={idx} className={`bg-white text-blue-800 flex flex-col gap-[10px]  rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.12)] ${styles.detail}`}>
                  <div className='flex items-center'>
                    <p className="text-2xl text-blue-600 mb-2">{item.icon}</p>
                    <h4 className="font-bold text-[15px] w-[11vw]">{item.title}</h4>
                  </div>

                  <ul className=" list-disc list-inside  text-[12px] flex flex-col gap-[3px] font-[400]">
                    {item.tit1 && <h5 className="font-bold mt-2">{item.tit1}</h5>}
                    {item.points && item.points.map((p, i) => <li key={`p-${i}`}>{p}</li>)}
                    {item.tit2 && <h5 className="font-bold mt-2">{item.tit2}</h5>}
                    {item.benefits && item.benefits.map((b, i) => <li key={`b-${i}`}>{b}</li>)}
                    {item.awareness && item.awareness.map((a, i) => <li key={`a-${i}`}>{a}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[20px]">
          <h1 className="text-blue-900 font-bold text-[28px]">Marketplace</h1>
          <div className='flex flex-col gap-[40px] '>
            <div className={`bg-white rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.12)] text-blue-800 w-full max-w-lg flex flex-col gap-[20px]  ${styles.market}`}>
              <h1 className='text-center'>Marketplace</h1>
              <div className='flex flex-col gap-[30px] border'>
                
                <input
                type="text"
                placeholder="Search marketplace..."
                className={`flex-grow border border-blue-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${styles.inp}`}
                />
                <button className={`bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${styles.butto}`}  onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>

            <div className={`bg-white text-blue-800 flex flex-col gap-[10px]  rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.12)] ${styles.detail}`}>
              <div>
                <SiInductiveautomation />
                <h1>Local Citation TAKATAK</h1>
              </div>
              <ul className="text-[12px] flex flex-col gap-[3px] font-[400]">
                <h1 className='font-bold'>Marketing lorem</h1>
                <li>Breaton accrat timok</li>
                <li>Retention</li>
              </ul>
            </div>
          </div>
        </div>

        <div className=''>
          {/* Categories */}
          <div className={`bg-white text-blue-900 rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.12)] space-y-2 flex flex-col gap-[50px] ${styles.freel}`}>
            <div className='flex flex-col gap-[15px]'>
              <h4 className="font-bold">Graphics & Design</h4>
              <hr className='text-[#efeaea]'/>
              <h4 className="font-bold">Digital Marketing</h4>
              <hr className='text-[#efeaea]'/>
              <h4 className="font-bold">Programming & Tech</h4>
              <hr className='text-[#efeaea]'/>
              <h4 className="font-bold">Video & Animation</h4>
              <hr className='text-[#efeaea]'/>
              <h4 className="font-bold">Writing & Translation</h4>
            </div>
            <button className={`bg-blue-600 text-white rounded ${styles.hirefst}`}>Hire a Freelancer</button>
          </div>

          {/* Duplicate Category box */}
          <div className={`absolute bg-white text-blue-900 p-6 rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.12)] flex flex-col gap-[50px] space-y-2 z-10 ${styles.nextfrel}`}>
            <div className='flex flex-col gap-[15px]'>
              <h4 className="font-bold">Graphics & Design</h4>
              <hr className='text-[#efeaea]'/>
              <h4 className="font-bold">Digital Marketing</h4>
              <hr className='text-[#efeaea]'/>
              <h4 className="font-bold">Programming & Tech</h4>
              <hr className='text-[#efeaea]'/>
              <h4 className="font-bold">Video & Animation</h4>
              <hr className='text-[#efeaea]'/>
              <h4 className="font-bold">Writing & Translation</h4>
            </div>
            <button className={`bg-blue-600 text-white rounded ${styles.hirefst}`}>Hire a Freelancer</button>
          </div>
        </div>
      </section>

      <section className={`relative flex gap-[200px] bg-gradient-to-b from-blue-700 to-blue-800 ${styles.Fmark}`}>
        {/* Left Column */}
        <div className="relative">
          <h3 className="text-xl font-bold mb-4">Marketing Campaign</h3>

          <div>
            <input className="p-2 w-full rounded text-black mb-4" placeholder="Search marketplace..." />
            <div className="flex gap-4 mb-6">
              {['Development', 'Design', 'Writing', 'Video'].map((tag) => (
                <button key={tag} className="bg-white text-blue-800 px-4 py-1 rounded-full">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Freelancers */}
          <div className={`relative w-full max-w-[660px] overflow-x-auto ${styles.scrollhide}`}>
            {/* <div className="overflow-x-auto max-w-full pr-6"> */}
              <div className="flex gap-[18px] w-max px-1">
                {freelancers.map((user, idx) => (
                  <div key={idx} className="text-center flex flex-col items-center shrink-0 w-[130px]">
                    <div className=" relative w-[90px] h-[90px] bg-white rounded-full mx-auto flex items-center">
                      <div className="absolute inset-0 rounded-full bg-white blur-md opacity-30"></div>
                      <img
                        src={user.img}
                        alt=""
                        className="w-[80px] h-[80px] object-cover rounded-full mx-auto relative z-10 shadow-[0_0_12px_4px_rgba(255,255,255,0.3)]"
                      />
                    </div>
                    <p className="mt-2 font-semibold text-[15px] w-[12vw]">{user.name}</p>
                    <p className="text-yellow-400">{'★'.repeat(user.rating)}</p>
                  </div>
                ))}
              {/* </div> */}
            </div>

          </div>
            {/* Right edge blur to hint scrollable */}
            <div className=" pointer-events-none absolute top-[60px] right-0 h-[11vw] w-10 bg-gradient-to-l from-blue-800 to-transparent z-10" />
        </div>

        {/* Right Column */}
        <div>
          <h1>FMarketplace</h1>
          <div className={`bg-white text-blue-900 p-6 rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.12)] space-y-2 flex flex-col gap-[40px] ${styles.fmarketplc}`}>
            <div className="flex flex-col gap-[10px]">
              {[
                "Graphics & Design",
                "Digital Marketing",
                "Programming & Tech",
                "Video & Animation",
                "Writing & Translation"
              ].map((category) => (
                <React.Fragment key={category}>
                  <h4 className="font-bold">{category}</h4>
                  <hr className="text-[#efeaea]" />
                </React.Fragment>
              ))}
            </div>
            <button className={`bg-blue-600 text-white rounded ${styles.hirefst}`}>
              Hire a Freelancer
            </button>
          </div>
        </div>
      </section>

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
