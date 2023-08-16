import React from 'react'
import MainSectionA from '../components/course/MainSectionA'
import MainSectionC from '../components/course/MainSectionC'
import MainSectionD from '../components/course/MainSectionD'
import MainSectionB from '../components/course/MainSectionB'
import MainSectionE from '../components/course/MainSectionE'
import MainSectionK from '../components/CourseExercise/MainSectionK'
import MainSectionI from '../components/course/MainSectionI'
import Footer from '../components/courses/Footer'

function CourseExercise() {
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

export default CourseExercise