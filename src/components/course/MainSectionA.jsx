import React from 'react'

function MainSectionA() {
  return (
    <div className='bg-deep-orange-rgba font-sans flex justify-center pt-16 pb-20 text-center'>
        <div className=''>
            <p className='text-white'>You can either enrol for this course to gain access and also to the material being <br />attached to it online only or you can add to cart for checkout to view offline</p>
            <div>
              <button className='border py-2 px-5 rounded-full mr-6 mt-10 bg-white text-light-orange-rgba text-xl'>Become Premium</button>
              <button  className='border py-2 px-6 rounded-full mr-6 mt-8  bg-white text-light-orange-rgba text-lg'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default MainSectionA