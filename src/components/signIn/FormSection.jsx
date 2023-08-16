import React from 'react'
import Logo from "../../assets/Logo1.png";
import SignIn from "../../assets/signin.jpeg"
import { Link } from "react-router-dom";


function FormSection() {
  return (
    <div className='md:flex justify-center items-center bg-normal-orange-rgba'>
        <div className='bg-normal-orange-rgba'>
            <div className='flex items-center justify-center'>
                <img src={Logo} alt="logo" className='lg:-mt-64' />
            </div>
            <div  className='flex items-center justify-center -mt-16 md:-mt-20 lg:-mt-32'>
                <p className='text-gray-400 text-xs'>Sign in to your account to continue</p>
            </div>
            <div className='flex items-center justify-center'>
                <form action="https://getform.io/f/1e3fb990-41e9-409e-9a8a-f3d0516627fd" method="POST">
                    <input type="text" placeholder='Full Name' name="fName"  autoComplete="off" required className='focus:outline-none  focus:ring-1 focus:ring-grey-100 mt-6 block border border-grey-500 rounded-full pl-3 py-2 mb-2 w-56 text-xs md:py-3 lg:w-64 lg:py-4' />
                    <input type="password"  placeholder='Password' className='block border border-grey-500 rounded-full pl-3 py-2 mb-2 w-56 text-xs md:py-3 lg:w-64 lg:py-4'/>
                    <p className='text-xs my-4 text-right text-gray-400'>Don't have an account?<Link to="../pages/SignUp" className='text-light-orange-rgba text-xs '>Sign Up</Link></p>
                    <button className='bg-deep-orange-rgba text-white border rounded-full px-4 mb-16 text-xs md:w-48 py-3 lg:w-56 py-3'>Sign In</button>
                </form>
            </div>
        </div>
        <div className="hidden md:block">
             <img src={SignIn} alt="logo" className="" />
        </div>         
    </div>
    
  )
}

export default FormSection