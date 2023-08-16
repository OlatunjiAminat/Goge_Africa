import React from 'react'
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div className='text-grey-rgba text-sm mx-10'>
      <div>
        <h2 className='font-semibold mt-6 mb-16 md:-mt-6'>All Courses</h2>
      </div>
      <div  className='mb-16'>
        <Link to="../pages/Course">Web Development (2908)</Link>
      </div>
      <div  className='mb-16'>
        <Link to="../pages/Course">Design (11293)</Link>
      </div>
      <div  className='mb-16'>
        <Link to="../pages/Course">Photography (2230)</Link>
      </div>
      <div  className='mb-16'>
        <Link to="../pages/Course">3D Artist (9828)</Link>
      </div>
      <div  className='mb-16'>
        <Link to="../pages/Course">3Motion Graphics (8223)</Link>
      </div>
      <div  className='mb-16'>
        <Link to="../pages/Course">Software Engineer (1001)</Link>
      </div>
      <div  className='mb-16'>
        <Link to="../pages/Course">UI/UX Roadmap (734)</Link>
      </div>
      <div  className='mb-16'>
        <Link to="../pages/Course">Sound & Music(1223)</Link>
      </div>
      <div>
        <Link to="../pages/Course">Digital Marketing(382)</Link>
      </div>

      <h2 className='font-semibold mt-10'>Course Type</h2>
      <div className='mt-6'>
        <button className='border rounded-full px-3 py-3 mr-6'>Paid</button>
         <button className='border rounded-full px-3 py-3'>Free</button>
      </div>
      <div>
        <button className='border w-32 rounded-full bg-deep-orange-rgba text-white px-4 py-4 my-10'>Filter</button>
      </div>
    </div>
  )
}

export default Courses