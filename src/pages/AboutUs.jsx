import React from 'react'
import MainSectionA from '../components/aboutUs/MainSectionA'
import MainSectionB from '../components/aboutUs/MainSectionB'
import MainSectionC from '../components/aboutUs/MainSectionC'
import MainSectionD from '../components/aboutUs/MainSectionD'
import MainSectionE from '../components/aboutUs/MainSectionE'
import Footer from '../components/homePage/Footer'
import MainSectionF from '../components/aboutUs/MainSectionF'

function AboutUs() {
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
          <MainSectionF />
        </div>

        <div className=''>
          <MainSectionD />
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

export default AboutUs