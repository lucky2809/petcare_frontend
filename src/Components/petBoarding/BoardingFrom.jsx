import { Icon } from '@iconify/react/dist/iconify.js'
import { Autocomplete, Avatar, Box, Button, Container, FormControlLabel, Paper, Radio, RadioGroup, TextField, Typography, Card, CardContent, ButtonBase, Modal } from '@mui/material'
import React, { useState } from 'react'
import { Map, Pets, CalendarToday, AccessTime, Style, Fullscreen } from "@mui/icons-material";
import { AnimatedCard } from '../StyledComponents/Styled';
import MYStepper from '../PetGroomingSteperComp/Stepper';
import BoardingStepper from './BoardingStepper.';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PET_DETAILS, handleRemovePet, handleToggleModal, setActiveStepAction, setBoardingDetails, setBookPriceAction, setOwnerDetails, setPetDetails } from '../../store/petServices/actions';
import { Link, useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import {
    MapContainer,
    TileLayer,
    Marker,
    Polyline,
    Tooltip,
    Popup,
} from "react-leaflet";
import PetDetails from '../FormComp/PetDetails';
import { getPetLength } from '../../utils/helperfunc/helper';



// const MyInput = ({ label = "", helperText = "", type = "" }) => {
//     return <TextField
//         label={label}
//         helperText={helperText}
//         type={type}

//         InputLabelProps={{
//             className: "-mt-2",
//             sx: { fontSize: "1rem" },  // adjust lable font size
//             '& .MuiInputBase-input': {
//                 color: 'green'
//             },
//             '& .Muifocused + .MuiFormhelpetText-root': {
//                 color: 'blue'
//             },
//         }}
//         FormHelperTextProps={{
//             sx: { color: 'red' }   // helper text style
//         }}
//         inputProps={{
//             sx: {
//                 backgroundColor: 'transperent',
//                 fontSize: '1rem',
//                 height: '40px',
//                 padding: '0px',
//             }
//         }}
//         sx={{
//             my: 1.5,   // outer spacing
//             '& .MuiInputBase-input': {
//                 color: 'green'
//             }, '& .MuiInputLabel-formControl': {
//                 padding: '0px'
//             },
//         }}

//     >
//     </TextField>
// }


function BoardingForm() {
    const ownerFormData = useSelector((state) => state.PetReducer.ownerDetails)
    const boardingFormData = useSelector((state) => state.PetReducer.boardingDetails)
    const activeStep = useSelector((state) => state.PetReducer.activeStep)
    const open = useSelector((state) => state.PetReducer.isOpen)
    const BoadingPrice = useSelector((state) => state.PetReducer.bookPrice)
    const petFormData = useSelector((state) => state.PetReducer.petDetails)

    const PET_LENGTH = getPetLength(petFormData)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const [open, setOpen] = useState(false);

    const [schedule, setSchedule] = useState("")
    const handlerOption = (e) => {
        // e.priventDefoult()
        const value = e.target.value
        setSchedule(value)

    }
    // for date pick up
    const getPickDate = () => {
        const pickDates = []
        const today = new Date()

        for (let i = 0; i <= 7; i++) {
            const nextDate = new Date()
            nextDate.setDate(today.getDate() + i)
            const formatted = nextDate.toISOString().split('T')[0]
            pickDates.push(formatted)
        }
        return pickDates
    }
    const pickDates = getPickDate()

    console.log(pickDates)

    // for drop of date
    const getDropDate = () => {
        const dropDates = []
        const today = new Date()
        // const today = new boarding.start_date()

        for (let i = 0; i <= 10; i++) {
            const nextDate = new Date()
            nextDate.setDate(today.getDate() + i)
            const formatted = nextDate.toISOString().split('T')[0]
            dropDates.push(formatted)
        }
        return dropDates
    }
    const dropDates = getDropDate()



    // for time

    // Helper: Round up to the next 30-minute slot
    const getRoundedTime = (date, intervalMinutes) => {
        const ms = 1000 * 60 * intervalMinutes;
        return new Date(Math.ceil(date.getTime() / ms) * ms);
    };

    // Generate time slots from now
    const getTimeSlots = (count, intervalMinutes) => {
        const slots = [];
        let current = getRoundedTime(new Date(), intervalMinutes);

        for (let i = 0; i < count; i++) {
            const hours = current.getHours().toString().padStart(2, '0');
            const minutes = current.getMinutes().toString().padStart(2, '0');
            const formatted = `${hours}:${minutes}`;
            slots.push(formatted);
            current = new Date(current.getTime() + intervalMinutes * 60 * 1000);
        }

        return slots;
    };

    const timeSlots = getTimeSlots(10, 30);



    // const handleChangeGender = (e) => {
    //     setValue(e.target.value)
    // }
    // // console.log("Value", value)

    const handleOwnerDetailsChange = (e) => {
        const { name, value } = e.target
        console.log("{ name, value }", { name, value })
        dispatch(setOwnerDetails({ ...ownerFormData, ...{ [name]: value } }))
    }
    console.log("ownerFormData", ownerFormData)

    // const handlePetDetailsChange = (e, val, key) => {
    //     const { name, value } = e.target
    //     console.log("{ name, value }", { name, value , key, val})
    //     if(key) {
    //         dispatch(setPetDetails({ ...petFormData, ...{ [key]: val.label } }))

    //     } else {
    //         dispatch(setPetDetails({ ...petFormData, ...{ [name]: value } }))

    //     }
    // }

    const handleBoardingDetailsChange = (e) => {
        const { name, value } = e.target
        console.log("{ name, value }", { name, value })
        dispatch(setBoardingDetails({ ...boardingFormData, ...{ [name]: value } }))
    }
    console.log("boardingFormData", boardingFormData)



    const handleOpen = () => {
        dispatch(handleToggleModal(true))
    };
    const handleClose = () => {
        dispatch(handleToggleModal(false))
        dispatch(setBookPriceAction(0))
    };

    const handleBooking = (price) => {
        dispatch(setBookPriceAction(price))
        handleOpen()
    }

    return (
        <div className=' pb-10 max-sm:pb-40'>

            <div className=' border-green-800 w-full flex justify-between px-10 max-sm:px-5 '>

                <div className='First w-full'>

                    <div className='logo flex text-center items-center h-fit justify-center mt-6 py-6'>
                        <div className='flex'>
                            <button className='rounded-full bg-black text-white p-3' onClick={() => navigate(-1)}><Icon width={20} icon={"fluent-mdl2:back"} className='' /></button>
                        </div>
                        <div className='w-full flex justify-center'>
                            <h1 className="font-bold text-2xl">Pet Boarding </h1>
                        </div>
                    </div>
                    <div className='border-1 border-slate-400 rounded-lg mb-4  flex flex-col gap-3 p-4 shadow-md'>
                        <div className=''>
                            <h1 className='text-xl font-semibold'>Pet Owner Details</h1>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className=' flex  max-sm:gap-3 justify-between w-full'>

                                <TextField sx={{
                                    width: 300,
                                }}
                                    // className='min-w-300 max-sm:w-full' 
                                    value={ownerFormData.first_name} onChange={handleOwnerDetailsChange} name="first_name" label="First Name" size='small' required />

                                <TextField sx={{
                                    width: 300,
                                }}
                                    value={ownerFormData.last_name} onChange={handleOwnerDetailsChange} name="last_name" label="Last Name" variant="outlined" size='small' required />
                            </div>
                            <div className=' flex justify-between max-sm:gap-3 w-full '>
                                <TextField sx={{
                                    width: 300,
                                }}
                                    value={ownerFormData.email} onChange={handleOwnerDetailsChange} name="email" label="Email Address" variant="outlined" size='small' required />
                                <TextField sx={{
                                    width: 300,
                                }}
                                    value={ownerFormData.phone_no} onChange={handleOwnerDetailsChange} name="phone_no" type='number' label="Phone No." variant="outlined" size='small' required />
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col gap-5 border-2 p-4 mb-5 border-gray-400 rounded-lg shadow-md'>
                        <div className=' flex flex-col gap-3'>
                            <div className=''>
                                <h1 className='text-xl font-semibold'>Boarding</h1>
                            </div>
                            <div className='flex justify-between gap-10 items-center px-2 bg-slate-100'>
                                <div className='w-25 '>
                                    <label className='text-md font-semibold w-20 ' htmlFor="">ADDRESS</label>
                                </div>
                                <div className='w-full'>
                                    <input value={ownerFormData.address} onChange={handleOwnerDetailsChange} name="address" type="address" className='w-full p-3 outline-0' placeholder='Drop Your Location' required />
                                </div>
                            </div>
                        </div>

                        <div className=' flex flex-col gap-5'>
                            <div className='flex justify-between p-2 gap-10 items-center bg-slate-100'>
                                <div className='w-25'>
                                    <label className='text-md font-sans w-10 font-semibold' htmlFor="">WHEN</label>
                                </div>
                                <div className='w-full'>

                                    {boardingFormData?.start_date ? <select onChange={(e) => handlerOption(e)} className='w-full p-3 outline-0' name="" id=""> <option value="Schedule">Schedule</option></select> : <select onChange={(e) => handlerOption(e)} className='w-full p-3 outline-0' name="" id=""> <option value="Now">Now</option> <option value="Schedule">Schedule</option> </select>}

                                </div>
                            </div>

                            {
                                boardingFormData.start_date || schedule === "Schedule" ?
                                    <div className='date-time flex max-sm:flex max-sm:flex-col items-center w-full bg-slate-100 '>
                                        <div className='w-full'>
                                            <div className='px-4 pt-2'>
                                                <label className='text-md font-sans w-10 font-semibold' htmlFor="">PICK UP</label>
                                            </div>
                                            <div className='w-full flex'>
                                                <select value={boardingFormData.start_date} onChange={handleBoardingDetailsChange} className='w-full p-3  outline-0' name="start_date" id="">
                                                    {pickDates.map((date) => {
                                                        return (
                                                            <option className='p-3 text-2xl'>{date}</option>
                                                        )
                                                    })}
                                                </select>
                                                <select value={boardingFormData.booking_time} onChange={handleBoardingDetailsChange} className='w-full p-3 outline-0' name="booking_time" id="">
                                                    {timeSlots.map((time) => (
                                                        <option value={time} key={time}>{time}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="p-0 m-0 max-sm:hidden">
                                            <Icon height={50} width={0} icon={"ph:line-vertical-thin"} className='m-0 p-0' />
                                        </div>
                                        <div className='w-full pt-2'>
                                            <div className='px-4'>
                                                <label className='text-md font-sans w-10 font-semibold' htmlFor="">DROP OFF</label>
                                            </div>
                                            <div className='w-full flex'>
                                                <select value={boardingFormData.end_date} onChange={handleBoardingDetailsChange} className='w-full p-3 outline-0' name="start_date" id="">
                                                    {dropDates.map((date) => {
                                                        return (
                                                            <option className='p-3 text-2xl'>{date}</option>
                                                        )
                                                    })}
                                                </select>
                                                <select value={boardingFormData.booking_time} onChange={handleBoardingDetailsChange} className='w-full p-3 outline-0' name="booking_time" id="">
                                                    {timeSlots.map((time) => (
                                                        <option value={time} key={time}>{time}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    : ""
                            }
                        </div>
                    </div>
                    <div className='border-2 p-4 border-gray-400 mb-5 rounded-lg shadow-md'>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-xl font-semibold'>Pets Details</h1>
                        </div>
                        <PetDetails />
                    </div>
                    <div className='border-2  border-gray-400 rounded-lg shadow-md'>
                        {BoadingPrice === 0 ?
                            <div className='px-5 max-sm:px-2 max-lg:px-10 flex flex-col max-sm:flex-col py-10 max-sm:py-5 gap-7 max-sm:gap-5'>
                                <div className=' flex justify-between gap-3 px-5 w-full bg-white rounded-lg shadow-md'>

                                    <div className='flex justify-center items-center gap-4'>
                                        <div className='dogfood h-15 w-10 max-sm:h-12 max-sm:w-12 flex justify-center items-center'>
                                            <img src={`${import.meta.env.BASE_URL}WhatsApp Image 2025-04-02 at 13.04.24_6a24cd23.jpg`} ></img>

                                        </div>
                                        <p className=' flex justify-center text-center text-lg max-sm:text-sm font-semibold'>Price With Suplies</p>
                                    </div>
                                    <div className='flex justify-center items-center'>

                                        <button onClick={() => handleBooking(750)} className='px-2 flex gap-5 max-sm:gap-2 items-center p-1 text-lg max-sm:text-sm font-semibold rounded-lg bg-green-700 text-white hover:bg-green-950'>
                                            <div className='flex items-center'><Icon width={20} className='text-white ' icon={"mdi:rupee"} />750/-</div>
                                            <div><Icon width={20} className='text-white' icon={"mingcute:arrow-right-fill"} /></div>
                                        </button>

                                    </div>
                                </div>

                                <div className=' flex justify-between px-5 w-full bg-white rounded-lg shadow-md'>

                                    <div className='flex justify-center items-center gap-4'>
                                        <div className='dognofood h-15 w-10 max-sm:h-12 max-sm:w-12 flex justify-center items-center'>
                                            <img src={`${import.meta.env.BASE_URL}WhatsApp Image 2025-04-02 at 13.04.17_bf760103.jpg`} ></img>
                                        </div>
                                        <p className=' flex justify-center text-center text-lg max-sm:text-sm font-semibold'>Price Without Suplies</p>
                                    </div>
                                    <div className='flex justify-center items-center'>

                                        <button onClick={() => handleBooking(550)} type='primary' className='px-2 flex gap-5 max-sm:gap-2 items-center p-1 text-lg max-sm:text-sm font-semibold rounded-lg bg-green-700 text-white hover:bg-green-950'>
                                            <div className='flex items-center'><Icon width={20} className='text-white' icon={"mdi:rupee"} />550/-</div>
                                            <div><Icon width={20} className='text-white' icon={"mingcute:arrow-right-fill"} /></div>
                                        </button>

                                    </div>
                                </div>
                            </div>
                            : <div className='flex justify-end p-7 gap-6'>
                                <span className='items-center justify-start w-full text-lg flex'>Move forward to complete the action</span>

                                <Button onClick={handleOpen} variant="contained" sx={{
                                    backgroundColor: "#388E3C",
                                    borderRadius: "9px",
                                    ":hover": {
                                        backgroundColor: "#032e15"
                                    }
                                }}>Proceed</Button>
                            </div>
                        }
                    </div>
                    <div>
                        <Modal className='px-55 flex items-center h-full max-sm:px-5 max-sm:flex'
                            open={open}
                            // onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <AnimatedCard className='h-[500px] w-full max-sm:flex max-sm:justify-center max-sm:mb-15'>
                                <Box sx={{ height: "500px", width: "100%", bgcolor: "white", outline: 0, display: "flex", }}>
                                    {activeStep !== 0 && activeStep !== PET_LENGTH - 1 && activeStep !== PET_LENGTH + 3 && <div className='img-section min-w-[30%] h-full max-sm:hidden'>
                                        <img className='h-full w-full object-cover' src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg" alt="" />
                                    </div>}
                                    <div className='content w-full'>
                                        <div className='w-full flex justify-end'> <Icon fontSize={40} icon={"basil:cross-solid"} onClick={handleClose} /> </div >
                                        {/* stepper components */}
                                        <BoardingStepper />
                                    </div>
                                </Box>
                            </AnimatedCard>
                        </Modal>
                    </div>




                </div>

                <div className='Second  rounded-xl w-full m-6 max-sm:hidden'>
                    <MapContainer center={[27.1767, 78.0081]} zoom={13} scrollWheelZoom={false} style={{ flex: 1, height: "100%", borderRadius: "10px" }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[27.1767, 78.0081]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}

export default BoardingForm