import React from 'react'
import Logo2 from "../../assets/Logo2.png";
import Signup1 from "../../assets/signup1.png";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";

function FormSection() {
    const router = useNavigate()
    const onSubmit  = async (values, actions) => {
    router("/")
}
    const {values, errors, handleChange, handleSubmit, handleBlur, touched, isSubmitting } = useFormik({
        initialValues: {
            fullName:"",
            email:"",
            country:"",
            state:"",
            password:""
        },
        validationSchema: basicSchema,
        onSubmit
    })
  return (
    <div className='md:flex justify-around items-center bg-normal-orange-rgba h-screen'>
        <div className='md:w-[50%]'>
            <div className='flex items-center justify-center'>
                <img src={Logo2} alt="logo" className='w-56 pb-6 mt-8' />
            </div>
            <div  className='flex items-center justify-center'>
                <p className='text-gray-400 text-xs'>Please create a new account here</p>
            </div>    
            <div className='flex items-center justify-center'>
                <form onSubmit={handleSubmit} action="/" method="">
                    <div>
                        <input value={values.fullName} onChange={handleChange} onBlur={handleBlur} type="text" id="fullName" placeholder='Full Name' name="fullName"  autoComplete="off"  className='focus:outline-none  focus:ring-1 focus:ring-grey-100 mt-6 block border border-grey-500 rounded-full pl-3 py-2 mb-2 w-56 text-xs md:py-3 lg:w-80 lg:py-4' />
                        {touched.fullName && errors.fullName ? <p className='text-red-500 text-xs pb-5'>{errors.fullName}</p> : null}
                    </div>

                    <div>
                        <input  value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" id="email" placeholder='Email Address' name="email" autoComplete="off"  className='focus:outline-none focus:ring-1 focus:ring-grey-100  block border border-grey-500 rounded-full pl-3 py-2 mb-2 w-56 text-xs md:py-3 lg:w-80 lg:py-4' />
                        {touched.email && errors.email ? <p className='text-red-500 text-xs pb-5'>{errors.email}</p> : null}
                    </div>

                    <div>
                        <input value={values.country} onChange={handleChange} onBlur={handleBlur} type="text" id="country" placeholder='Country' name="country" autoComplete="off"   className='focus:outline-none focus:ring-1 focus:ring-grey-100 block border border-grey-500 rounded-full pl-3 py-2 mb-2 w-56 text-xs md:py-2 lg:w-80 lg:py-4'/>
                        {touched.country && errors.country ? <p  className='text-red-500 text-xs pb-5'>{errors.country}</p> : null}
                    </div>

                    <div>
                        <input value={values.state}  onChange={ handleChange} onBlur={handleBlur} type="text" id="state" placeholder='State' name="state" autoComplete="off"  className='focus:outline-none focus:ring-1 focus:ring-grey-100 block border border-grey-500 rounded-full pl-3 py-2 mb-2 w-56 text-xs md:py-2 lg:w-80 lg:py-3'/>
                        {touched.state && errors.state ? <p className='text-red-500 text-xs pb-5'>{errors.state}</p> : null}
                    </div>

                    <div>
                        <input  value={values.password}  onChange={handleChange} onBlur={handleBlur} type="password" id="password"  placeholder='Password' className='block border border-grey-500 rounded-full pl-3 py-2 mb-2 w-56 text-xs md:py-3 lg:w-80 lg:py-4'/>
                        {touched.password && errors.password ? <p className='text-red-500 text-xs pb-5'>{errors.password}</p> : null}
                    </div>

                    <p className='text-xs my-4 text-gray-400 text-center'>Already have an account? <Link to="../pages/SignIn" className='text-light-orange-rgba text-xs '>Sign In</Link></p>
                    <button disabled={isSubmitting} type="submit" className='bg-deep-orange-rgba text-white border rounded-full px-4 mb-16 text-xs md:w-48 py-3 lg:w-80 py-3 disabled:opacity-25'>Sign Up</button>
        
                </form>
            </div>
        </div> 
        <div className="hidden md:block md:max-w-[50%]">
             <img src={Signup1} alt="logo" className="h-[100%]" />
        </div> 
    </div>
  )
}

export default FormSection