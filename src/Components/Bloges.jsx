import React, { useEffect, useState } from 'react'
import Navbar from './NavComp/Navbar'
import Footer from './NavComp/Footer'
import BlogCard from './Pages/BlogCard'

function Bloges() {
    const [bloges, setBloges] = useState([])
    const fetchBlogesData = async () => {
        try {
            const url = 'http://localhost:8000/blog/all'
            const fetchData = await fetch(url)
            const response = await fetchData.json()
            setBloges(response.bloges_Data)
        } catch (err) {
            console.log("Something Went Wrong .. !", err)
        }

    }
    useEffect(() => {
        fetchBlogesData()
    }, [])

    console.log(bloges)
    return (
        <>
            <Navbar />
            <div className='grid grid-cols-3 gap-5 bg-gray-200 max-sm:grid-cols-1 px-20'>
                {
                    bloges.map((data) => {
                        return (
                            <BlogCard image={data.image} heading={data.heading} description={data.description} postData={data.postData} />
                        )
                    })
                }

            </div>
            <Footer />
        </>
    )
}

export default Bloges