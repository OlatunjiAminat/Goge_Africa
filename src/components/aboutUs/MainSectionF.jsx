import React from 'react'
import icon4 from "../../assets/icon4.png"
import icon3 from "../../assets/icon3.png"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"


function MainSectionF() {
  return (
    <div className='bg-deep-orange-rgba pt-10 pb-16 mt-20 -mb-16 md:flex justify-around' >
        <div className='text-white text-xs text-center'>
            <div className=''>
                <img src={icon4} alt="student-icon"  className='w-[50px] mx-auto'/>
            </div>
            <h1 className='font-extrabold mt-3 mb-1' >5679</h1>
            <p className='mx-auto'>Registered Students</p>
        </div>
        <div className='text-white text-xs text-center'>
            <div >
                <img src={icon3} alt="student-icon"  className='w-[50px] mx-auto'/>
            </div>
            <h1 className='font-extrabold mt-3 mb-1' >2,679</h1>
            <p className='w-40 mx-auto'>Students has been helped to achieve their dreams</p>
        </div>
        <div className='text-white text-xs text-center'>
            <div>
                <img src={icon1} alt="student-icon"  className='w-[50px] mx-auto'/>
            </div>
            <h1 className='font-extrabold mt-3 mb-1' >10,000</h1>
            <p className='w-40 mx-auto'>More than 10,000 people visit our site monthly</p>
        </div>
        <div className='text-white text-xs text-center'>
            <div>
                <img src={icon2} alt="student-icon"  className='w-[50px] mx-auto'/>
            </div>
            <h1 className='font-extrabold mt-3' >#10</h1>
            <p className='w-40 mx-auto md:w-48'>Ranked among the top 10 growing online learning startups in west Africa</p>
        </div>
    </div>
  )
}

export default MainSectionF