import React from 'react'

function Courses() {
  return (
    <div className='text-grey-rgba text-sm mx-10'>
        <h2 className='font-semibold mt-6 mb-16 md:-mt-6'>All Courses</h2>
        <p className='mb-16'>Web Development (2908)</p>
        <p className='mb-16'>Design (11293)</p>
        <p className='mb-16'>Photography (2230)</p>
        <p className='mb-16'>3D Artist (9828)</p>
        <p className='mb-16'>Motion Graphics (8223)</p>
        <p className='mb-16'>Software Engineer (1001)</p>
        <p className='mb-16'>UI/UX Roadmap (734)</p>
        <p className='mb-16'>Sound & Music(1223)</p>
        <p>Digital Marketing(382)</p>
        <h2 className='font-semibold mt-10'>Course Type</h2>
        <div className='mt-6'>
            <button className='border rounded-full px-3 py-3 mr-6'>Paid</button>
            <button className='border rounded-full px-3 py-3'>Free</button>
        </div>
        <div>
            <button className='border w-32 rounded-full bg-deep-orange-rgba text-white px-4 py-4 my-10'>Filter</button>
        </div>
    </div>
  )
}

export default Courses