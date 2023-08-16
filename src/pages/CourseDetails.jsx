import React from 'react'
import MainSectionK from '../components/courseDetails/MainSectionK'
import MainSectionA from '../components/course/MainSectionA'
import MainSectionB from '../components/course/MainSectionB'
import MainSectionC from '../components/course/MainSectionC'
import MainSectionD from '../components/course/MainSectionD'
import MainSectionE from '../components/course/MainSectionE'
import Footer from '../components/courses/Footer'
import MainSectionI from '../components/course/MainSectionI'

function CourseDetails() {
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
                <MainSectionD embedId="LSRNmhLS76o" />
            </div>
            <div>
                <MainSectionB />
            </div>
        </div>
        
        <div>
            <MainSectionE />
        </div>

        <div>
            <MainSectionK />
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

export default CourseDetails