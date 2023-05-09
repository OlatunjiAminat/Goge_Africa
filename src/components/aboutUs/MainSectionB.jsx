import React from 'react'
import about2 from '../../assets/about-us-image2.png'

function MainSectionB() {
  return (
    <div className=' mt-12 font-sans md:flex justify-around md: mt-16'>
        <div className='text-deep-orange-rgba pt-4 md:order-2 md:mt-8 md:mr-10'>
            <p className='pl-6 leading-loose md:pl-12 lg:pl-4'>We're a Team</p>
            <p className='pl-6 md:pl-12 lg:pl-4'>We're a Family</p>
            <h1 className='mb-4  leading-loose max-w-sm pl-6 font-bold text-xl tracking-wider md:text-2xl md:pl-12 md:leading-loose  lg:pl-4'>We're Goge Africa!</h1>
            <p className='pl-6 mb-8 text-xs max-w-sm text-grey-rgba leading-loose md:pl-12 lg:max-w-xs lg:leading-loose lg:pl-4'>Semaj Africa is an online education platform that delivers video courses,programs and resources for Individuals, Advertising & Media Specialist, Online Marketing Professionals,Freelancer and anyone looking to pursue a career in Digital Marketing, Accounting, web development,Programming,Multi-media and CAD design</p>
            <button className='rounded-full bg-deep-orange-rgba text-white px-4 py-2 ml-8 md:ml-12 lg:ml-8'>Say Hello</button>
        </div>
        <div>
            <img src={about2} alt='female and male'  className='pb-8'/>
        </div>
    </div>
  )
}

export default MainSectionB