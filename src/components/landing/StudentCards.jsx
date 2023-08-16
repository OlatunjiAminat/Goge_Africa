import React from 'react'
import passport from "../../assets/passport.jpeg"

function StudentCards() {
  return (
    <div className='mx-auto hover:shadow-[0px_35px_60px_-15px_rgba(0,0,0,0.3)] mt-8 mb-10 text-gray-600 text-xs border rounded-lg  px-6 leading-normal w-[300px] md:leading-loose'>
        <div>
            <h2 className='font-extrabold text-gray-800 text-xl mt-3'>"</h2>
        </div>
        <div>
            <p>Semaj Africa is an online education platform that delivers video courses, programs and resources for Individuals,Advertising & Media Specialist, Online Marketing Professionals, Freelancer and anyone.</p>
        </div>
        <div className='flex justify-center mt-8'>
            <div>
                <img src={passport} alt="student"  className='w-[25px] border-2 rounded-[50%] mr-7 mt-0 '/>
            </div>
            <div className='mb-5'>
                <h3 className='font-extrabold'>Arthur Brokly</h3>
                <p className='text-[8px]'>Categoried:3D Modelling</p>
            </div>
        </div>
        
    </div>
  )
}

export default StudentCards