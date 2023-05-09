import React from 'react'
// import NavBar from '../components/NavBar'
import MainOne from '../components/homePage/MainOne'
import SearchInput from '../components/homePage/SearchInput'
import Mainsection from '../components/homePage/Mainsection'
import Cards from '../components/homePage/Cards'
import cardsDetails from '../CardDetail'
import Courses from '../components/homePage/Courses'
import Footer from '../components/homePage/Footer'

function HomePage() {
  return (
    <div>

        {/* <div>
            <NavBar />
        </div> */}

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

        {/* <div className=''>
         
        </div> */}

        <div className='mt-24'>
          <Footer />
        </div>

    </div>
  )
}

export default HomePage