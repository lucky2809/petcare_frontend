import React from 'react'
import Navbar from "../Components/NavComp/Navbar"
import Carousel from './Carousel'
import About from './About'
import Footer from '../Components/NavComp/Footer'


function ShowMoreDetails() {

    return (
        <>
            <Navbar />
            {/* <Carousel /> */}
            <About />
            <Footer />

        </>
    )
}

export default ShowMoreDetails