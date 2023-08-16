import React from 'react'
import passport from "../../assets/passport.jpeg"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faFacebook,  faInstagram} from '@fortawesome/free-brands-svg-icons'


function MainSectionF() {
  return (
    <div className='md:w-[150px]  text-center border-2 mt-6 mx-2 rounded text-gray-500 md:ml-5'>
        <div className='text-deep-orange-rgba my-3'>
            <h2 className='font-medium'>Instructor</h2>
        </div>
        <div className='flex justify-center items-center'>
            <img src={passport} alt='male-passport' className='w-16 h-20 border rounded-full'/>
        </div>
        <div>
            <p className='my-3'>Bosun James</p>
            <p className='text-xs mb-6'>Bosun James is a senior design specialist at Invision.He also teaches user experience design on weekly basis to the community and also has piloted UX design programs for middle schools</p>
        </div>
        <div className='mb-8'>
            <Link to="#" className='mr-1 bg-blue-900 rounded-full p-1'><FontAwesomeIcon icon={faTwitter} /></Link> 
            <Link to="#" className='mr-1 bg-blue-400 rounded-full p-1'><FontAwesomeIcon icon={faFacebook} /></Link>
            <Link to="#" className='mr-1 bg-red-800 rounded-full p-1'><FontAwesomeIcon icon={faInstagram} /></Link> 
        </div>
    </div>
  )
}

export default MainSectionF