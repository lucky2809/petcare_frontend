import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import CatData from "../Components/Data/Petfinding.json"


function About() {
    const [onHover, setOnHover] = useState(false)

    return (
        <div className='about-Mian'>
            <div className='about w-full gap-3 flex px-20 py-10 bg-cyan-50/20 max-sm:flex-col max-sm:px-5'>
                <div className=' flex flex-col w-[60%] gap-5 max-sm:w-full'>
                    <div className='about-details   shadow-slate-300 shadow-sm  rounded-md flex flex-col gap-6 p-5 bg-white'>
                        <h1 className='heading font-semibold text-5xl'>Sir Woofington</h1>
                        <span className='flex font-semibold text-md gap-3'><Link to={""} className='text-blue-400 underline' > Affenpinscher </Link> <p>. Mangilao, GU</p> </span>
                        <span className='border-b border-t border-slate-400 flex gap-3 py-3 font-semibold text-md  '>
                            <p>Adult</p>
                            <p> Male </p>
                            <p> Large </p>
                        </span>
                        <h2 className='font-semibold text-4xl'>About</h2>
                        <span>
                            <p className='font-semibold text-xl'>HEALTH</p>
                            <p>Vaccinations up to date.</p>
                        </span>
                        <span className='border-b border-slate-400 pb-5'>
                            <p className='font-semibold text-xl'>ADOPTION FEE</p>
                            <p>$125.00</p>
                        </span>
                        <p>Petfinder recommends that you should always take reasonable security steps before making online payments.</p>
                    </div>
                    <div className='About-Contact-section  w-[60%] flex flex-col items-center shadow-slate-400 shadow-sm rounded-md py-3  px-3 gap-3 bg-white max-sm:w-full'>
                        <h3 className='contect font-semibold text-2xl'>Guam Animals In Need</h3>
                        <p>Mangilao, GU</p>
                        <div className='location  w-full flex items-center gap-3'>
                            <Icon icon={"tdesign:location"} fontSize={30}></Icon>
                            <span className='w-full'>
                                <p className='font-semibold text-xl pt-4 '>Location Address</p>
                                <p className='pb-3 border-b border-slate-400 w-full'>Mangilao, GU</p>
                            </span>
                        </div>

                        <div className='location  w-full flex items-center gap-3'>
                            <Icon icon={"marketeq:call"} fontSize={30}></Icon>
                            <span className='pb-3 w-full'>
                                <p className='font-semibold text-xl pt-4 text-blue-500'>+91 678954344</p>
                                <p className='pb-3 border-b border-slate-400 w-full'></p>
                            </span>
                        </div>

                        <button className='w-full bg-black text-white p-2 rounded-md hover:bg-black/20 hover:text-black font-semibold'>MORE ABOUT US</button>

                    </div>
                </div>
                <div className='about-inquiry w-[40%] px-10   flex flex-col gap-3 max-sm:hidden'>
                    <div className='flex justify-center flex-col bg-blue-500 text-white  px-10 gap-5 p-5 rounded-md'>
                        <p className='font-semibold text-2xl text-center'>Considering Sir Woofington for adoption?</p>
                        <div className='flex justify-center w-full flex-col gap-3 font-semibold'>
                            <button className='p-2 bg-white text-black w-full rounded-md hover:bg-white/40 hover:text-white '>START YOUR INQUIRY</button>
                            <button className='p-2  text-white border border-slate-100 rounded-md  w-full hover:bg-black hover:border-black'>START YOUR INQUIRY</button>
                        </div>
                        <div className='flex justify-between w-full  font-semibold px-10 pt-3'>
                            <span>SPONSOR</span>
                            <span>FEVORITE</span>
                        </div>
                    </div>

                    <div className='border-1 border-slate-300 rounded-md px-6 p-3 flex flex-col gap-2'>
                        <div className=''>
                            <p className='text-2xl font-bold'>Related Blogs</p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex p-2 border-1 border-slate-300 gap-2'>
                                <div className='h-28 w-30'>
                                    <img className=' w-full h-full object-cover' src={`${import.meta.env.BASE_URL}blog-1[1].avif`} alt="" />
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-[18px] font-bold'>
                                        How to Choose the Best Wet Cat F...
                                    </p>
                                    <p className='text-[12px] flex justify-between'>
                                        <span>HUFT Editorial</span>
                                        <span>Mar 27, 25</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-6'>
                            <div className='flex p-2 border-1 border-slate-300 gap-2'>
                            <div className='h-28 w-30'>
                                    <img className=' w-full h-full object-cover' src={`${import.meta.env.BASE_URL}blog-1[1].avif`} alt="" />
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-[18px] font-bold'>
                                        How to Choose the Best Wet Cat F...
                                    </p>
                                    <p className='text-[12px] flex justify-between'>
                                        <span>HUFT Editorial</span>
                                        <span>Mar 27, 25</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex p-2 border-1 border-slate-300 gap-2'>
                            <div className='h-28 w-30'>
                                    <img className=' w-full h-full object-cover' src={`${import.meta.env.BASE_URL}blog-1[1].avif`} alt="" />
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-[18px] font-bold'>
                                        How to Choose the Best Wet Cat F...
                                    </p>
                                    <p className='text-[12px] flex justify-between'>
                                        <span>HUFT Editorial</span>
                                        <span>Mar 27, 25</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full grid grid-cols-4 gap-4 px-20 bg-cyan-50 py-5 max-sm:grid-cols-1 max-sm:px-5'>
                {
                    CatData.Data.map((data) => {
                        return (

                            <Link to={"/showmoredetails"}>
                                <div
                                    onMouseOver={() => setOnHover(true)}
                                    onMouseLeave={() => setOnHover(false)}
                                    className={`h-full border-2 border-slate-100 rounde-lg hover:border-2 hover:rounded-lg ${onHover ? "hover:border-green-800 " : ""}shadow-lg`}>

                                    <div
                                        className='rounded-lg h-80 w-full overflow-hidden '>
                                        <img
                                            src={data.img} className={`rounded-t-lg h-full w-full object-cover ${onHover ? "hover:scale-110" : ""} duration-700`} alt="" srcset="" />
                                    </div>
                                    <div className=''>
                                        <div className='felx justify-center items-center rounded-b-lg  text-center py-5 bg-white'>
                                            <p className='text-xl font-semibold'>{data.heading}</p>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default About