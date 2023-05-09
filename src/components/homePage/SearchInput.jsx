import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"






function SearchInput() {
  return (
    <div className=''>
         <div className='relative flex items-center'>
            <FontAwesomeIcon icon={faSearch} className='w-5 h-5 text-black absolute ml-20 mt-10 text-white' />

            <input type="text" placeholder='Search for courses i.e web development' className=' bg-deep-orange-rgba rounded-lg py-2 pl-12  placeholder-white border border-deep-orange-rgba w-full mx-16 mt-10 h-12'/>
        </div>
        
    </div>
  )
}

export default SearchInput