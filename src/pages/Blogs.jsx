import React from 'react'
import MainSectionA from '../components/blogs/MainSectionA'
import CardSection from '../components/blogs/CardSection'
import blogCardDetails from '../BlogCardDetails'
import Footer from '../components/homePage/Footer'

function Blogs() {
  return (
    <div>
        <div>
            <MainSectionA />
        </div>
        <div className='md:flex justify-around flex-wrap'>
          <div className='mx-auto flex flex-wrap justify-around md:mx-6 lg:mx-0'>
            { blogCardDetails.map(detail =>(
              <CardSection img={detail.imgUrl} topic={detail.topic} key={detail.id} date={detail.date} explanation={detail.explanation} button={detail.button}/>
             ))}
          </div>
        </div>

        <div className='mt-32'>
          <Footer />
        </div>

        
    </div>
  )
}

export default Blogs