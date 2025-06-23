import React, { Fragment, useState } from 'react'
import Navbar from '../NavComp/Navbar'
import GroomingData_ from "../Data/GroomingSevice.json"
import { Icon } from '@iconify/react/dist/iconify.js'
import Footer from '../NavComp/Footer'
import GroomingCart from "../Data/GroomingSevice.json"
import BlogCurrent from './BlogCurrent'
import { Box, Button, Modal } from '@mui/material'
import MYStepper from '../PetGroomingSteperComp/Stepper'
import { AnimatedCard, } from '../StyledComponents/Styled'
import { useDispatch, useSelector } from 'react-redux'
import { handleToggleModal, setActiveStepAction, setGroomingDetails } from '../../store/petServices/actions'






function PetGrooming() {

    const open = useSelector((state) => state.PetReducer.isOpen)
    const activeStep = useSelector((state) => state.PetReducer.activeStep)
    const groomingData = useSelector((state) => state.PetReducer.groomingDetails)

    const [addvanceGroisTure, setAddvanceGroisTure] = useState()
    const [poochIsTure, setPochIsTure] = useState()
    const [modal, setModal] = useState(false)
    const [viewmore, setViewMore] = useState(false)

    const dispatch = useDispatch()


    const getHeaderColor = (index) => {
        switch (index) {
            case 0:
                return
            case 1:
                return "texl-6xl"
        }
    }


    const handleMore = (id) => {
        setViewMore(viewmore === id ? null : id)
    }




    const handleOpen = (service, price) => {
        dispatch(setActiveStepAction(0))
        dispatch(handleToggleModal(true))
        dispatch(setGroomingDetails([{ service, price }]))

    };
    const handleClose = () => {
        dispatch(handleToggleModal(false))
    };

    return (
        <Fragment>
            <Navbar />

            <div className=' h-full w-full mb-10 '>
                <div className='absolute flex h-120 justify-center w-full'>
                    <div className='flex flex-col gap-10 text-center items-center justify-end py-10'>
                        <button className='text-xl font-semibold border-2 p-2 px-4 text-white rounded-xl border-green-700 bg-green-700  hover:bg-[#334320] hover:border-[#334320] cursor-pointer hover:scale-110 duration-400'>Book Now</button>
                    </div>
                </div>
                <div className=' h-[450px] w-full '>
                    <img className='h-full w-full object-cover min-2xl:object-fill' src={`${import.meta.env.BASE_URL}toe-grooming.png`} />
                </div>
                <div className='h-full w-full py-8'>
                    <div className='text-center mb-8 font-serif text-3xl'>Explore Our Pet Grooming Services for Your Pet</div>
                    <div className='explor-petgrooming flex justify-center max-sm:grid max-sm:grid-cols-2 max-sm:px-8  gap-5 '>


                        {
                            GroomingData_.groomingData.map((data) => {
                                return (
                                    <div className='pet-service  w-38  flex flex-col  shadow-sm shadow-slate-400 rounded-md hover:scale-110 duration-400'>
                                        <div className='img h-22 p-3'>
                                            <img className='h-full w-full object-contain' src={`${import.meta.env.BASE_URL}${data.image}`} alt="" />
                                        </div>
                                        <p className='text-center font-semibold pb-2 px-5 text-[14px]'>{data.paregraph}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                <div className='grooming-wrapper py-6 w-full'>
                    <div className='text-center font-serif text-3xl'>Popular Cat Grooming Package </div>
                    <div className='grooming-cart-wrapper grid grid-cols-3 max-sm:flex max-sm:flex-col max-sm:w-full gap-5 px-40 max-sm:px-10 my-10 '>

                        {
                            GroomingCart.GroomingCart.map((item, index) => {
                                // if no extra service then disable the button
                                const isServiceDisable = !item.more_service?.length
                                // const text = getHeaderColor(index)
                                return (
                                    <div key={index} className='Cart-d bg-white opacity-80 rounded-md shadow-black/10 shadow-md flex flex-col items-center justify-between py-10 w-full'>
                                        <div className='flex flex-col justify-center items-center'>
                                            <span className={`font-bold text-2xl   px-10  mb-2 
                                              ${index === 0 ? "bg-cyan-100 text-cyan-400" : ""} ${index === 1 ? "bg-slate-400/20 text-slate-500" : ""} ${index === 2 ? "text-orange-300 bg-orange-200/30" : ""}
                                              `}>{item.heading}
                                            </span>
                                            <p className='font-semibold text-[17px]  mt-3' >{item.subHeading}</p>
                                            <p className='price-wrapper flex gap-2  px-5 py-3'>
                                                <s className='font-bold text-slate-500'>RS {item.orignal_Price}</s>
                                                <span className='price font-bold '>RS {item.final_Price}</span>
                                            </p>
                                            <div className='bg-gradient-to-r from-cyan-400 to-blue-500  w-[60%] h-[3px] mb-2'></div>

                                            <ul className={`un-order-list w-full px-25 flex flex-col ${viewmore ? "pt-5" : "py-5"}`}>
                                                {

                                                    item.Available_service?.map((item_) => {
                                                        return (

                                                            <li className='font-semibold text-[13px] flex items-center gap-1 text-slate-400'><Icon icon={"icons8:cat-footprint"} className='text-slate-400' fontSize={18} /> {item_}</li>

                                                        )
                                                    })
                                                }
                                            </ul>
                                            {viewmore === item.id ? <ul className='un-order-list w-full px-25 flex flex-col pb-5'>
                                                {

                                                    item.more_service?.map((item_) => {
                                                        return (

                                                            <li className='font-semibold text-[13px] flex items-center gap-1 text-slate-400'><Icon icon={"icons8:cat-footprint"} className='text-slate-400' fontSize={18} /> {item_}</li>

                                                        )
                                                    })
                                                }
                                            </ul> : ""}
                                        </div>
                                        <div className='flex flex-col items-center '>
                                            <div className='btn-wrapper w-full px-25 max-sm:px-15 py-3 '>
                                                <button disabled={isServiceDisable} onClick={() => handleMore(item.id)} className={`w-full border-1 ${isServiceDisable ? "border-gray-400 text-gray-400" :""} px-3 rounded-md p-1`} sx={{ width: "100%", height: 32, fontSize: 14, color: "black", border: "1px solid #d1cccc" }}>View More</button>
                                            </div>

                                            <div className='border border-slate-300 w-[70%] flex justify-center'> </div>

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
                                                }
                                                    onClick={() => handleOpen(item.subHeading, item.final_Price)}>Book Appointment</Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* <div className=' flex  border-4 border-red-800 pb-50 max-sm:px-2'> */}
                            <Modal className='px-55 flex items-center h-full max-sm:px-5 max-sm:flex'
                                open={open}
                            // onClose={handleClose}
                            >
                                <AnimatedCard className='h-[500px] w-full max-sm:flex max-sm:justify-center max-sm:mb-15'>
                                    <Box sx={{ height: "500px", width: "100%", bgcolor: "white", outline: 0, display: "flex", }}>
                                        {activeStep !== 1 && <div className='img-section min-w-[40%] h-full max-sm:hidden'>
                                            <img className='h-full w-full object-cover' src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg" alt="" />
                                        </div>
                                        }
                                        <div className='content w-full'>
                                            <div className='w-full flex justify-end'> <Icon fontSize={40} icon={"basil:cross-solid"} onClick={handleClose} /> </div >
                                            {/* stepper components */}
                                            <MYStepper />

                                        </div>

                                    </Box>
                                </AnimatedCard>
                            </Modal>
                        {/* </div> */}

                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-20'>
                <div className='flex w-full px-10 gap-10'>
                    <div className='w-full flex flex-col gap-10 justify-center'>
                        <h1 className='text-6xl font-bold'> A Unique <br />
                            Pet Grooming <br />Experience</h1>
                        <p className='font-semibold text-md'>At our pet grooming website, we’re not just offering a service—we’re curating an experience that celebrates every individual pet. Our digital platform is crafted to be warm, welcoming, and user-friendly, guiding you effortlessly from appointment booking to personalized care advice. We take pride in our extensive expertise combined with modern technology that ensures every pet’s grooming session is tailored to their unique needs. From interactive service menus to virtual pet consultations, our website is designed to enhance your pet’s grooming journey and ensure their time with us is both safe and enjoyable</p>
                    </div>
                    <div className='w-full max-sm:hidden'>
                        <img className='h-[500px] w-full object-cover max-sm:h-[300px]' src={`${import.meta.env.BASE_URL}pexels-rdne-7516109.jpg`} />
                    </div>
                </div>

                <div className='flex w-full px-10 gap-10'>
                    <div className='w-full max-sm:hidden'>
                        <img className='h-[500px] w-full object-cover max-sm:h-[300px]' src={`${import.meta.env.BASE_URL}pexels-tima-miroshnichenko-6130987.jpg`} />
                    </div>
                    <div className='w-full flex flex-col gap-10 justify-center'>
                        <h1 className='text-6xl font-bold'>Our Promise: <br /> Pet-Centric <br /> Excellence</h1>
                        <p className='font-semibold text-md'>We set ourselves apart by embracing a philosophy of genuine care and transparency. Every feature on our site reflects our commitment to making pet care accessible and exceptional. With detailed service descriptions, customer testimonials, and behind-the-scenes looks at our grooming process, we provide a complete, trustworthy overview of how we treat pets like family. Our real-time booking system, expert care tips, and community forum for pet owners all work together to ensure that, beyond just a grooming appointment, you join a vibrant community dedicated to the well-being of your pet. Choose us not only because we groom but because we build confidence, trust, and love between you and your furry companion.</p>
                    </div>
                </div>
            </div>

            <BlogCurrent />
            <Footer />
        </Fragment >
    )
}

export default PetGrooming