import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function BlogCard({image,heading,description,postData}) {



    return (
        <>
            <div className='Card-main w-full  mt-10     max-sm:px-2 max-sm:py-2'>
                    <Link to={"/blogdetails"}>
                        <section className='card-data bg-white shadow-xl transition-transform hover:shadow-2xl hover:translate-x-1 duration-400'>
                            <div className='h-96 max-sm:h-96'>
                                <img className='h-full w-full object-cover ' src={image} />
                            </div>
                            <div className='flex flex-col gap-5  px-2 py-5'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-bold text-xl px-2'>{heading}</h1>
                                    <p className='font-semibold text-md px-2 text-slate-600'>{description}</p>
                                </div>
                                <span className='font-semibold text-sm px-2 text-slate-600 '>Pet Care <span>. {postData}</span> </span>
                            </div>
                        </section>
                    </Link>
                </div>
        </>
    )
}

export default BlogCard