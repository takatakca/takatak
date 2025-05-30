'use client'

import React, { useState } from 'react'
import { PiLessThanThin, PiGreaterThanThin } from "react-icons/pi";


const Calendar = () => {
  const [date, setDate] = useState(new Date())

  const year = date.getFullYear()
  const month = date.getMonth()

  const today = new Date()

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay()

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)

  const prevMonth = () => setDate(new Date(year, month - 1, 1))
  const nextMonth = () => setDate(new Date(year, month + 1, 1))

  const events = {
    '2025-05-24': true,
  }

  const isToday = (d) =>
    d === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear()

  const formattedMonth = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(date)

  return (
    <div className="w-screen h-screen flex flex-col p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Calendar of events</h1>
        <div className="flex space-x-4 text-blue-600 font-medium">
          <button>📅 Calendar</button>
          <button>📃 List</button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-start mb-4">
        <button className='back' onClick={prevMonth}><PiLessThanThin /></button>
        <h2 className="dat text-xl font-medium">{formattedMonth}</h2>
        <button className='front' onClick={nextMonth}><PiGreaterThanThin /></button>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 flex flex-col">
        <div className="grid grid-cols-7 text-center font-medium text-gray-600">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="py-2 border border-gray-200 bg-gray-50">{day}</div>
          ))}
        </div>

        <div className="flex-1 grid grid-cols-7 auto-rows-fr">
          {[...Array(firstDay)].map((_, i) => (
            <div key={`empty-${i}`} className="border border-gray-200"></div>
          ))}

          {[...Array(daysInMonth)].map((_, i) => {
            const day = i + 1
            const dateKey = `${year}-${(month + 1).toString().padStart(2, '0')}-${day
              .toString()
              .padStart(2, '0')}`
            const hasEvent = events[dateKey]

            return (
              <div
                key={day}
                className={`border border-gray-200 p-2 relative text-right ${
                  isToday(day) ? 'bg-blue-100 font-bold' : ''
                }`}
              >
                <span className="block text-xs">{day}</span>
                {hasEvent && (
                  <span className="absolute bottom-2 right-2 h-2 w-2 bg-teal-500 rounded-full"></span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Calendar

// 'use client'

// import React, { useState } from 'react'

// const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// const shortWeekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
// const timeSlots = Array.from({ length: 18 }, (_, i) => `${i + 5}:00 PM`)

// const Calendar = () => {
//   const [view, setView] = useState('month')
//   const [date, setDate] = useState(new Date())

//   const year = date.getFullYear()
//   const month = date.getMonth()
//   const day = date.getDate()

//   const firstDayOfMonth = new Date(year, month, 1).getDay()
//   const daysInMonth = new Date(year, month + 1, 0).getDate()

//   const prevMonth = () => setDate(new Date(year, month - 1, 1))
//   const nextMonth = () => setDate(new Date(year, month + 1, 1))

//   const isToday = (d) =>
//     d === new Date().getDate() &&
//     month === new Date().getMonth() &&
//     year === new Date().getFullYear()

//   const formattedHeader =
//     view === 'month'
//       ? new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date)
//       : getWeekRange(date)

//   function getWeekRange(date) {
//     const start = new Date(date)
//     start.setDate(date.getDate() - date.getDay())

//     const end = new Date(start)
//     end.setDate(start.getDate() + 6)

//     const startStr = `${start.getDate()}`
//     const endStr = `${end.getDate()} ${end.toLocaleString('default', {
//       month: 'long',
//     })} ${end.getFullYear()}`

//     return `${startStr}-${endStr}`
//   }

//   return (
//     <div className="w-screen h-screen flex flex-col bg-white">
//       {/* Header */}
//       <div className="flex flex-col items-center border-b px-6 py-4">
//         <div className="flex gap-4 items-center">
//           <h2 className="text-xl font-semibold">Calendar of events</h2>
//           <button className="text-blue-700 font-medium">📅 Calendar</button>
//           <button className="text-gray-700 font-medium">📃 List</button>
//         </div>

//         <div className="flex items-center gap-4">
//           <button onClick={prevMonth}>←</button>
//           <span className="font-medium">{formattedHeader}</span>
//           <button onClick={nextMonth}>→</button>
//         </div>

//         <div className="flex border border-gray-300 rounded overflow-hidden">
//           <button
//             onClick={() => setView('week')}
//             className={`px-4 py-1 ${view === 'week' ? 'bg-gray-200 font-semibold' : ''}`}
//           >
//             Week
//           </button>
//           <button
//             onClick={() => setView('month')}
//             className={`px-4 py-1 ${view === 'month' ? 'bg-gray-200 font-semibold' : ''}`}
//           >
//             Month
//           </button>
//         </div>
//       </div>

//       {/* View Content */}
//       {view === 'month' ? (
//         <div className="grid grid-cols-7 flex-1">
//           {shortWeekDays.map((day, idx) => (
//             <div
//               key={idx}
//               className="border text-center font-semibold py-2 bg-gray-100 text-sm"
//             >
//               {day}
//             </div>
//           ))}

//           {[...Array(firstDayOfMonth)].map((_, idx) => (
//             <div key={`empty-${idx}`} className="border h-28"></div>
//           ))}

//           {[...Array(daysInMonth)].map((_, i) => {
//             const dayNum = i + 1
//             return (
//               <div
//                 key={dayNum}
//                 className={`border p-1 text-sm relative h-28 ${
//                   isToday(dayNum) ? 'bg-blue-50 font-bold' : ''
//                 }`}
//               >
//                 <div className="absolute top-1 right-1 text-xs">{dayNum}</div>
//               </div>
//             )
//           })}
//         </div>
//       ) : (
//         <div className="overflow-y-scroll flex-1">
//           {/* Week Days Header */}
//           <div className="grid grid-cols-8 sticky top-0 bg-white z-10 border-b">
//             <div className="border-r px-2 py-2"></div>
//             {weekDays.map((day, i) => (
//               <div
//                 key={i}
//                 className="border-r px-2 py-2 text-sm font-semibold bg-gray-100 text-center"
//               >
//                 {day}
//               </div>
//             ))}
//           </div>

//           {/* Time Grid */}
//           {timeSlots.map((time, i) => (
//             <div key={i} className="grid grid-cols-8 border-b h-16">
//               <div className="text-right pr-2 text-xs pt-2 border-r">{time}</div>
//               {[...Array(7)].map((_, j) => (
//                 <div key={j} className="border-r relative">
//                   {/* Optional: render event blocks here */}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Calendar

