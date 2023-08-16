import React from 'react'
import isolated from "../../assets/Isolated-preview.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function MainSectionA() {
    const history = useNavigate();
  
    const handleRoute = () =>{ 
        history("/pages/Course");
  }
  return (
    <div className='bg-deep-orange-rgba font-sans'>
        <div className=' md:flex justify-around md:mt-0'>
            <div className='text-white pt-4'>
                <h1 className='mb-5 mt-12  max-w-[400px] px-6 font-bold text-xl tracking-wider md:leading-snug lg:leading-snug lg:text-3xl'>Get Access to Unlimited Educational Resources.Everywhere, Everytime!</h1>
                <p className='px-6 mb-6 text-xs  lg:max-w-xs lg:leading-loose'>Premium access to more than 10000 resources ranging from courses,events etc.</p>
            </div>
            <div className='w-[30%]'>
                <img src={isolated} alt='isolated'  className='hidden md:block'/>
            </div>
        </div>
   
        <div className='px-9 lg:pl-[105px] xl:pl-[150px]'>
            <button onClick={handleRoute} className='bg-white border rounded-full px-2 py-2 mb-8 text-light-orange-rgba '>Get Access</button>
        </div>
        <div className='flex justify-start items-center px-9 pb-10 lg:pl-[108px] xl:pl-[150px]' >
            <Link to="../pages/SignUp" >
                <FontAwesomeIcon icon={faPlay} rotation={180}  className='text-deep-orange-rgba rounded-[50%] bg-white py-2 px-2  w-[10px] h-[8px] mr-4'/>
            </Link>
            <Link to="../pages/Courses" >
                <FontAwesomeIcon icon={faPlay} className='text-deep-orange-rgba rounded-[50%] bg-white py-2 px-2 w-[10px] h-[8px]' />
            </Link>

        </div>
        
    </div>
   
    
   
   
  )
}

export default MainSectionA