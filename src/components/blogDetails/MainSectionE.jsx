import React from 'react'

function MainSectionE() {
  return (
    <div className='text-grey-rgba px-6 md:px-12 lg:max-w-4xl lg:mx-auto lg:px-16 xl:px-20'>
        <div className='text-grey-rgba font-bold text-xl mt-20 mb-4 '>
            <h1>Leave A Comment</h1>
        </div>
        <div  className=''>
            <p className='text-xs'>Your email address will not be published.Required fields are marked</p>
        </div>

        <div className=''>
            <form action="https://getform.io/f/1e3fb990-41e9-409e-9a8a-f3d0516627fd" method="POST">
                <div className='md:flex items-center'>
                    <input type="text" placeholder='Name' name="Name" required className=' mt-6 block border border-grey-500 rounded-full pl-3 py-2 mb-4 w-56 text-xs md:py-2 md:mr-8 lg:w-64 lg:py-3 bg-orange-rgba' />
                    <input type="email" placeholder='Email' name="email" autoComplete="off" required className=' focus:outline-none focus:ring-1 focus:ring-grey-100  block border border-grey-500 rounded-full mt-5 pl-3 py-2 mb-2 w-56 text-xs md:h-10 lg:w-64 bg-orange-rgba' />
                </div>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Your Comments" className='block border border-grey-500 rounded-lg mt-6 pl-3 py-1 mb-4 text-xs md:py-2 lg:w-64 lg:py-3 bg-orange-rgba'></textarea>
                <button className='bg-deep-orange-rgba text-white border rounded-full px-8 py-3 text-xs mt-4 '>Send</button>
            </form>
        </div>

    </div>
  )
}

export default MainSectionE