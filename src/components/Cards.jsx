
import React from 'react'
// import cardsDetails from '../CardDetail'


function Cards(props) {
  return (
    <div className=''>
        <div className='mb-5 lg:mb-3'>
            <div className='border rounded-t-lg max-w-xs mx-auto shadow-xl'>
                <img src={props.img} alt="avatar" className='w-32 h-24 mx-auto'/>
            </div>
            <div className='bg-deep-orange-rgba border rounded-b-lg text-xs max-w-xs mx-auto'  >
                <h2 className='text-white w-40 pl-5 py-2'>{props.advice}</h2>
            </div>
        </div>
    </div>

    
  )
}

export default Cards