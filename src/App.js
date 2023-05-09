// import Cards from './components/Cards';
import React from 'react'
import "./index.css";
import NavBar from "./components/homePage/NavBar";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import  ShowNoNavBar  from './components/signUp/ShowNoNavBar';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      
    // <Routes>
    //   <>
      
    //     <ShowNoNavBar >
    //       <NavBar />
    //     </ShowNoNavBar>
     
      
        <Route path="/" element= {<NavBar />} >
          <Route index element= {<HomePage />} />
          <Route path="pages/AboutUs" element= {<AboutUs />} />
          <Route path="pages/Blogs" element= {<Blogs />} />
          <Route path="pages/ContactUs" element= {<ContactUs />} />
          <Route path="*" element= {<SignUp />} />
        </Route>
      //   </>
      // </Routes>
    
    
    
    )
  );

  return (
      <div>
        <RouterProvider router= {router} />
      </div>

  );
}

export default App;
