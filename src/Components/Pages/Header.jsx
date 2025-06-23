import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button } from '@mui/material'
import { AnimatedCard } from '../StyledComponents/Styled'
import { useDispatch, useSelector } from 'react-redux'
import { setBoardingDetails, setBookPriceAction, setOwnerDetails, setPetDetails } from '../../store/petServices/actions'
import { getNumberOfDays } from '../../utils/helperfunc/helper'



function Header() {


    const ownerFormData = useSelector((state) => state.PetReducer.ownerDetails)
    const boardingFormData = useSelector((state) => state.PetReducer.boardingDetails)
    // const petDetails = useSelector((state) => state.PetReducer.petDetails)


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const [select, setSelect] = useState({ pet: "petbording" })
    const [petselect, setPetSelect] = useState(1)


    const handleNoOfPets = (length) => {

        dispatch(setPetDetails(Array.from({ length }, () => ({ pet_name: '', pet_age: null, pet_breed: null }))))
        setPetSelect(length)


    }

    const changedata = (event) => {
        let getname = event.target.name
        let getvalue = event.target.value

        const obj = {
            [getname]: getvalue
        }
        let updatevalue = { ...select, ...obj }
        setSelect(updatevalue)
    }

    const handleOwnerDetailsChange = (e) => {
        const { name, value } = e.target
        console.log("{ name, value }", { name, value })
        dispatch(setOwnerDetails({ ...ownerFormData, ...{ [name]: value } }))
    }
    console.log("ownerFormData", ownerFormData)

    const handleBoardingDetailsChange = (e) => {
        const { name, value } = e.target
        console.log("boardingFormData.start_date && name === end_date", boardingFormData.start_date, name === "end_date", boardingFormData.start_date && name === "end_date")
        if (boardingFormData.start_date && name === "end_date") {
            const start_date = boardingFormData.start_date
            const end_date = value;

            const numberOfDays = getNumberOfDays(start_date, end_date);

            dispatch(setBoardingDetails({ ...boardingFormData, ...{ boarding_days: numberOfDays }, ...{ [name]: value } }))

        } else {
            dispatch(setBoardingDetails({ ...boardingFormData, ...{ [name]: value } }))

        }
    }
    console.log("boardingFormData", boardingFormData)


    const handleSubmit = (e) => {

        if (!ownerFormData.address || !boardingFormData.start_date || !boardingFormData.end_date) {
            return
        }

        e.preventDefault()
        // alert("sunmit")
        // navigate("/#form")
        window.location.href = "/#form"
        setToggle(!toggle)

    }

    console.log("toggle", toggle)



    return (
        <div>
            <div className='w-full flex items-center h-[600px] border border-black  '
            // onClick={() => window?.screenTop(0, 0)}
            >
                <div className='relative w-full'>
                    <img src={`${import.meta.env.BASE_URL}\WhatsApp Image 2025-04-05 at 14.58.09_b6086a91.jpg`} className='w-full h-[600px]' alt="" />
                </div>
                <AnimatedCard className=' px-30 max-sm:px-5 absolute max-sm:top-20 w-full  my-2 '>
                    <div className=' relative gap-4 w-full flex flex-col rounded-lg shadow-lg mt-12 my-6 bg-white opacity-95 py-10 '>
                        <div className=''>
                            <div className='max-sm:w-full rounded-lg flex items-center justify-between gap-4 px-10 pt-5 min-2xl:pt-10 bg-white w-fit max-sm:flex max-sm:flex-col'>
                                <button onClick={(event) => changedata(event)} name="pet" value={'petbording'} className={`px-5 p-2 max-sm:p-3 border-1 rounded-sm bg-white items-center flex gap-2 text-lg min-2xl:text-xl max-sm:text-sm max-sm:w-full  font-semibold ${select ? "border-3 border-green-700" : " "}`}>
                                    <input onChange={(event) => changedata(event)} type="radio" name="pet" value={'petbording'} checked={select.pet == "petbording"} className='w-5 h-5 ' />
                                    Pet Boarding</button>
                                <Link to={"/pettaxi"} className='max-sm:w-full'><button disabled onClick={(event) => changedata(event)} name="pet" value={'pettaxi'} className={`px-5 p-2 max-sm:p-3 border-1 border-gray-400 text-gray-400 rounded-sm bg-white items-center flex gap-2 text-lg min-2xl:text-xl max-sm:w-full max-sm:text-sm font-semibold `}>
                                    <input disabled onChange={(event) => changedata(event)} type="radio" name="pet" value={'pettaxi'} checked={select.pet == "pettaxi"} className='w-5 h-5' />
                                    Pet Taxi</button></Link>
                                <Link to={"/petgrooming"} className='max-sm:w-full'><button onClick={(event) => changedata(event)} name="pet" value={'petgrooming'} className={`px-5 p-2 max-sm:p-3 border-1 rounded-sm bg-white items-center flex gap-2 text-lg max-sm:w-full min-2xl:text-xl max-sm:text-sm font-semibold`}>
                                    <input onChange={(event) => changedata(event)} type="radio" name="pet" value={'petgrooming'} checked={select.pet == "petgrooming"} className='w-5 h-5' />
                                    Pet Grooming</button></Link>
                            </div>

                        </div>


                        {/* {select.pet === "petbording" ? */}

                        <form onSubmit={(e) => e.preventDefault()} className='max-sm:flex max-sm:flex-col flex flex-col gap-2'>
                            <div className=' rounded-lg flex max-sm:flex-col min-2xl:flex min-2xl:flex-col min-2xl:items-center gap-5 px-10  bg-white w-full'>
                                <div className='flex flex-col gap-2 w-full  min-2xl:flex min-2xl:gap-2'>
                                    <label htmlFor="" className='text-xl font-semibold max-sm:text-lg'>Boarding Near</label>
                                    <input value={ownerFormData.address} onChange={handleOwnerDetailsChange} name='address' type="address" className='px-2 border border-slate-500 outline-green-400 text-xl py-1 min-2xl:px-6 min-2xl:py-2 w-full hover:bg-sky-100  ' placeholder='India' required />
                                </div>
                                <div className='w-full flex flex-col gap-2 min-2xl:flex min-2xl:gap-2'>
                                    <label htmlFor="" className='text-xl font-semibold max-sm:text-lg'>For These Days</label>
                                    <div className='w-full flex items-center gap-3 min-2xl:flex min-2xl:gap-5 h-full'>
                                        <input value={boardingFormData.start_date} onChange={handleBoardingDetailsChange} name='start_date' type="date" className='px-2 min-2xl:px-6 min-2xl:py-2 border border-slate-500 outline-green-400 max-sm:text-sm py-1 hover:bg-sky-100 w-full text-md font-semibold' required />
                                        <Icon width={30} className='text-gray-300' icon={"mynaui:arrow-right"} />
                                        <input value={boardingFormData.end_date} onChange={handleBoardingDetailsChange} name='end_date' type="date" className='px-2 min-2xl:px-6 min-2xl:py-2 border border-slate-500 outline-green-400    max-sm:text-sm py-1 hover:bg-sky-100 w-full text-md font-semibold' required />
                                    </div>
                                </div>
                            </div>

                            <div className='px-10 flex  flex-col gap-2 w-full'>
                                <p className='w-full text-xl font-semibold max-sm:text-lg mt-2'>How Many Pets ?</p>
                                <div className='w-full flex gap-7 items-center max-sm:flex-col'>
                                    <div className=' w-full flex gap-2'>

                                        <button id='form' onClick={() => handleNoOfPets(1)} className={`w-full items-center p-2 max-sm:p-1 min-2xl:py-2 border-1 text-xl hover:bg-sky-100 ${petselect === 1 ? "bg-sky-100 border-3 border-green-700" : " "}`}>1</button>

                                        <button onClick={() => handleNoOfPets(2)} className={`w-full items-center p-2 max-sm:p-1  min-2xl:py-2 border-1 text-xl hover:bg-sky-100 ${petselect === 2 ? "bg-sky-100 border-3 border-green-600" : " "}`}>2</button>

                                        <button onClick={() => handleNoOfPets(4)} className={`w-full items-center p-2 max-sm:p-1 min-2xl:py-2 border-1 text-xl hover:bg-sky-100 ${petselect === 4 ? "bg-sky-100 border-3 border-green-600" : " "}`}>3+</button>
                                    </div>

                                    <div className=' w-full items-center'>
                                        {/* <a href={toggle ? "#form" : " "}> */}
                                        <button className='w-full p-2 min-2xl:py-2 text-lg min-2xl:text-2xl font-semibold rounded-lg text-white bg-green-700 hover:bg-green-950' onClick={(e) => handleSubmit(e)}>Get Price</button>
                                        {/* </a> */}
                                    </div>
                                </div>
                            </div>

                        </form>
                        {/* : <div> </div> */}
                        {/* } */}

                        <div className=' w-full absolute -top-7 max-sm:-top-7 min-2xl:-top-8 px-35 max-sm:px-6 max-lg:px-7'>

                            <div className=' w-full flex max-sm:flex-col max-sm:gap-0 gap-6 items-center text-xl max-sm:text-sm min-2xl:text-2xl font-semibold p-5 max-sm:py-3 min-2xl:py-5 px-10 rounded-lg shadow-lg  bg-white justify-center '>
                                <div>
                                    <p>I'm looking for Service for My : </p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <input type="checkbox" className='h-5 w-5 min-2xl:h-7 min-2xl:w-7' name="" id="" checked />
                                    <p>Cat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedCard>
            </div>

            <div className={`price w-full ${toggle ? "" : ""} bg-slate-100 max-sm:flex max-sm:flex-col max-sm:mt-20`}>
                {toggle ?
                    <div className='h-full px-35 max-sm:px-2 max-lg:px-10 flex max-sm:flex-col py-10 gap-10 max-sm:gap-5'>
                        <div className=' flex justify-between gap-3 p-5 w-full bg-white rounded-lg shadow-lg'>

                            <div className='flex justify-center items-center gap-4'>
                                <div className='dogfood h-15 w-15 max-sm:h-12 max-sm:w-12 flex justify-center items-center'>
                                    <img src={`${import.meta.env.BASE_URL}WhatsApp Image 2025-04-02 at 13.04.24_6a24cd23.jpg`} ></img>

                                </div>
                                <p className=' flex justify-center text-center text-lg max-sm:text-sm font-semibold'>Price With Suplies</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Link to={"petboarding"}>
                                    <button onClick={() => dispatch(setBookPriceAction(750))} className='px-2 flex gap-5 max-sm:gap-2 items-center p-1 text-lg max-sm:text-sm font-semibold rounded-lg bg-green-700 text-white hover:bg-green-950'>
                                        <div className='flex items-center'><Icon width={20} className='text-white ' icon={"mdi:rupee"} />750/-</div>
                                        <div><Icon width={20} className='text-white' icon={"mingcute:arrow-right-fill"} /></div>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className=' flex justify-between p-5 w-full bg-white rounded-lg shadow-lg'>

                            <div className='flex justify-center items-center gap-4'>
                                <div className='dognofood h-15 w-15 max-sm:h-12 max-sm:w-12 flex justify-center items-center'>
                                    <img src={`${import.meta.env.BASE_URL}WhatsApp Image 2025-04-02 at 13.04.17_bf760103.jpg`} ></img>
                                </div>
                                <p className=' flex justify-center text-center text-lg max-sm:text-sm font-semibold'>Price Without Suplies</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Link to={"petboarding"}>
                                    <button onClick={() => dispatch(setBookPriceAction(550))} type='primary' className='px-2 flex gap-5 max-sm:gap-2 items-center p-1 text-lg max-sm:text-sm font-semibold rounded-lg bg-green-700 text-white hover:bg-green-950'>
                                        <div className='flex items-center'><Icon width={20} className='text-white' icon={"mdi:rupee"} />550/-</div>
                                        <div><Icon width={20} className='text-white' icon={"mingcute:arrow-right-fill"} /></div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div></div>
                }
                {/* <Button type='primary'>click me </Button> */}
            </div>

        </div>
    )
}

export default Header