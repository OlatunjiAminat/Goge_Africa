import React from 'react'
import contact1 from '../../assets/contactPage-img.png'

function MainSectionA() {
  return (
    <div className=' mt-0 font-sans md:flex justify-around'>
    <div className='text-deep-orange-rgba pt-4'>
        <h1 className='mb-4 mt-10 leading-relaxed max-w-sm pl-6 font-bold text-xl tracking-wider md:text-2xl md:pl-12 md:mt-12 leading-loose lg:mt-16 lg:pl-16'>24Hrs On Deck Customer Support</h1>
        <p className='pl-6 mb-8 text-xs text-grey-rgba leading-loose lg:max-w-xs md:pl-12 lg:leading-loose lg:mt-12 lg:pl-16'>We are at your call.We serve you always.</p>
    </div>
    <div>
        <img src={contact1} alt='female and male'  className='pb-8'/>
    </div>
</div>
  )
}

export default MainSectionA