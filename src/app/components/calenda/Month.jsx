import React, { useState } from 'react'

const shortWeekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const Month = () => {

    const [date, setDate] = useState(new Date())

    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    const firstDayOfMonth = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const isToday = (d) =>
    d === new Date().getDate() &&
    month === new Date().getMonth() &&
    year === new Date().getFullYear()

  return (
     <div 
    //  className=" grid grid-cols-7 flex-1"
    className='flex-1 grid grid-cols-7 auto-rows-fr'
     > 
           {shortWeekDays.map((day, idx) => ( 
            <div 
              key={idx} 
               className="border text-center font-semibold py-2 bg-gray-100 text-sm" 
             >
               {day} 
             </div> 
           ))} 

         {[...Array(firstDayOfMonth)].map((_, idx) => ( 
             <div key={`empty-${idx}`} className="border h-28"></div> 
           ))} 

           {[...Array(daysInMonth)].map((_, i) => { 
             const dayNum = i + 1 
             return ( 
               <div 
                 key={dayNum} 
                 className={`border p-1 text-sm relative h-28 ${ 
                  isToday(dayNum) ? 'bg-blue-50 font-bold' : '' 
                 }`} 
               > 
                 <div className="absolute top-1 right-1 text-xs">{dayNum}</div> 
              </div> 
             ) 
           })} 
         </div>
  )
}

export default Month