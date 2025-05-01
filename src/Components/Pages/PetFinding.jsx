import React, { useState } from 'react'
import Navbar from '../NavComp/Navbar'
import CatData from "../Data/Petfinding.json"
import Footer from '../NavComp/Footer'
import HeroSection from './HeroSection'
import { Link } from 'react-router-dom'

function PetFinding() {
    const [onHover, setOnHover] = useState(false)
    console.log(onHover)
    return (
        <>
            <Navbar />
            <HeroSection />
            <div className='px-20 bg-slate-100 mt-15 py-3 max-sm:px-4'>
                <div className='felx justify-center'>
                    <p className='text-4xl text-center font-semibold flex justify-center gap-3'>Pets Available For Adoption Nearby....
                        {/* <Icon width={15} className='text-black font-extrabold' icon={"weui:arrow-filled"} style={{ marginTop: "4px", color: "", }} /> */}
                    </p>
                </div>

                <div className='grid grid-cols-4 gap-7 max-h-full py-10 max-sm:grid-cols-1 max-sm:px-0'>

                    {
                        CatData.catData.map((data) => {
                            return (
                              <Link to={"/showmoredetails"} >
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
            <Footer />
        </>

    )
}

export default PetFinding