import { Icon } from '@iconify/react/dist/iconify.js'
import { Autocomplete, Avatar, Box, Button, Container, FormControlLabel, Paper, Radio, RadioGroup, TextField, Typography, Card, CardContent, ButtonBase, Modal } from '@mui/material'
import React, { useState } from 'react'
import { Map, Pets, CalendarToday, AccessTime, Style, Fullscreen } from "@mui/icons-material";
import { AnimatedCard } from '../StyledComponents/Styled';
import MYStepper from '../PetGroomingSteperComp/Stepper';
import BoardingStepper from './BoardingStepper.';
import { useDispatch, useSelector } from 'react-redux';
import { setBoardingDetails, setOwnerDetails, setPetDetails } from '../../store/petServices/actions';
import { useNavigate } from 'react-router-dom';



const Age = [
    { label: '3 - 6 Months' },
    { label: '6 Months - 1 Year' },
    { label: '1 Year - 2 Year' },
    { label: '2 Year - 3 Year' },
    { label: '3 Year - 4 Year' },
    { label: 'More Than 4 Year' },
]


const MyInput = ({ label = "", helperText = "", type = "" }) => {
    return <TextField
        label={label}
        helperText={helperText}
        type={type}

        InputLabelProps={{
            className: "-mt-2",
            sx: { fontSize: "1rem" },  // adjust lable font size
            '& .MuiInputBase-input': {
                color: 'green'
            },
            '& .Muifocused + .MuiFormhelpetText-root': {
                color: 'blue'
            },
        }}
        FormHelperTextProps={{
            sx: { color: 'red' }   // helper text style
        }}
        inputProps={{
            sx: {
                backgroundColor: 'transperent',
                fontSize: '1rem',
                height: '40px',
                padding: '0px',
            }
        }}
        sx={{
            my: 1.5,   // outer spacing
            '& .MuiInputBase-input': {
                color: 'green'
            }, '& .MuiInputLabel-formControl': {
                padding: '0px'
            },
        }}

    >
    </TextField>
}


