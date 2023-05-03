import React from 'react'
import NavBar from '../components/NavBar'
import MainOne from '../components/MainOne'
import SearchInput from '../components/SearchInput'
import Mainsection from '../components/Mainsection'
import Cards from '../components/Cards'
import cardsDetails from '../CardDetail'
import Courses from '../components/Courses'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div>

        <div>
            <NavBar />
        </div>

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

        <div>
          <Footer />
        </div>

    </div>
  )
}

export default HomePage