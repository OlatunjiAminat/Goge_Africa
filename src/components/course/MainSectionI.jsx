import React from 'react'

function MainSectionI() {
  return (
    <div className='mx-[15%] mb-12'>
        <div className='text-deep-orange-rgba font-semibold mb-2  mt-12' >
            <h2>Subscribe To Our Newsletter</h2>
        </div>
        <div className='md:flex justify-start items-center'>
            <div className='text-xs text-gray-500  md:mr-8 lg:mr-16'>
                <p>Get exclusive discounts and latest news delivered<br/> to your inbox for free</p>
            </div>
            <div className='flex justify-start items-end'>
                <div>
                    <form action="https://getform.io/f/1e3fb990-41e9-409e-9a8a-f3d0516627fd" method="POST">
                        <input type="text" placeholder='Email' name="mail" required className=' mt-6 block border border-grey-500 rounded-full pl-3 py-1 h-10 w-60 text-xs' />
                    </form>
                </div>
                <div>
                    <button className='bg-deep-orange-rgba text-white border rounded-full px-4 text-xs py-1 h-10 ml-[-55px]'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainSectionI