import React from 'react'
// import NavBar from '../components/NavBar'
import MainOne from '../components/courses/MainOne'
import SearchInput from '../components/courses/SearchInput'
import Mainsection from '../components/courses/Mainsection'
import Cards from '../components/courses/Cards'
import cardsDetails from '../CardDetail'
import Courses from '../components/courses/Courses'
import Footer from '../components/courses/Footer'

function HomePage() {
  return (
    <div>
        <div>
            <MainOne />
        </div>

        <div>
            <SearchInput />
        </div>

        <div>
          <Mainsection />
        </div>

        <div className='md:flex justify-around flex-wrap'>
          <div className='mx-auto flex flex-wrap justify-around md:w-3/5 md:mx-6 lg:mx-0'>
            { cardsDetails.map(detail =>(
              <Cards img={detail.imgUrl} advice={detail.advice} key={detail.id}/>
             ))}
          </div>
          <div className='mt-0'>
            <Courses />
          </div>
          
        </div>
        <div className='mt-24'>
          <Footer />
        </div>
    </div>
  )
}
export default HomePage