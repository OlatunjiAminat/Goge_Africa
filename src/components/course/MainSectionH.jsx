import React from 'react'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function MainSectionH() {
  return (
    <div className=''>
        <div className='text-deep-orange-rgba mt-10 mb-8 text-xs flex justify-center items-center md:flex justify-around'>
            <h2 className='font-medium '>Similar Courses</h2>
            <div className="">
                <Link to="/" className="hidden md:ml-40 text-xs md:block">
                    <FontAwesomeIcon icon={faArrowRight}  className="text-xs text-light-orange-rgba" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default MainSectionH