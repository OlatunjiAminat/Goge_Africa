import React from 'react'
import Logo2 from "../../assets/Logo2.png";
import SignIn1 from "../../assets/signin3.png"
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup"



const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;

// const onSubmit = async (values, actions) => {
//     await new Promise((resolve) => 
//         setTimeout(resolve, 2000));
//     actions.resetForm();
// };


function FormSection() {
const router = useNavigate()
const onSubmit  = async (values, actions) => {
    router("/")
}


    const {values, errors, handleChange, handleSubmit, handleBlur, touched, isSubmitting } = useFormik({
        initialValues: {
            fullName:"",
            password:""
        },
        validationSchema: yup.object().shape({
            fullName: yup.string().max(25, "Your full name must not be more than 25 characters or less").required("Required"),
            password: yup.string().min(8).matches(passwordRules, {message: "must contain atleast one uppercase letter, one lowercase letter, one number and 1 special character"}).required("Required")
        }),
        onSubmit
    })
  return (
    <div className='md:flex justify-around items-center bg-normal-orange-rgba h-screen'>
        <div className='md:w-[50%]'>
            <div className='flex items-center justify-center'>
                <img src={Logo2} alt="logo" className='w-56 pb-6 mt-8' />
            </div>
            <div  className='flex items-center justify-center'>
                <p className='text-gray-400 text-xs'>Sign in to your account to continue</p>
            </div>
            <div className='flex items-center justify-center'>
                <form onSubmit={handleSubmit} action="/" method="">
                    <div>
                        <input value={values.fullName} onChange={handleChange} onBlur={handleBlur} type="text" id="fullName" placeholder='Full Name' name="fullName"  autoComplete="off" className='focus:outline-none  focus:ring-1 focus:ring-grey-100 mt-6 block border border-grey-500 rounded-full pl-3 py-2 mb-2 w-56 text-xs md:py-3 lg:w-80 lg:py-4' />
                        {touched.fullName && errors.fullName ? <p className='text-red-500 text-xs pb-5'>{errors.fullName}</p> : null}
                    </div>
                    <div>
                        <input value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" id="password"  placeholder='Password' className='block border border-grey-500 rounded-full pl-3 py-2 mb-2 w-56 text-xs md:py-3 lg:w-80 lg:py-4'/>
                        {touched.password && errors.password ? <p className='text-red-500 text-xs pb-5'>{errors.password}</p> : null}
                    </div>
                    <p className='text-xs my-4 text-center text-gray-400'>Don't have an account? <Link to="../pages/SignUp" className='text-light-orange-rgba text-xs '>Sign Up</Link></p>
                    <button disabled={isSubmitting} type="submit" className='bg-deep-orange-rgba text-white border rounded-full px-4 mb-16 text-xs md:w-48 py-3 lg:w-80 py-3'>Sign In</button>
                </form>
            </div>
        </div>
        <div className="hidden md:block md:max-w-[50%] background-image bg-center bg-no-repeat">
             <img src={SignIn1} alt="logo" className="h-[100%]" />
        </div>         
    </div>
    
  )
}

export default FormSection