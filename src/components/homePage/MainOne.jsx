import React from 'react'
import home from "../../assets/home-page-image.png"


function MainOne() {
  return (
    <div className='bg-deep-orange-rgba mt-6 font-sans md:flex justify-around md:mt-0'>
        <div className='text-white pt-4'>
            <h1 className='mb-10 mt-12 leading-loose max-w-sm px-6 font-bold text-xl tracking-wider md:text-3xl leading-loose'>Browse Thousands Of Our Video Tutorial Curated Only For You</h1>
            <p className='px-6 mb-6 text-xs leading-loose lg:max-w-xs lg:leading-loose'>Access all tutorials and resources when you become a premium member of <span className='font-bold'>Semaj Africa</span>.</p>
        </div>
        <div>
            <img src={home} alt='female'  className='pb-8'/>
        </div>
    </div>
  )
}

export default MainOne