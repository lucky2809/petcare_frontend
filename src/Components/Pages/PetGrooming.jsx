import React, { Fragment, useState } from 'react'
import Navbar from '../NavComp/Navbar'
import GroomingData_ from "../Data/GroomingSevice.json"
import { Icon } from '@iconify/react/dist/iconify.js'
import Footer from '../NavComp/Footer'
import GroomingCart from "../Data/GroomingSevice.json"
import BlogCurrent from './BlogCurrent'
import { Box, Button, Modal } from '@mui/material'
import MYStepper from '../PetGroomingSteperComp/Stepper'
import { AnimatedCard, AnimatedWrapper,AnimatedLeftWrapper } from '../StyledComponents/Styled'






function PetGrooming() {
    const [addvanceGroisTure, setAddvanceGroisTure] = useState()
    const [poochIsTure, setPochIsTure] = useState()
    const [modal, setModal] = useState(false)

    const getHeaderColor = (index) => {
        switch (index) {
            case 0:
                return
            case 1:
                return "texl-6xl"
        }
    }

    return (
        <Fragment>
            <Navbar />

            <div onClick={() => window.scrollTo(0, 0)} className=' h-full w-full mb-10 '>
                <div className=' h-[450px] w-full'>
                    <img className='h-full w-full object-cover' src={`${import.meta.env.BASE_URL}manja-vitolic-gKXKBY-C-Dk-unsplash.jpg`} />
                </div>
                <div className='h-full w-full py-8'>
                    <AnimatedWrapper className='text-center mb-8 font-serif text-3xl'>Explore Our Pet Grooming Services for Your Pet</AnimatedWrapper>
                    <div className='explor-petgrooming flex  gap-5  justify-center'>


                        {
                            GroomingData_.groomingData.map((data) => {
                                return (
                                    <AnimatedLeftWrapper className='pet-service  w-38  flex flex-col  shadow-sm shadow-slate-400 rounded-md'>
                                        <div className='img h-22 p-3'>
                                            <img className='h-full w-full object-contain' src={data.image} alt="" />
                                        </div>
                                        <p className='text-center font-semibold pb-2 px-5 text-[14px]'>{data.paregraph}</p>
                                    </AnimatedLeftWrapper>
                                )
                            })
                        }

                    </div>
                </div>

                <div className='grooming-wrapper py-6 bg-amber-50'>
                    <AnimatedWrapper className='text-center font-serif text-3xl'>Popular Cat Grooming Package </AnimatedWrapper>
                    <div className='grooming-cart-wrapper grid grid-cols-3 gap-5 px-40 my-10 '>

                        {
                            GroomingCart.GroomingCart.map((item, index) => {
                                // const text = getHeaderColor(index)
                                return (
                                    <AnimatedCard key={index} className='Cart-d bg-white rounded-md shadow-black/10 shadow-md flex flex-col items-center py-10 '>
                                        <span className={`font-bold text-2xl   px-10  mb-2 
                                              ${index === 0 ? "bg-cyan-100 text-cyan-400" : ""} ${index === 1 ? "bg-slate-400/20 text-slate-500" : ""} ${index === 2 ? "text-orange-300 bg-orange-200/30" : ""}
                                              `}>{item.heading}
                                        </span>
                                        <p className='font-semibold text-[17px]  mt-3'>{item.subHeading}</p>
                                        <p className='price-wrapper flex gap-2  px-5 py-3'>
                                            <s className='font-bold text-slate-500'>RS{item.orignal_Price}</s>
                                            <span className='price font-bold '>RS {item.final_Price}</span>
                                        </p>
                                        <div className='bg-gradient-to-r from-cyan-400 to-blue-500  w-[60%] h-[3px] mb-2'></div>

                                        <ul className='un-order-list w-full px-25 flex flex-col py-5'>
                                            {

                                                item.Available_service?.map((item_) => {
                                                    return (

                                                        <li className='font-semibold text-[13px] flex items-center gap-1 text-slate-400'><Icon icon={"icons8:cat-footprint"} className='text-slate-400' fontSize={18} /> {item_}</li>

                                                    )
                                                })
                                            }
                                        </ul>

                                        <div className='btn-wrapper w-full px-25 py-3 '>
                                            <Button variant='outlined' sx={{ width: "100%", height: 32, fontSize: 14, color: "black", border: "1px solid #d1cccc" }}>View More</Button>
                                        </div>

                                        <div className='border border-slate-300 w-[70%]'> </div>

                                        <div className='btn-wrapper w-full px-10 mt-5 '>
                                            <Button variant='outlined' sx={
                                                {
                                                    p: 1,
                                                    width: "100%",
                                                    bgcolor: "#05831c",
                                                    border: "none",
                                                    color: "white",
                                                    '&:hover': {
                                                        background: "black",
                                                    }
                                                }
                                            } onClick={() => setModal(true)}>Book Appointment</Button>
                                        </div>
                                    </AnimatedCard>
                                )
                            })
                        }

                        <div className='sticky z-100'>
                        <Modal sx={{ height: screen, display: 'flex', justifyContent: "center", alignItems: 'center', px: 30 }}
                            open={modal}
                            // onClose={handleClose}
                        >
                            <AnimatedCard className='h-[500px] w-full'>
                            <Box sx={{ height: "500px", width: "100%", bgcolor: "white", outline: 0, display: "flex", }}>
                                <div className='img-section min-w-[40%] h-full'>
                                    <img className='h-full w-full object-cover' src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg" alt="" />
                                </div>
                                <div className='content  h-full w-full'>
                                    <div className='w-full flex justify-end'> <Icon fontSize={40} icon={"basil:cross-solid"} onClick={() => setModal(false)} /> </div >
                                    {/* stepper components */}
                                    <MYStepper />

                                </div>

                            </Box>
                            </AnimatedCard>
                        </Modal>
                        </div>

                    </div>
                </div>
            </div>

            <BlogCurrent />
            <Footer />
        </Fragment >
    )
}

export default PetGrooming