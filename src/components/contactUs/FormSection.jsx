import React from 'react'

function FormSection() {
  return (
    <div>
        <div className='flex items-center justify-center mt-16 mb-3'>
            <h1 className='text-deep-orange-rgba'>Let's Talk</h1>
        </div>
        <div  className='flex items-center justify-center'>
            <p className='text-gray-400 text-xs pl-2'>We do normally get back within 48hrs.Please leave a message.</p>
        </div>
        <div className='flex items-center justify-center'>
            <form action="https://getform.io/f/1e3fb990-41e9-409e-9a8a-f3d0516627fd" method="POST">
                <input type="text" placeholder='FullName' name="fName" required className=' mt-6 block border border-grey-500 rounded-full pl-3 py-1 mb-2 w-56 text-xs md:py-2 lg:w-64 lg:py-3' />
                <input type="text" placeholder='Country/Region' name="country" required className='block border border-grey-500 rounded-full pl-3 py-1 mb-2 w-56 text-xs md:py-2 lg:w-64 lg:py-3' />
                <input type="text" placeholder='Street Address' name="street" required  className='block border border-grey-500 rounded-full pl-3 py-1 mb-2 w-56 text-xs md:py-2 lg:w-64 lg:py-3'/>
                <input type="text" placeholder='City' name="city" required className='block border border-grey-500 rounded-full pl-3 py-1 mb-2 w-56 text-xs md:py-2 lg:w-64 lg:py-3'/>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" className='block border border-grey-500 rounded-lg pl-3 py-1 mb-4 text-xs md:py-2 lg:w-64 lg:py-3'></textarea>
                <button className='bg-deep-orange-rgba text-white border rounded-full px-4 text-xs md:w-48 py-3 lg:w-56 py-3'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default FormSection