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

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const [open, setOpen] = useState(false);

    const [schedule, setSchedule] = useState("")
    const handlerOption = (e) => {
        // e.priventDefoult()
        const value = e.target.value
        setSchedule(value)

    }
    // for date
    const getNextDate = () => {
        const dates = []
        const today = new Date()

        for (let i = 0; i <= 7; i++) {
            const nextDate = new Date()
            nextDate.setDate(today.getDate() + i)
            const formatted = nextDate.toISOString().split('T')[0]
            dates.push(formatted)
        }
        return dates
    }
    const dates = getNextDate()

    console.log(dates)


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
        <div>

            <div className=' border-green-800 w-full flex justify-between'>

                <div className='First w-full'>

                    <div className='logo flex text-center items-center h-fit justify-center mt-6 p-2'>
                        <div className='flex'>
                            <Button sx={{
                                backgroundColor: 'black',
                                color: 'white',
                                fontWeight: 'bold'

                            }} onClick={() => navigate(-1)}><Icon width={25} icon={"fluent-mdl2:back"} className='text-4xl' /></Button>
                        </div>
                        <div className='w-full flex justify-center'>
                            <h1 className="font-semibold text-2xl">PET BOARDING </h1>
                        </div>
                    </div>
                    <div className='border-1 m-2 flex flex-col gap-3'>
                        <div className='px-6 mt-3'>
                            <h1 className='text-xl font-semibold'>Pet Owner Details</h1>
                        </div>
                        <div className=''>
                            <div className='px-5 flex justify-between w-full'>

                                <TextField sx={{
                                    width: 300,
                                }} value={ownerFormData.first_name} onChange={handleOwnerDetailsChange} name="first_name" label="First Name" variant="outlined" size='small' />

                                <TextField sx={{
                                    width: 300,
                                }} value={ownerFormData.last_name} onChange={handleOwnerDetailsChange} name="last_name" label="Last Name" variant="outlined" size='small' />
                            </div>
                            <div className='p-5 flex justify-between w-full '>
                                <TextField sx={{

                                    width: 300,


                                }} value={ownerFormData.email} onChange={handleOwnerDetailsChange} name="email" label="Email Address" variant="outlined" size='small' />
                                <TextField sx={{

                                    width: 300,


                                }} value={ownerFormData.phone_no} onChange={handleOwnerDetailsChange} name="phone_no" type='number' label="Phone No." variant="outlined" size='small' />
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className=' px-5 flex flex-col gap-3'>
                            <div className='p-2'>
                                <h1 className='text-xl font-semibold'>Boarding</h1>
                            </div>
                            <div className='flex justify-between gap-10 items-center px-2 bg-slate-100'>
                                <div className='w-25 '>
                                    <label className='text-md font-semibold w-20 ' htmlFor="">ADDRESS</label>
                                </div>
                                <div className='w-full'>
                                    <input value={ownerFormData.address} onChange={handleOwnerDetailsChange} name="address" type="text" className='w-full p-3 outline-0' placeholder='Drop Your Location' />
                                </div>
                            </div>
                        </div>

                        <div className='px-5 flex flex-col gap-5'>
                            <div className='flex justify-between px-2 gap-10 items-center bg-slate-100'>
                                <div className='w-25'>
                                    <label className='text-md font-sans w-10 font-semibold' htmlFor="">WHEN</label>
                                </div>
                                <div className='w-full'>

                                    {boardingFormData?.start_date ? <select onChange={(e) => handlerOption(e)} className='w-full p-3 outline-0' name="" id=""> <option value="Schedule">Schedule</option></select> : <select onChange={(e) => handlerOption(e)} className='w-full p-3 outline-0' name="" id=""> <option value="Now">Now</option> <option value="Schedule">Schedule</option> </select>}

                                </div>
                            </div>

                            {
                                boardingFormData.start_date || schedule === "Schedule" ? <div className='date-time flex justify-between px-2 gap-10 items-center bg-slate-100 '>
                                    <div className='w-10'>
                                        <label className='text-md font-sans w-10 font-semibold' htmlFor="">DEPART</label>
                                    </div>
                                    <div className='w-full flex'>
                                        <select value={boardingFormData.start_date} onChange={handleBoardingDetailsChange} className='w-full p-3 outline-0' name="start_date" id="">
                                            {dates.map((date) => {
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
                                    : ""
                            }
                        </div>
                    </div>
                    <div className=''>
                        <div className='p-5 flex flex-col gap-5'>
                            <h1 className='text-xl font-semibold px-2'>Pets Details</h1>
                        </div>
                        <PetDetails />
                    </div>
                    {BoadingPrice === 0 ?
                        <div className='px-5 max-sm:px-2 max-lg:px-10 flex flex-col max-sm:flex-col py-10 gap-7 max-sm:gap-5'>
                            <div className=' flex justify-between gap-3 p-5 w-full bg-white rounded-lg shadow-md'>

                                <div className='flex justify-center items-center gap-4'>
                                    <div className='dogfood h-15 w-15 max-sm:h-12 max-sm:w-12 flex justify-center items-center'>
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

                            <div className=' flex justify-between p-5 w-full bg-white rounded-lg shadow-md'>

                                <div className='flex justify-center items-center gap-4'>
                                    <div className='dognofood h-15 w-15 max-sm:h-12 max-sm:w-12 flex justify-center items-center'>
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
                        : <div className='flex justify-end p-10'>

                            <Button onClick={handleOpen} variant="contained" sx={{
                                backgroundColor: "#388E3C",
                                borderRadius: "9px",
                                ":hover": {
                                    backgroundColor: "#032e15"
                                }
                            }}>Proceed</Button>
                        </div>
                    }
                    <div>
                        <Modal sx={{ height: screen, display: 'flex', justifyContent: "center", alignItems: 'center', px: 30 }}
                            open={open}
                            // onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <AnimatedCard className='h-[500px] w-full'>
                                <Box sx={{ height: "500px", width: "100%", bgcolor: "white", outline: 0, display: "flex", }}>
                                    {activeStep !== 0 && activeStep !== 4 && <div className='img-section min-w-[30%] h-full'>
                                        <img className='h-full w-full object-cover' src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg" alt="" />
                                    </div>}
                                    <div className='content  h-full w-full'>
                                        <div className='w-full flex justify-end'> <Icon fontSize={40} icon={"basil:cross-solid"} onClick={handleClose} /> </div >
                                        {/* stepper components */}
                                        <BoardingStepper />

                                    </div>

                                </Box>
                            </AnimatedCard>
                        </Modal>
                    </div>




                </div>

                <div className='Second border-1 w-full'>
                    <MapContainer center={[27.1767, 78.0081]} zoom={13} scrollWheelZoom={false} style={{ flex: 1, height: "100%" }}>
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