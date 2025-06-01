'use client'

import React, { useState } from 'react'
import { PiLessThanThin, PiGreaterThanThin } from "react-icons/pi";
import { IoMdCalendar, IoIosList } from "react-icons/io";
import { LiaAngleDownSolid } from "react-icons/lia";
import Month from './calenda/Month';
import Week from './calenda/Week';


const Calendar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const [view, setView] = useState('month')
  const [date, setDate] = useState(new Date())

  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

 

  const prevMonth = () => setDate(new Date(year, month - 1, 1))
  const nextMonth = () => setDate(new Date(year, month + 1, 1))

  const isToday = (d) =>
    d === new Date().getDate() &&
    month === new Date().getMonth() &&
    year === new Date().getFullYear()

  const formattedHeader =
    view === 'month'
      ? new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date)
      : getWeekRange(date)

  function getWeekRange(date) {
    const start = new Date(date)
    start.setDate(date.getDate() - date.getDay())

    const end = new Date(start)
    end.setDate(start.getDate() + 6)

    const startStr = `${start.getDate()}`
    const endStr = `${end.getDate()} ${end.toLocaleString('default', {
      month: 'long',
    })} ${end.getFullYear()}`

    return `${startStr}-${endStr}`
  }

  return (
    <div 
    className='callen w-full flex-1 flex flex-col bg-white'
    // className="callen w-full h-screen flex flex-col bg-white"
    >
      {/* Header */}
      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-4 items-center">
          <h2 className="text-[18px] font-medium">Calendar of events</h2>
          <button className="text-[#0c0c79] font-medium flex items-center gap-[5px]"><IoMdCalendar /> Calendar</button>
          <button className="text-gray-700 font-medium flex items-center gap-[5px]"><IoIosList /> List</button>
        </div>

        <div className='topcal flex justify-between'>
          <div className="flex items-center">
          <button className='back' onClick={prevMonth}><PiLessThanThin /></button>
          <span className="dat text-xl font-medium">{formattedHeader}</span>
          <button className='front' onClick={nextMonth}><PiGreaterThanThin /></button>
        </div>

        {/* Desktop: Horizontal buttons */}
        <div className="hidden lg:flex border border-gray-300 rounded overflow-hidden">
          <button
            onClick={() => setView('week')}
            className={`wek ${view === 'week' ? 'bg-gray-200 font-semibold' : ''}`}
          >
            Week
          </button>
          <button
            onClick={() => setView('month')}
            className={`mon ${view === 'month' ? 'bg-gray-200 font-semibold' : ''}`}
          >
            Month
          </button>
        </div>

              {/* Mobile: Toggle dropdown */}
      <div className="lg:hidden ">
        <button
          onClick={() => setShowOptions(!showOptions)}
          className=' border border-gray-300 bg-[#dcdbdb] rounded btt'
        >
          <LiaAngleDownSolid />
        </button>

        {showOptions && (
          <div className="mnu  absolute right-[30px] mt-2 bg-white border border-gray-200 rounded shadow z-[20]">
            <button
              onClick={() => {
                setView('week');
                setShowOptions(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Week
            </button>
            <button
              onClick={() => {
                setView('month');
                setShowOptions(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Month
            </button>
          </div>
        )}
      </div>

        
        </div>
      </div>

      {/* View Content */}
      {view === 'month' ? ( 

        <div className='flex flex-col min-h-screen'>  
          {/* Month Calendar */}
          <Month />
        </div>
       ) : ( 
        <div>
          {/* time of week */}
          <Week />
        </div>
      )}
    </div>

  )
}
export default Calendar