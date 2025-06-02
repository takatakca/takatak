import React from 'react'

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const timeSlots = Array.from({ length: 18 }, (_, i) => `${i + 5}:00 PM`)

const Week = () => {
  return (
    <div className="overflow-y-scroll flex-1 "> 
          {/* Week Days Header */}
           <div className="grid grid-cols-8 sticky top-0 bg-white z-10 border-b"> 
             <div className="border-r px-2 py-2"></div> 
           {weekDays.map((day, i) => ( 
               <div 
                key={i} 
                className="border-r px-2 py-2 text-[10px] lg:text-sm font-semibold bg-gray-100 text-center" 
               > 
                 {day} 
               </div> 
            ))} 
           </div> 

          {/* Time Grid */}
           {timeSlots.map((time, i) => ( 
             <div key={i} className="grid grid-cols-8 border-b h-16"> 
              <div className="text-right pr-2 text-xs pt-2 border-r">{time}</div> 
               {[...Array(7)].map((_, j) => ( 
                 <div key={j} className="border-r relative"> 
                  {/* Optional: render event blocks here */}
                </div> 
               ))} 
             </div> 
           ))} 
         </div>
  )
}

export default Week