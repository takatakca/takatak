import React from 'react'

const page = () => {
  return (
    <div className="p-10 text-center text-xl font-bold text-blue-700">
      Welcome to Course C Exam Page
    </div>
  )
}

export default page


// 'use client'

// import React, { useState } from 'react'
// import { PiLessThanThin, PiGreaterThanThin } from "react-icons/pi";


// const Calendar = () => {
//   const [date, setDate] = useState(new Date())

//   const year = date.getFullYear()
//   const month = date.getMonth()

//   const today = new Date()

//   const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()
//   const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay()

//   const daysInMonth = getDaysInMonth(year, month)
//   const firstDay = getFirstDayOfMonth(year, month)

//   const prevMonth = () => setDate(new Date(year, month - 1, 1))
//   const nextMonth = () => setDate(new Date(year, month + 1, 1))

//   const events = {
//     '2025-05-24': true,
//   }

//   const isToday = (d) =>
//     d === today.getDate() &&
//     month === today.getMonth() &&
//     year === today.getFullYear()

//   const formattedMonth = new Intl.DateTimeFormat('en-US', {
//     month: 'long',
//     year: 'numeric',
//   }).format(date)

//   return (
//     <div className="w-screen h-screen flex flex-col p-6">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-semibold">Calendar of events</h1>
//         <div className="flex space-x-4 text-blue-600 font-medium">
//           <button>📅 Calendar</button>
//           <button>📃 List</button>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="flex items-start mb-4">
//         <button className='back' onClick={prevMonth}><PiLessThanThin /></button>
//         <h2 className="dat text-xl font-medium">{formattedMonth}</h2>
//         <button className='front' onClick={nextMonth}><PiGreaterThanThin /></button>
//       </div>

//       {/* Calendar Grid */}
//       <div className="flex-1 flex flex-col">
//         <div className="grid grid-cols-7 text-center font-medium text-gray-600">
//           {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
//             <div key={day} className="py-2 border border-gray-200 bg-gray-50">{day}</div>
//           ))}
//         </div>

//         <div className="flex-1 grid grid-cols-7 auto-rows-fr">
//           {[...Array(firstDay)].map((_, i) => (
//             <div key={`empty-${i}`} className="border border-gray-200"></div>
//           ))}

//           {[...Array(daysInMonth)].map((_, i) => {
//             const day = i + 1
//             const dateKey = `${year}-${(month + 1).toString().padStart(2, '0')}-${day
//               .toString()
//               .padStart(2, '0')}`
//             const hasEvent = events[dateKey]

//             return (
//               <div
//                 key={day}
//                 className={`border border-gray-200 p-2 relative text-right ${
//                   isToday(day) ? 'bg-blue-100 font-bold' : ''
//                 }`}
//               >
//                 <span className="block text-xs">{day}</span>
//                 {hasEvent && (
//                   <span className="absolute bottom-2 right-2 h-2 w-2 bg-teal-500 rounded-full"></span>
//                 )}
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Calendar