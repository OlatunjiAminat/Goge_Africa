import React from 'react';
import Logo from "../assets/Logo1.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faFacebook,  faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='mt-24'>
        <div className='bg-gray-rgba  text-white md:flex justify-around '>

            <div className='mt-12 '>
                <img src={Logo} alt="logo" className="w-20 text-deep-orange-rgba pl-4" />
                <p className='pl-4 text-sm md:max-w-xs'>Semaj Africa is an online education that delivers video courses programs and resources</p>
                <div className=' flex  pl-4 mt-4 mb-8'>
                    <Link to="#" className='mr-4 bg-blue-900 rounded-full p-1'><FontAwesomeIcon icon={faTwitter} /></Link> 
                    <Link to="#" className='mr-4 bg-blue-400 rounded-full p-1'><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link to="#" className='mr-4 bg-red-800 rounded-full p-1'><FontAwesomeIcon icon={faInstagram} /></Link> 
                    <Link to="#" className='mr-4 bg-pink-700 rounded-full p-1'><FontAwesomeIcon icon={faYoutube} /></Link>
                </div><hr className='bg-white md:hidden'/>
            </div>

            <div className='mb-8'>
                <h2 className='pl-4 font-semibold mt-5'>QuickLinks</h2>
                <Link to="#" className='block pl-4 text-sm mt-4'>Home</Link>
                <Link to="#" className='block pl-4 text-sm mt-4'>Courses</Link>
                <Link to="#" className='block pl-4 text-sm mt-4'>About Us</Link>
                <Link to="#" className='block pl-4 text-sm mt-4'>Contact Us</Link>
                <Link to="#" className='block pl-4 text-sm mt-4'>Become A Contributor</Link>
            </div><hr className='bg-white'/>

            <div className='mb-8'>
                <h2 className='pl-4 font-semibold mt-5'>Contact Us</h2>
                <p className='pl-4 text-sm mt-4'>(+55)254, 254, 254</p>
                <p className='pl-4 text-sm mt-4'>Info@Isemajafrica.com</p>
                <p className='pl-4 text-sm mt-4'>Helios Tower 75 Tam Trinh Hoang</p>
                <p className='pl-4 text-sm mt-4'>Mai-Ha Noi-viet Nam</p>
            </div><hr className='bg-white'/>

            <div className='mb-8'>
                <h2 className='pl-4 font-semibold mt-5'>Terms and Conditions</h2>
                <p className='pl-4 text-sm mt-4'>FAQ</p>
                <p className='pl-4 text-sm mt-4'>Privacy Policy</p>
                <p className='pl-4 text-sm mt-4'>Site Credit</p>
            </div><hr className='bg-white '/>
        </div>

        <div className='bg-black text-white pl-4 pb-10 pt-4'>
            <p className='text-xs'>All Right Reserved GOGE AFRICA 2019</p>
        </div>
    </div>
  )
}

export default Footer