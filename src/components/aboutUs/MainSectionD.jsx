import React from 'react'
import about4 from '../../assets/creative-team-image.png'

function MainSectionD() {
  return (
    <div className='bg-normal-orange-rgba pt-16 font-sans md:flex justify-around '>
        <div className='text-deep-orange-rgba pt-4 md:mt-24'>
            <h1 className='mb-4 leading-loose max-w-xs pl-6 font-bold text-xl tracking-wider md:text-2xl md:pl-12 md:leading-loose  lg:pl-4 lg:text-3xl'>Meet Our Creative Team</h1>
            <p className='pl-6 text-xs max-w-sm text-grey-rgba leading-loose md:pl-12 lg:max-w-xs lg:leading-loose lg:pl-4'>Semaj Africa is an online education platform that delivers video courses,programs and resources for Individuals, Advertising & Media Specialist, Online Marketing Professionals,Freelancer and anyone looking to pursue a career in Digital Marketing.</p>
        </div>
        <div>
            <img src={about4} alt='team of workers'  className='pb-8'/>
        </div>
</div>
   
    
  )
}

export default MainSectionD