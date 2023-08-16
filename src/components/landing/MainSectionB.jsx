import React from 'react'
import hand from "../../assets/hand.png"
import teacher from "../../assets/teacher.png"
import learn from "../../assets/learn.png"
import about from "../../assets/about-us-image2.png"

function MainSectionB() {
  return (
    <div className='pt-16 bg-normal-orange-rgba'>
        <div className='px-[20%] md:flex justify-center items-center md:px-[10%]'>
            <div className='mr-16 mb-8'>
                <div className='md:pl-7'>
                    <img src={hand} alt="access" className='w-[50px]' /> 
                </div>
                <h3 className='text-gray-600 font-bold text-xs '>Unlimited access</h3>
                <p className='text-gray-600 text-[8px] font-light lg:text-[11px]'>One subscription unlimited access</p>
            </div>
            <div className='mr-16 mb-8'>
                <div className='md:pl-7'>
                    <img src={teacher} alt="teacher" className='w-[50px]' />    
                </div>
                <h3 className='text-gray-600 font-bold text-xs'>Expert Teachers</h3>
                <p className='text-gray-600 text-[8px] font-light lg:text-[11px] xl:max-w-[70%]'>Learn from industry experts who are passionate about teaching</p>
            </div>
            <div className='mb-8'>
                <div className='md:pl-7'>
                    <img src={learn} alt="learn"  className='w-[50px]' />
                </div>
                <h3 className='text-gray-600 font-bold text-xs'>Learn Anywhere</h3>
                <p className='text-gray-600 text-[8px] font-light lg:text-[11px] xl:max-w-[70%]'>Switch between your computers,tablets, or mobile device</p>
            </div>
        </div>
        <div className='mt-10 md:flex justify-around items-center px-[10%]'>
            <div className='mr-32'>
                <img src={about} alt="people" className='mx-[25%] md:h-[500px] w-[1300px]'  />
            </div>
            <div className='text-deep-orange-rgba leading-loose mx-10'>
                <p className='font-light'>Learn A Skill.</p>
                <p className='font-light'>Build Your Portfolio.</p>
                <p className='font-extrabold mb-4'>Get Hired</p>
                <div>
                    <p className='text-gray-600 text-[8px] font-light lg:text-[11px] mb-5 md:max-w-[80%]'>Semaj Africa is an online education platform that delivers video courses, programs and resources for Individuals,Advertising & Media Specialist, Online Marketing Professionals, Freelancer and anyone looking to pursue a career in digital marketing, Accounting, Web development,Programming,Multimedia and CAD design.</p>
                </div>
                <div>
                    <button className='text-white bg-deep-orange-rgba rounded-full px-5 py-1 mb-16'>Discover</button>
                </div>

            </div>
        </div>
        


    </div>
      )
}

export default MainSectionB