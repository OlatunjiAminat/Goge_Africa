import React from 'react'

function MainSectionK() {
  return (
    <div className='mx-[25%] mt-16 mb-4 font-sans flex justify-center items-center pt-16 pb-20 text-center border-[1px]'>
      <div className=''>
        <div className='text-deep-orange-rgba my-3 text-base'>
            <h3 className='font-medium'>Download Course For Offline Views</h3>
        </div>
        <div>
          <p className='text-gray-500 text-xs'>You can either enrol for this course to gain access and also to the material being <br />attached to it online only or you can add to cart for checkout to view offline</p>
        </div>
        <div className=''>
            <button className='border font-semibold py-3 px-6 rounded-full mr-6 mt-7 text-white bg-deep-orange-rgba text-xs'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default MainSectionK