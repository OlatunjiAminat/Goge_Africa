import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function Mainsection() {
  return (
    <div className=' mb-16 md:flex justify-around'>
        <div className='flex justify-around mt-12 text-grey-rgba'>
            <p className='md:pr-4 lg:pr-8'>Showing 1-8 of 10 results </p>
            <p>Show 6 12 16</p>
        </div>
        <div className='flex justify-around'>
            <button>
                <FontAwesomeIcon icon={faBars} className="ml-8 pt-10 text-deep-orange-rgba"/>
            </button>
            <button>
                <FontAwesomeIcon icon={faBars} className="ml-8 mr-6 pt-10 text-deep-orange-rgba"/>
            </button>
            <select name="Filter" id="Filter" className='border rounded-full mt-10 mr-6 px-2 h-10 text-grey-rgba'>
                <option value="design">Filter</option>
                <option value="design">designs</option>
            </select>
            <select name="Sort" id="Sort" className='border rounded-full mt-10 px-2 h-10 text-grey-rgba'>
                <option value="name">Sort by</option>
                <option value="name">designs</option>
            </select>
        </div>
    </div>
  )
}

export default Mainsection