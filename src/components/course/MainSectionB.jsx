import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function MainSectionB() {
    const [showHamburger, setShowHamburger] = useState(false);

    const toggleHamburger = () => {
    setShowHamburger(!showHamburger);
  };
  return (
    <div className="bg-gray-500">
            <div className=" text-white pt-7 text-base  ">
                <p className="flex items-center sm:text-xs ml-8">The Art of Growing Relationship 
                    <button  onClick={toggleHamburger} className="" >
                        <FontAwesomeIcon icon={faBars} className="sm:text-xs text-white border-white-500 border-2 rounded-full px-2 py-2 ml-3 sm:mr-10 "/>
                    </button>
                </p>
            </div>
        
            <div className={` text-center text-sm shadow-[120px_55px_180px_-135px_rgba(0,0,0,0.3)] ml-[247px] md:ml-[170px] lg:ml-[250px] xl:ml-[220px] ${showHamburger ? 'block' : 'hidden'} text-gray-600`}>

                <div className="bg-white max-w-[80%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] lg:max-w-[250%]">
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

export default MainSectionB