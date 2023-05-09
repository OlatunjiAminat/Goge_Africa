import React from 'react'
import about3 from '../../assets/about-us-image3.png'

function MainSectionC() {
  return (
    <div className=' mt-12 font-sans md:flex justify-around md: mt-16'>
        <div className='text-deep-orange-rgba pt-4 md:mt-24'>
            <p className='pl-6 md:pl-12 lg:pl-4'>Customer Insight</p>
            <h1 className='mb-4  leading-loose max-w-sm pl-6 font-bold text-xl tracking-wider md:text-2xl md:pl-12 md:leading-loose  lg:pl-4'>Professional Support</h1>
            <p className='pl-6 text-xs max-w-sm text-grey-rgba leading-loose md:pl-12 lg:max-w-xs lg:leading-loose lg:pl-4'>Semaj Africa is an online education platform that delivers video courses,programs and resources for Individuals, Advertising & Media Specialist, Online Marketing Professionals,Freelancer and anyone looking to pursue a career in Digital Marketing, Accounting, web development,Programming,Multi-media and CAD design</p>
        </div>
        <div>
            <img src={about3} alt='a female'  className='pb-8'/>
        </div>
    </div>
    
  )
}

export default MainSectionC