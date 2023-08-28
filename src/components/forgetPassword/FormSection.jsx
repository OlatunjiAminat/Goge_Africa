import React from 'react'
import Logo2 from "../../assets/Logo2.png";
import SignIn1 from "../../assets/signin1.png"
import { Link } from "react-router-dom";

function FormSection() {
  return (
    <div className='md:flex justify-around items-center bg-normal-orange-rgba h-screen'>
        <div className='md:w-[50%]'>
            <div className='flex items-center justify-center'>
                <img src={Logo2} alt="logo" className='w-56 pb-6 mt-8' />
            </div>
            <div  className='flex items-center justify-center'>
                <p className='text-gray-400 text-xs'>Ok, let's fetch you ya' login details</p>
            </div>
            <div className='flex items-center justify-center'>
                <form action="https://getform.io/f/1e3fb990-41e9-409e-9a8a-f3d0516627fd" method="POST">
                    <input type="email" placeholder='Email Address' name="email" autoComplete="off" required className=' focus:outline-none focus:ring-1 focus:ring-grey-100  block border border-grey-500 rounded-full pl-3 py-2 mb-2 w-56 text-xs md:py-3 lg:w-80 lg:py-4' />
                    <p className='text-xs my-4 text-center text-gray-400'>Don't have an account? <Link to="../pages/SignUp" className='text-light-orange-rgba text-xs '>Back to Sign Up</Link></p>
                    <button className='bg-deep-orange-rgba text-white border rounded-full px-4 mb-16 text-xs md:w-48 py-3 lg:w-80 py-3'>Proceed</button>
                </form>
            </div>
        </div>
        <div className="hidden md:block md:max-w-[50%]">
             <img src={SignIn1} alt="logo" className="h-[100%]" />
        </div>         
    </div>
  )
}

export default FormSection