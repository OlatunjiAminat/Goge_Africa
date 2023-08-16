import React from 'react'
import MainSectionA from '../components/course/MainSectionA'
import MainSectionB from '../components/course/MainSectionB'
import MainSectionC from '../components/course/MainSectionC'
import MainSectionD from '../components/course/MainSectionD'
import MainSectionE from '../components/course/MainSectionE'
import MainSectionF from '../components/course/MainSectionF'
import MainSectionG from '../components/course/MainSectionG'
import Cards from '../components/courses/Cards'
import courseCards from '../CourseCards'
import MainSectionH from '../components/course/MainSectionH'
import MainSectionI from '../components/course/MainSectionI'
import Footer from '../components/courses/Footer'
import MainSectionJ from '../components/course/MainSectionJ'

function Course() {
  return (
    <div>
      <div>
           <MainSectionA /> 
      </div>

      <div className=' bg-gray-500 pb-40 md:flex justify-around flex-wrap'>
          <div>
            <MainSectionC />
          </div>
          <div>
            <MainSectionD embedId="LSRNmhLS76o"  />
          </div>
          <div>
            <MainSectionB />
          </div>
        </div>

        <div>
          <MainSectionE />
        </div>
        <div className='md:flex justify-around items-center'>
          <div>
            <MainSectionF />
          </div>
          <div>
            <MainSectionG />
          </div>
          <div>
            <MainSectionJ />
          </div>
        </div>
        <div>
          <MainSectionH />
        </div>

        <div className='mx-2 mb-10 md:flex justify-around'>
            { courseCards.map(detail =>(
              <Cards img={detail.imgUrl} advice={detail.advice} key={detail.id}/>
             ))}
        </div>
        <div>
           <MainSectionA /> 
        </div>
        <div>
          <MainSectionI />
        </div>
        <div>
          <Footer />
        </div>
        
    </div>
  )
}

export default Course