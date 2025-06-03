import React from 'react'

const illust =[
  {
    id:1,
    img: '/img/waiting.png',
    numb: "0",
    title:"On Waiting List",
  },
  {
    id:2,
    img: '/img/upcoming.png',
    numb: "0",
    title:"Upcoming",
  },
  {
    id:3,
    img: '/img/ongoing.png',
    numb: "1",
    title:"Ongoing",
  },
  {
    id:4,
    img: '/img/online.png',
    numb: "2",
    title:"Online",
  },
  {
    id:5,
    img: '/img/class.png',
    numb: "0",
    title:"Classroom-Led",
  },
  {
    id:6,
    img: '/img/hybrid.png',
    numb: "0",
    title:"Hybrid",
  },
  {
    id:7,
    img: '/img/complete.png',
    numb: "1",
    title:"Completed",
  },
  {
    id:8,
    img: '/img/total.png',
    numb: "2",
    title:"Total Activities",
  },
]

const Summary = () => {
  return (
    <div className='flex flex-col w-full items-center '>
      <p className='text-[23px] font-normal text-[gray]'>Overview of your activities</p>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-14 items-center '>
        {
          illust.map((vec)=>(
            <div key={vec.id} className='flex flex-col items-center'>
              <img src={vec.img} alt="" className='h-[150px]'/>
              <h1 className='text-[28px]'>{vec.numb}</h1>
              <p className='text-[15px]'>{vec.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Summary


// 'use client';

// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   Radar,
//   Tooltip
// } from 'recharts';

// const COLORS = ['#3b82f6', '#e5e7eb']; // Blue and Gray

// const pieData = [
//   { name: 'Completed', value: 1 },
//   { name: 'Remaining', value: 1 },
// ];

// const radarData = [
//   { subject: 'Not Started', value: 0, fullMark: 2 },
//   { subject: 'In Progress', value: 1, fullMark: 2 },
//   { subject: 'Completed', value: 1, fullMark: 2 },
// ];

// export default function SummaryPage() {
//   return (
//     <div className="p-6 space-y-8 bg-gray-50 min-h-screen text-gray-800">
//       {/* ...Other sections... */}

//       {/* Completed Training with Pie Chart */}
//       <div className="bg-white rounded-xl shadow p-6 text-center">
//         <h2 className="text-xl font-semibold mb-4">Your completed training courses</h2>
//         <div className="h-60">
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 innerRadius={50}
//                 outerRadius={80}
//                 dataKey="value"
//                 isAnimationActive={true}
//               >
//                 {pieData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Learning Radar with Radar Chart */}
//       <div className="bg-white rounded-xl shadow p-6 text-center">
//         <h2 className="text-xl font-semibold mb-4">Your Learning Radar</h2>
//         <div className="h-72">
//           <ResponsiveContainer width="100%" height="100%">
//             <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
//               <PolarGrid />
//               <PolarAngleAxis dataKey="subject" />
//               <Radar
//                 name="Progress"
//                 dataKey="value"
//                 stroke="#3b82f6"
//                 fill="#3b82f6"
//                 fillOpacity={0.6}
//                 animationDuration={1000}
//               />
//               <Tooltip />
//             </RadarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

