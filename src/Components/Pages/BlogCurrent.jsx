import React from 'react'
import CurrentBlog from "../Data/BlogData.json/"
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const newCardData = CurrentBlog.CurrentBlog

function BlogCurrent() {
    return (
        <>
            <div className='Card-main w-full px-20 mt-10  mb-10 bg-slate-100 py-5 border-none max-sm:px-2'>
                <div className='flex text-xl font-semibold py-3 justify-between'>
                    <h1 className='text-2xl font-semibold'>Learan Current...</h1>
                    {/* <Link to={"/blogs"} onClick={() => window.scrollTo(0, 0)}> */}
                    {/* <button className='text-white bg-green-700 p-2 cursor-pointer'>View More..</button> */}
                    <Button variant="contained" sx={{bgcolor: 'black', color: "white"}} href="/blogs">
                        View More
                    </Button>
                    {/* </Link> */}
                </div>
                <div className='grid grid-cols-4 gap-5 bg-gray-200 max-sm:grid-cols-1'>
                    {
                        newCardData.map((data) => {
                            return (
                                <Link to={"/blogdetails"}>
                                    <section className='card-data bg-white shadow-xl transition-transform hover:shadow-2xl hover:translate-x-1 duration-400'>
                                        <div className='h-72'>
                                            <img className='h-full w-full object-cover ' src={data.img} />
                                        </div>
                                        <div className='flex flex-col gap-5 mb-2 px-2 py-2'>
                                            <div className='flex flex-col gap-1'>
                                                <h1 className='font-bold text-md px-2 text-red-400'>{data.heading}</h1>
                                                <p className='font-semibold text-sm px-2 text-slate-600'>{data.description}</p>
                                            </div>
                                            {/* <span className='font-semibold text-sm px-2 text-slate-600 '>Pet Care <span>. {data.postData}</span> </span>     */}

                                        </div>
                                    </section>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default BlogCurrent;