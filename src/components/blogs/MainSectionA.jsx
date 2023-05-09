import React from 'react'
import blog1 from '../../assets/blogPage-img.png'

function MainSectionA() {
  return (
    <div>
         <div className=' mt-6 font-sans md:flex justify-around'>
        <div className='text-deep-orange-rgba pt-8'>
            <h1 className='mb-4 mt-10 leading-relaxed max-w-sm pl-6 font-bold text-xl tracking-wider md:text-2xl md:pl-12 md:mt-12 leading-loose lg:mt-16 lg:pl-16'>Welcome to Our Forever Updated Blog Post!</h1>
            <p className='pl-6 mb-8 text-xs text-grey-rgba leading-loose lg:max-w-xs md:pl-12 lg:leading-loose lg:mt-12 lg:pl-16'>Be informed! Never miss a single post</p>
        </div>
        <div>
            <img src={blog1} alt='female and male'  className='pb-8'/>
        </div>
    </div>
    </div>
  )
}

export default MainSectionA