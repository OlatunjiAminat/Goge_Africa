import React from 'react'
import blogDetail2 from '../../assets/blogDetailPage-image2.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faFacebook,  faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'


function MainSectonC() {
  return (
    <div className='text-xs text-grey-rgba px-6 md:px-12 lg:max-w-4xl lg:mx-auto lg:px-16 xl:px-20'>
        <div className='mb-10'>
            <h1 className="text-deep-orange-rgba mb-4 mt-16 leading-relaxed max-w-md font-bold text-xl tracking-wider md:text-xl md:mt-16 leading-loose lg:mt-24">Another sub-heading Information will be a perfect fit here.</h1>
        </div>
        <div className='mb-8 mt-12 md:mt-16'>
            <p className=''>Luxury is something everyone deserves from time to time.Such an indulgence can make a vacation a truly rejuvenating experience. One of the best ways to get the luxury of the rich and famous to fit into your budget can be yours through yatch charter companies.These companies specialize in creating custom sailing vacation that redefine travel.</p>
        </div>
        <div className='mb-8'>
            <p>Planning your luxury trip</p>
        </div>
        <div className='mb-16'>
            <p>With your budget in mind,it is easy to plan your chartered yatch vacation.Companies often have a fleet of sailing of sailing vessels that can accommodate parties of various sizes.You may want to make it a more intimate trip with only close family.There are charters that can be rented for as few as two people.</p>
        </div>
        <div className='bg-light-orange-rgba rounded-lg'>
            <img src={blogDetail2} alt="female and male" className="pb-16" />
        </div>
        <div className='mb-8 mt-12 md:mt-16'>
            <p className=''>Luxury is something everyone deserves from time to time.Such an indulgence can make a vacation a truly rejuvenating experience. One of the best ways to get the luxury of the rich and famous to fit into your budget can be yours through yatch charter companies.These companies specialize in creating custom sailing vacation that redefine travel.</p>
        </div>
        <div className='mb-8'>
            <p>Planning your luxury trip</p>
        </div>
        <div className='mb-10'>
            <p>With your budget in mind,it is easy to plan your chartered yatch vacation.Companies often have a fleet of sailing of sailing vessels that can accommodate parties of various sizes.You may want to make it a more intimate trip with only close family.There are charters that can be rented for as few as two people.</p>
        </div>
        <div className='md:flex justify-between items-center'>
            <div>
                <p>Tags: Technology,Design,Computer</p>
            </div>
            <div className=' flex  mt-8 mb-8'>Share with
                    <Link to="#" className='mx-4 bg-blue-900 rounded-full p-1'><FontAwesomeIcon icon={faTwitter} /></Link> 
                    <Link to="#" className='mr-4 bg-blue-400 rounded-full p-1'><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link to="#" className='mr-4 bg-red-800 rounded-full p-1'><FontAwesomeIcon icon={faInstagram} /></Link> 
                    <Link to="#" className='mr-4 bg-pink-700 rounded-full p-1'><FontAwesomeIcon icon={faYoutube} /></Link>
                </div>
        </div>
    </div>
  )
}

export default MainSectonC