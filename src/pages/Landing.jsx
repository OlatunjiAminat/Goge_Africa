import React from 'react'
import MainSectionA from '../components/landing/MainSectionA'
import MainSectionB from '../components/landing/MainSectionB'
import MainSectionC from '../components/landing/MainSectionC'
import MainSectionD from '../components/landing/MainSectionD'
import Cards from '../components/courses/Cards'
import cardsDetails from '../CardDetail'
import Button from '../components/landing/Button'
// import MainSectionF from '../components/landing/MainSectionF'
import MainSectionG from '../components/landing/MainSectionG'
import StudentCards from '../components/landing/StudentCards'
import MainSectionI from '../components/course/MainSectionI'
import MainSectionE from '../components/aboutUs/MainSectionE'
import Footer from '../components/courses/Footer'
import MainSectionF from '../components/aboutUs/MainSectionF'

function Landing() {
  return (
    <div>
        <div>
            <MainSectionA />
        </div>
        <div>
            <MainSectionB />
        </div>
        <div>
            <MainSectionC />
        </div>
        <div>
            <MainSectionD />
        </div>
        <div className='mt-8 mx-auto flex flex-wrap justify-around max-w-[70%]'>
            { cardsDetails.map(detail =>(
              <Cards img={detail.imgUrl} advice={detail.advice} key={detail.id}/>
             ))}
        </div>
        <div className='mt-8'>
            <Button />
        </div>
        {/* <div>
            <MainSectionF />
        </div> */}
        <div>
            <MainSectionF />
        </div>

        <div>
            <MainSectionG />
        </div>
        <div className='md:flex justify-around items-center flex-wrap'>
            <div>
                <StudentCards    />
            </div>
            <div>
                <StudentCards />
            </div>
            <div>
                <StudentCards />
            </div>
            <div>
                <StudentCards />
            </div>
        </div>
        <div>
            <MainSectionI />
        </div>
        <div>
            <MainSectionE />
        </div>
        <div>
            <Footer />
        </div>

    </div>
    
   
  )
}

export default Landing

