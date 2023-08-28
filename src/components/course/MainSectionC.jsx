import React from 'react'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from 'react-router-hash-link'

function MainSectionC() {
  return (
    <div className='bg-gray-500'>
        <div className="sm: flex jusify-around flex justify-between">
            <div className="pt-10 hidden sm:block">
                <HashLink smooth to="/#All-courses" className="sm:text-xs text-white">
                    <FontAwesomeIcon icon={faArrowLeft}  className="sm:text-xs text-light-orange-rgba mr-3 " />Courses
                </HashLink>
            </div>
        </div>
    </div>
  )
}

export default MainSectionC