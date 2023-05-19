import React from 'react'
import MainSectionA from '../components/blogDetails/MainSectionA'
import MainSectionB from '../components/blogDetails/MainSectionB'
import MainSectonC from '../components/blogDetails/MainSectonC'
import MainSectionD from '../components/blogDetails/MainSectionD'
import MainSectionE from '../components/blogDetails/MainSectionE'
import Footer from '../components/homePage/Footer'

function BlogDetails() {
  return (
    <div>
        <div>
            <MainSectionA />
        </div>
        <div>
            <MainSectionB />
        </div>
        <div>
            <MainSectonC />
        </div>
        <div>
            <MainSectionD />
        </div>
        <div>
            <MainSectionE />
        </div>

        <div className='mt-24'>
            <Footer />
        </div>
    </div>
  )
}

export default BlogDetails