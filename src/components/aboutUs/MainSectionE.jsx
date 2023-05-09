import React from 'react'
import about5 from '../../assets/let-build-image.png'

function MainSectionE() {
  return (
    <div className='bg-deep-orange-rgba font-sans md:flex justify-around'>
        <div className='text-white pt-12 md:mt-8 md:mr-10'>
            <h1 className='mb-4  leading-loose max-w-sm pl-6 font-bold text-xl tracking-wider md:text-2xl md:pl-12 md:leading-loose lg:text-3xl lg:pl-12'>Let's Build Something Great Together</h1>
            <p className='pl-6 mb-8 text-xs max-w-xm  leading-loose md:pl-12 lg:max-w-xs lg:leading-loose lg:pl-12'>Semaj Africa is an online education platform that delivers video courses,programs and resources for Individuals.</p>
            <button className='rounded-full bg-white text-deep-orange-rgba px-4 py-2 mb-8 ml-8 md:ml-12 lg:ml-14'>Let's Talk!</button>
        </div>
        <div>
            <img src={about5} alt='female and male'  className='pb-8'/>
        </div>
</div>
   
  )
}

export default MainSectionE
