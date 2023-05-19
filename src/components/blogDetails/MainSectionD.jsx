import React from 'react'
import SignIn from "../../assets/signin.jpeg"
import Signup from "../../assets/signup.jpeg"
import blog1 from '../../assets/blogPage-img.png'


function MainSectionD() {
  return (
    <div className='text-grey-rgba px-6 md:px-12 lg:max-w-4xl lg:mx-auto lg:px-16 xl:px-20'>
        <div className='text-grey-rgba font-bold text-xl '>
            <p>4 Comments</p>
        </div>
        <div className='border-2 rounded  border-grey-200 mt-6 py-6 flex md:flex justify-around'>
            <div className='px-4'>
                <img src={SignIn} alt="logo" className="w-16 h-12 rounded-full" />
            </div>
            <div className='text-[6px] px-4 leading-loose max-w-xs md:text-[8px] '>
                <p>"With your budget in mind,it is easy to plan a chartered yatch vacation.Companies often have a fleet of sailing vessels that can accommodate parties of various sizes."</p>
                <p className='text-gray-400 mt-4'>35 mins ago, 15 November 2019  <span className='text-grey-rgba font-bold text-[6px] pl-6 md:pl-16'>Reply</span></p>
            </div><hr />
        </div>

        <div className='border-2 border-t-0 -mt-4 border-grey-200 pt-8 pb-6 flex md:flex justify-around'>
            <div className='px-4'>
                <img src={blog1} alt="logo" className="w-16 h-12 rounded-full" />
            </div>
            <div className='text-[6px] px-4 leading-loose max-w-xs md:text-[8px]'>
                <p>"With your budget in mind,it is easy to plan a chartered yatch vacation.Companies often have."</p>
                <p className='text-gray-400 mt-4'>35 mins ago, 15 November 2019  <span className='text-grey-rgba font-bold text-[6px] pl-6 md:pl-16'>Reply</span></p>
            </div><hr />
        </div>

        <div className='border-2 border-t-0 rounded-b -mt-4 border-grey-200 pt-8 pb-6 flex md:flex justify-around'>
            <div className='px-4'>
                <img src={Signup} alt="logo" className="w-16 h-12 rounded-full" />
            </div>
            <div className='text-[6px] px-4 leading-loose max-w-xs md:text-[8px]'>
                <p>"With your budget in mind,it is easy to plan a chartered yatch vacation.Companies often have a fleet of sailing vessels that can accommodate parties of various sizes."</p>
                <p className='text-gray-400 mt-4'>35 mins ago, 15 November 2019  <span className='text-grey-rgba font-bold text-[6px] pl-6 md:pl-16'>Reply</span></p>
            </div><hr />
        </div>


    </div>
  )
}

export default MainSectionD