
import React from 'react'
import "./index.css";
import NavBar from "./components/homePage/NavBar";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import  Contributor from './pages/Contributor';
import  BlogDetails from './pages/BlogDetails';


function App() {
  
  const router = createBrowserRouter(
   
    createRoutesFromElements(
      <Route>
        <Route path="pages/SignUp" element={<SignUp />} />
        <Route path="pages/SignIn" element={<SignIn />} />
        <Route path="pages/Contributor" element={<Contributor />} />

        <Route path="/" element= {<NavBar />} >
          <Route index element= {<HomePage />} />
          <Route path="pages/AboutUs" element= {<AboutUs />} />
          <Route path="pages/Blogs" element= {<Blogs />} />
          <Route path="pages/ContactUs" element= {<ContactUs />} />
          <Route path="pages/BlogDetails" element= {<BlogDetails />} />
          <Route path="*" element= {<ContactUs />} />
        </Route>

      </Route>
        
      

    )
  );

  return (
      <div>
        <RouterProvider router= {router} />
      </div>

  );
}

export default App;
