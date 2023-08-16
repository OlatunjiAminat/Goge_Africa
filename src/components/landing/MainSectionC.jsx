import React from 'react'
import student from "../../assets/student-group.png"

function MainSectionC() {
  return (
    <div>
        <div className='mt-10 md:flex justify-around items-center px-[10%]'>
            <div className='text-deep-orange-rgba leading-loose mx-10'>
                <p className='font-extrabold md:max-w-[85%] leading-loose lg:max-w-[75%] xl:max-w-[50%]'>Success Stories From Our Students Worldwide!</p>
                <div>
                    <p className='text-gray-600 text-[8px] font-light lg:text-[11px] mt-3 mb-5 md:max-w-[80%]'>Semaj Africa is an online education platform that delivers video courses, programs and resources for Individuals,Advertising & Media Specialist, Online Marketing Professionals, Freelancer and anyone looking to pursue a career in digital marketing, Accounting, Web development,Programming,Multimedia and CAD design.</p>
                </div>
                <div className='mb-8'>
                    <button className='text-white bg-deep-orange-rgba rounded-full px-5 py-1'>Discover</button>
                </div>
            </div>
            <div className='mr-32'>
                <img src={student} alt="group of student" className='mx-[25%] md:h-[300px] w-[1300px]'  />
            </div>
        </div>
        
    </div>
  )
}

export default MainSectionC