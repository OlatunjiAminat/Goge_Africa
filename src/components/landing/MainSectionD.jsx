import React from 'react'
import { Link } from "react-router-dom";


function MainSectionD() {
  return (
    <div id="All-courses">
        <div className='text-deep-orange-rgba font-bold text-lg mt-16 mb-4 flex justify-center items-center'>
            <h3 className='text-[25px] mb-4'>Courses</h3>
        </div>
        <div className='max-w-[60%] mx-[20%] text-gray-600 text-xs text-center md:flex justify-around items-center '>
            <div className='mb-3 md:pr-5 hover:text-gray-700 hover:font-extrabold'>
                <Link to="#">All</Link>
            </div>
            <div className='mb-3 md:pr-5 hover:text-gray-700 hover:font-extrabold'>
                <Link to="../pages/Courses">Design</Link>
            </div>
            <div className='mb-3 md:pr-5 hover:text-gray-700 hover:font-extrabold'>
                <Link to="../pages/Courses">Web Development</Link>
            </div>
            <div className='mb-3 md:pr-5 hover:text-gray-700 hover:font-extrabold'>
                <Link to="../pages/Courses">Digital</Link>
            </div>
            <div className='mb-3 md:pr-5 hover:text-gray-700 hover:font-extrabold'>
                <Link to="../pages/Courses">Photography</Link>
            </div>
            <div className='mb-3 md:pr-5 hover:text-gray-700 hover:font-extrabold'>
                <Link to="../pages/Courses">Motion Graphics</Link>
            </div>
            <div className='mb-3 hover:text-gray-700 hover:font-extrabold'>
                <Link to="../pages/Courses">Digital Marketing</Link>
            </div>
        </div>
    </div>
  )
}

export default MainSectionD