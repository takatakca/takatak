"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MdSearch } from "react-icons/md";
import { IoIosArchive } from "react-icons/io";


const course = [
  {
    id: 1,
    title: "Type",
    choose1: "Online (0)",
    choose2: "In class (0)",
    choose3: "Hybrid (0)",
  },
  {
    id: 2,
    title: "Progress",
    choose1: "Upcoming Courses (0)",
    choose2: "Ongoing Courses (0)",
    choose3: "Completed Courses (0)",
    choose4: "Ending Soon (0)",
    choose5: "Expired (0)",
  },
  {
    id: 3,
    title: "Others",
    choose1: "Assigned Courses (0)",
    choose2: "Personal Courses (0)",
    choose3: "Certificates (0)",
    choose4: "Badges (0)",
    choose5: "Abandoned (0)",
    choose6: "Archived (0)",
  },
];

const cards = [
  {
    id: 1,
    img: "/img/catalogfr.jpg",
    title: "Course A",
    level: "0 % completed",
    slug: "course-a",
  },
  {
    id: 2,
    img: "/img/thumbnail.jpg",
    title: "Course B",
    level: "100 % completed",
    date: "05/05/2025",
    slug: "course-b",
  },
  {
    id: 3,
    img: "/img/catalogfr.jpg",
    title: "Course C",
    level: "50 % completed",
    date: "08/05/2025",
    slug: "course-c",
  },
];


const Activities = ({ card }) => {
  const router = useRouter();
     const [bouncingCardId, setBouncingCardId] = useState(null);
  
    const handleClick = (slug, id) => {
    setBouncingCardId(id);
    setTimeout(() => {
      router.push(`/university/${slug}`);
    }, 600);
  };

  return (
    <div className='w-full shadow pag'>
          <div className="flex flex-col gap-[30px]">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 p-4 shadow border rounded-md">
              <input type="text" placeholder="Search an activity" className="w-full md:w-auto flex-1 rounded-md inp" />
              <MdSearch className="text-2xl text-gray-600" />
            </div>

            {/* Courses */}
            <div className="flex flex-col gap-y-6">
              {course.map((cours) => (
                <div key={cours.id} className="space-y-2 flex items-start">
                  <h2 className="text-lg font-semibold min-w-[100px]">{cours.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(cours)
                      .filter(([key]) => key.startsWith('choose'))
                      .map(([key, value]) => (
                        <span
                          key={key}
                          className="bg-white hover:bg-black hover:text-white text-blue-500 shadow text-[13px] font-bold w-[11vw] rounded-full h-[40px] flex items-center justify-center"
                        >
                          {value}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Archived Toggle */}
            <label htmlFor="archived" className="flex gap-2 items-center mt-4">
              <input type="checkbox" id="archived" className="w-5 h-5 accent-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-400 transition duration-200" />
              <p className="text-sm text-gray-700 font-medium">Display archived courses</p>
            </label>

            {/* line through */}
            <div className='lin'><hr className='text-[#b7afaf]' /></div>
          </div>

           {/* Course Cards */}
          <div>
            {cards.map((card) => {
              // Extract numeric percentage from the "level" string
              const percent = parseInt(card.level) || 0; // "50 % completed" => 50
              return (
                <div key={card.id} className='flex flex-col'>
                  <div className="flex flex-col md:flex-row items-start gap-4 p-4 justify-between">
                    <div className='flex gap-[20px]'>
                      <Image src={card.img} width={300} height={400} alt='' />
                      <div>
                        <h3 className="font-bold text-base w-[35vw]">{card.title}</h3>
                        <div className="text-sm text-gray-500">Completed on : {card.date}</div>
                        <div className="text-sm text-gray-500">{card.level}</div>
                        <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${percent}%` }} />
                        </div>
                      </div>
                    </div>
                    <div className='flex gap-[20px] items-center'>
                      {/* <Link href={`/university/${card.slug}`} passHref> */}
                      <button
                    onClick={() => handleClick(card.slug, card.id)}
                    className={`access ${bouncingCardId === card.id ? "animate-bounce" : ""}`}
                  >Access</button>
      {/* </Link> */}
                      <IoIosArchive />
                    </div>
                  </div>
                  <div className='cardspc'><hr /></div>
                </div>
              );
            })}
          </div>
        </div>
  )
}

export default Activities