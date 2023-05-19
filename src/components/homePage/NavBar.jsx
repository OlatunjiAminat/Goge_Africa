import React, { useState } from "react";
import Logo from "../../assets/Logo1.png";
import cart from "../../assets/cart.jpeg";
import { Link, Outlet } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import {faTwitter, faFacebook,  faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'

function NavBar(){ 
  const [showHamburger, setShowHamburger] = useState(false);

  const toggleHamburger = () => {
    setShowHamburger(!showHamburger);
  };


//   let location = useLocation();

  return (
    <>
        <nav className="md:shadow-md">
            
            {/*Hamburger toggle button for small screens */}
            <button  onClick={toggleHamburger} className="md:hidden">
                {/* <i className="fa fa-bars"></i> */}
                <FontAwesomeIcon icon={faBars} className="ml-8 pt-6 text-deep-orange-rgba"/>
            </button>

            {/* Navbar content */}
            <div className={`ml-16 mr-2 md:flex justify-between pt-3 items-center md:ml-2 ${showHamburger ? 'block' : 'hidden'}`}>

            
                <div className="w-20 text-deep-orange-rgba hidden md:block  md:ml-0">
                    <img src={Logo} alt="logo" className=" md:ml-0" />
                </div>
                <div className="md:flex justify-around items-center">
                    <div className="text-deep-orange-rgba mt-3 mb-1 mr-2 md:mt-0 lg:mr-4 xl:mr-12">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="text-deep-orange-rgba mb-1 mr-2 lg:mr-4  xl:mr-12">
                        <Link to="#">Courses</Link>
                    </div>
                    <div className="text-deep-orange-rgba mb-1 mr-2 lg:mr-4  xl:mr-12">
                        <Link to="./pages/Blogs">Blogs</Link>
                    </div>
                    <div className="text-deep-orange-rgba mb-1 mr-2 lg:mr-4  xl:mr-12">
                        <Link to="./pages/AboutUs">About Us</Link>
                    </div>
                    <div className="text-deep-orange-rgba mb-1 mr-2 lg:mr-4  xl:mr-12">
                        <Link to="./pages/ContactUs">Contact Us</Link>
                    </div>
                    
                    <div className="w-20 mr-2 xl:mr-12">
                        <img src={cart} alt="cart-logo" className="bg-deep-orange-rgba w-15 mr-0" />
                    </div>
                    <div className="flex justify-evenly lg:mr-4  xl:mr-12">
                        <div>
                            <Link to="./pages/Contributor"><button className="bg-deep-orange-rgba my-4  mr-2 py-1 px-2 rounded-full text-white">
                            Be a contributor
                            </button></Link>
                        </div>
                        <div className="">
                            <Link to="./pages/SignUp"><button className="bg-deep-orange-rgba my-4 mr-2 py-1 px-1 w-24 rounded-full text-white">
                            Log in
                            </button></Link>
                        </div>
                    </div>
                
                    
                    
                </div>

            </div>
        </nav>

        <Outlet/>
    
    </>
  );
}

export default NavBar;
