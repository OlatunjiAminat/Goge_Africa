import React from 'react'
import { Link } from 'react-router-dom';

function MainSectionE() {
  return (
<div className='bg-deep-orange-rgba pt-8 pb-6'>
    <div className='max-w-[50%] mx-[25%] bg-deep-orange-rgba text-white text-xs text-center md:flex justify-around items-center'>
        <div className='pb-2'>
            <Link to="/pages/Course">Overview</Link>
        </div>
        <div className='pb-2'>
            <Link to="/pages/Course">Transcript</Link>
        </div>
        <div className='pb-2'>
            <Link to="../pages/CourseDetails">Offline Packages</Link>
        </div>
        <div className='pb-2'>
            <Link to="../pages/CourseExercise">Exercise Files</Link>
        </div>
    </div>
</div>
    
  )
}

export default MainSectionE