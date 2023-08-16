import React from 'react'
import { Link } from 'react-router-dom';

function MainSectionJ() {
  return (
    <div className='flex justify-center items-center mt-6 mb:6 md:mr-5'>
        <div className='w-[150px] text-center text-sm  border-2 mx-2 rounded'>

            <div className="bg-white">
                <div className="border-b-2 hover:text-deep-orange-rgba py-2">
                    <Link to="#">Module1</Link>
                </div>
                <div className="border-b-2  hover:text-deep-orange-rgba py-2">
                    <Link to="#">Module2</Link>
                </div>
                <div className="border-b-2  hover:text-deep-orange-rgba py-2">
                    <Link to="#">Module3</Link>
                </div>
                <div className="border-b-2 hover:text-deep-orange-rgba py-2">
                    <Link to="#">Module4</Link>
                </div>
                <div className="border-b-2 hover:text-deep-orange-rgba py-2">
                    <Link to="#">Module5</Link>
                </div>
                <div className="border-b-2 hover:text-deep-orange-rgba py-2">
                    <Link to="#">Module6</Link>
                </div>
                <div className="border-b-2 hover:text-deep-orange-rgba py-2 ">
                    <Link to="#">Module7</Link>
                </div>
                <div className="border-b-2 hover:text-deep-orange-rgba py-2">
                    <Link to="#">Module8</Link>
                </div>
                <div className="border-b-2 hover:text-deep-orange-rgba py-2">
                    <Link to="#">Module9</Link>
                </div>
                <div className=" hover:text-deep-orange-rgba py-2 ">
                    <Link to="#">Module10</Link>
                </div>        
            </div>

        </div>
    </div>
  )
}

export default MainSectionJ