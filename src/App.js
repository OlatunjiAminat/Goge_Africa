
import React from 'react'
import "./index.css";
import NavBar from "./components/courses/NavBar";
import AboutUs from "./pages/AboutUs";
// import Courses from "./pages/Courses";
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
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import CourseExercise from './pages/CourseExercise';
import Landing from './pages/Landing';
import Course from './pages/Course';



function App() {
  
  const router = createBrowserRouter(
   
    createRoutesFromElements(
      <Route>
        <Route path="pages/SignUp" element={<SignUp />} />
        <Route path="pages/SignIn" element={<SignIn />} />
        <Route path="pages/Contributor" element={<Contributor />} />

        <Route path="/" element= {<NavBar />} >
          <Route index element= {<Landing />} />
          <Route path="pages/AboutUs" element= {<AboutUs />} />
          <Route path="pages/Blogs" element= {<Blogs />} />
          <Route path="pages/ContactUs" element= {<ContactUs />} />
          <Route path="pages/Courses" element= {<Courses />} />
          <Route path="pages/BlogDetails" element= {<BlogDetails />} />
          <Route path="pages/CourseDetails" element= {<CourseDetails />} />
          <Route path="pages/CourseExercise" element= {<CourseExercise />} />
          <Route path="pages/Course" element= {<Course />} />
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