function BoardingForm() {
    const ownerFormData = useSelector((state) => state.PetReducer.ownerDetails)
    const petFormData = useSelector((state) => state.PetReducer.petDetails)
    const boardingFormData = useSelector((state) => state.PetReducer.boardingDetails)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [pet, setPet] = useState("Bella");
    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    // const [formData, setFormData] = useState({})

    const [value, setValue] = useState("male")
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



    const handleChangeGender = (e) => {
        setValue(e.target.value)
    }
    // console.log("Value", value)

    const handleOwnerDetailsChange = (e) => {
        const { name, value } = e.target
        console.log("{ name, value }", { name, value })
        dispatch(setOwnerDetails({ ...ownerFormData, ...{ [name]: value } }))
    }
    console.log("ownerFormData", ownerFormData)

    const handlePetDetailsChange = (e) => {
        const { name, value } = e.target
        console.log("{ name, value }", { name, value })
        dispatch(setPetDetails({ ...petFormData, ...{ [name]: value } }))
    }
    console.log("petFormData", petFormData)

    const handleBoardingDetailsChange = (e) => {
        const { name, value } = e.target
        console.log("{ name, value }", { name, value })
        dispatch(setBoardingDetails({ ...boardingFormData, ...{ [name]: value } }))
    }
    console.log("boardingFormData", boardingFormData)


    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
            <div className=' border-green-800 w-full flex justify-between'>

                <div className='First w-full'>

                    <div className='logo w-full flex justify-center p-2'>
                        <h1 className="font-semibold text-2xl flex items-center gap-1 "><Icon width={42} icon={"solar:cat-outline"} className='text-4xl' /> Petpy.in  </h1>
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
                                }} value={ownerFormData.last_name} onChange={handleOwnerDetailsChange} name="last_namae" label="Last Name" variant="outlined" size='small' />
                            </div>
                            <div className='p-5 flex justify-between w-full '>
                                <TextField sx={{

                                    width: 300,


                                }} value={ownerFormData.email_address} onChange={handleOwnerDetailsChange} name="email_address" label="Email Address" variant="outlined" size='small' />
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
                                <div className='w-10'>
                                    <label className='text-md font-semibold w-10 ' htmlFor="">FROM</label>
                                </div>
                                <div className='w-full'>
                                    <input value={boardingFormData.from_address} onChange={handleBoardingDetailsChange} name="from_address" type="text" className='w-full p-3 outline-0' placeholder='Serach Pickup location' />
                                </div>
                            </div>
                        </div>

                        <div className='px-5 flex flex-col gap-5'>
                            <div className='flex justify-between px-2 gap-10 items-center bg-slate-100'>
                                <div className='w-10'>
                                    <label className='text-md font-sans w-10 font-semibold' htmlFor="">WHEN</label>
                                </div>
                                <div className='w-full'>
                                    <select onChange={(e) => handlerOption(e)} className='w-full p-3 outline-0' name="" id="">
                                        <option value="Now">Now</option>
                                        <option value="Schedule">Schedule</option>
                                    </select>
                                </div>
                            </div>

                            {
                                schedule === "Schedule" ? <div className='date-time flex justify-between px-2 gap-10 items-center bg-slate-100 '>
                                    <div className='w-10'>
                                        <label className='text-md font-sans w-10 font-semibold' htmlFor="">DEPART</label>
                                    </div>
                                    <div className='w-full flex'>
                                        <select value={boardingFormData.date} onChange={handleBoardingDetailsChange}  className='w-full p-3 outline-0' name="from_date" id="">
                                            {dates.map((date) => {
                                                return (
                                                    <option className='p-3 text-2xl'>{date}</option>
                                                )
                                            })}
                                        </select>
                                        <select value={boardingFormData.from_time} onChange={handleBoardingDetailsChange}  className='w-full p-3 outline-0' name="from_time" id="">
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
                        <div>
                            <div className='px-5 justify-between w-full flex flex-col gap-5'>
                                <div className='flex gap-5'>
                                    <div>
                                        <TextField sx={{

                                        }} value={petFormData.pet_name} onChange={handlePetDetailsChange} name="pet_name" label="Name Of Pet" variant="outlined" size='small' />
                                    </div>
                                    <div>
                                        <Autocomplete
                                            disablePortal
                                            options={Age}
                                            sx={{
                                                minWidth: 200
                                            }}
                                            renderInput={(params) => <TextField {...params} label="Age Of Your Pet" size='small' value={petFormData.pet_age} onChange={handlePetDetailsChange} name="pet_age" />}
                                        />
                                    </div>

                                    <div>
                                        <TextField sx={{

                                        }} value={petFormData.pet_breed} onChange={handlePetDetailsChange} name="pet_breed" label="Breed Of Your Pet" variant="outlined" size='small' />
                                    </div>
                                </div>
                                <div>
                                    <div className='w-full pr-9'>
                                        <textarea value={petFormData.pet_description} onChange={handlePetDetailsChange} name="pet_description" type="text" placeholder='Type Your Text' className='border-1 border-gray-400 rounded-md w-full p-2' rows={3} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-end p-10'>
                        <Button onClick={handleOpen}>Proceed</Button>
                    </div>
                    <div>
                        <Modal sx={{ height: screen, display: 'flex', justifyContent: "center", alignItems: 'center', px: 30 }}
                            open={open}
                            // onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <AnimatedCard className='h-[500px] w-full'>
                                <Box sx={{ height: "500px", width: "100%", bgcolor: "white", outline: 0, display: "flex", }}>
                                    <div className='img-section min-w-[40%] h-full'>
                                        <img className='h-full w-full object-cover' src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg" alt="" />
                                    </div>
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

                </div>

            </div>
        </div>
    )
}

export default BoardingForm