import React  from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function SearchInput() {
  const [search, setSearch] = useState('')
  const handleSearch = ({target}) =>{
    setSearch(target.value)
  }
  const cleanSearch = () =>setSearch('')
  const history = useNavigate();
  
    const handleRoute = () =>{ 
        history("/pages/Course");
  }
  return (
    <div className='ml-5'>
        <div className='relative flex items-center'>
          <FontAwesomeIcon icon={faSearch} onClick={handleRoute} className='w-5 h-5 text-black absolute ml-20 mt-10 text-white' />
          <input type="text" inputProps={{ 'aria-label':' search'}}  value={search} onChange={handleSearch} onBlur={cleanSearch}  placeholder='Search for courses i.e web development'  className=' bg-deep-orange-rgba rounded-lg py-2 pl-12  placeholder-white border border-deep-orange-rgba w-full mx-16 mt-10 h-12 outline-none'/>
        </div>
        
    </div>
  )
}

export default SearchInput