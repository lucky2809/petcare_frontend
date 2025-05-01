import React from 'react'
import Navbar from '../NavComp/Navbar'
import HeroSection from './HeroSection'
import Blog from './BlogCard'
import BlogCurrent from './BlogCurrent'
import Footer from '../NavComp/Footer'
import PetDetails from './PetDetails'
import Header from './Header'
import Tips from './Tips'
import Adoptive from './Adoptive'


function Home() {
  return (
    <div className='home-main'>
         <Navbar /> 
         <Header />
         <Tips />
         <Adoptive />
         {/* <HeroSection /> */}
        {/* <Blog /> */}
        <BlogCurrent />
        <Footer /> 
        

    </div>
  )
}

export default Home