import React from 'react'
import MainSectionA from '../components/contactUs/MainSectionA'
import FormSection from '../components/contactUs/FormSection'
import Footer from '../components/courses/Footer'

function ContactUs() {
  return (
    <div>
        <div>
            <MainSectionA />
        </div>
        <div>
            <FormSection />
        </div>
        <div className='mt-20'>
            <Footer />
        </div>
    </div>
  )
}

export default ContactUs