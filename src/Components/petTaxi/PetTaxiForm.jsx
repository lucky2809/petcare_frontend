import { Icon } from '@iconify/react/dist/iconify.js'
import { Autocomplete, Avatar, Box, Button, Container, FormControlLabel, Paper, Radio, RadioGroup, TextField, Typography, Card, CardContent, ButtonBase, Modal } from '@mui/material'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Map, Pets, CalendarToday, AccessTime, Style, Fullscreen } from "@mui/icons-material";
import { AnimatedCard } from '../StyledComponents/Styled';
import MYStepper from '../PetGroomingSteperComp/Stepper';
// import BoardingStepper from '../petBoarding/BoardingStepper';
import { useDispatch, useSelector } from 'react-redux';
import { setTaxiDetails, setOwnerDetails, setPetDetails, handleRemovePet, ADD_PET_DETAILS } from '../../store/petServices/actions';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import {
    MapContainer,
    TileLayer,
    Marker,
    Polyline,
    useMap,
    useMapEvents,
    Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Popup } from "react-leaflet";
// To make marker icons show correctly in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});


const Age = [
    { label: '3 - 6 Months' },
    { label: '6 Months - 1 Year' },
    { label: '1 Year - 2 Year' },
    { label: '2 Year - 3 Year' },
    { label: '3 Year - 4 Year' },
    { label: 'More Than 4 Year' },
]
const PetType = [
    { label: 'Cat' },
    { label: 'Dog' }
]
const selectOptions = [
    { label: "Indian Billi" },
    { label: "Spotted Cat" },
    { label: "Rusty-Spotted Cat" },

]

const ClickToSetEndPos = ({ setStartPos, setDestination }) => {
    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;
            setStartPos({ lat, lng });
            setDestination("Go to")
        }
    });
    return null;
};


const FlyToLocation = ({ position }) => {
    const map = useMap();
    useEffect(() => {
        if (position) {
            map.setView(position, 13);
        }
    }, [position, map]);
    return null;
};


function PetTaxiForm() {
    const ownerFormData = useSelector((state) => state.PetReducer.ownerDetails)
    const petForms = useSelector((state) => state.PetReducer.petDetails)
    const taxiFormData = useSelector((state) => state.PetReducer.taxiDetails)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);

    const [schedule, setSchedule] = useState("")
    const [value, setValue] = useState("male")

    const [startPos, setStartPos] = useState({
        "lat": 27.2028182,
        "lng": 78.0414463
    });
    const [endPos, setEndPos] = useState(null);
    const [destination, setDestination] = useState("Pet Shop")
    const [suggestions, setSuggestions] = useState([]);
    const [route, setRoute] = useState([]);
    const [distance, setDistance] = useState("");
    const [query, setQuery] = useState("")

    const startPopupRef = useRef();
    const endPopupRef = useRef();

    // Debounce utility
    const debounceRef = useRef();
    console.log("endPos", endPos)

    useEffect(() => {
        if (startPopupRef.current) {
            startPopupRef.current._source.openPopup();
        }
    }, [startPos]);

    useEffect(() => {
        if (endPopupRef.current) {
            endPopupRef.current._source.openPopup();
        }
    }, [endPos]);

    const debouncedFetchSuggestions = useCallback((value) => {
        setQuery(value);

        if (debounceRef.current) clearTimeout(debounceRef.current);

        debounceRef.current = setTimeout(async () => {
            if (value.length < 3) {
                setSuggestions([]);
                return;
            }

            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
            );
            const data = await res.json();
            const results = data.map((item) => ({
                label: item.display_name,
                lat: parseFloat(item.lat),
                lon: parseFloat(item.lon),
            }));

            setSuggestions(results);
        }, 500); // debounce delay
    }, []);
    console.log("results", suggestions)
    // Get current location as start
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setEndPos({ lat: latitude, lng: longitude });

            });
        }
    }, []);


    // Fetch route using OSRM
    const fetchRoute = async () => {
        // if (!endPos && query) {
        //     await handleSearch(query, setEndPos);
        // }
        if (!startPos || !endPos) return;

        const url = `https://router.project-osrm.org/route/v1/driving/${startPos.lng},${startPos.lat};${endPos.lng},${endPos.lat}?overview=full&geometries=geojson`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.routes?.length) {
            const routeCoords = data.routes[0].geometry.coordinates.map((pt) => [
                pt[1],
                pt[0],
            ]);
            setRoute(routeCoords);
            setDistance((data.routes[0].distance / 1000).toFixed(2) + " km");
        }
    };

    const NominatimSearch = async (query) => {
        const res = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
        );
        return await res.json();
    };

    const handleSearch = async (query, setFunc) => {
        const results = await NominatimSearch(query);
        if (results.length > 0) {
            const { lat, lon } = results[0];
            setFunc({ lat: parseFloat(lat), lng: parseFloat(lon) });
        }
    };


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

 const handlePetDetailsChange = (index, e, val, key) => {
         const updatedPets = [...petForms];
         const updatedPet = { ...updatedPets[index] }; // ✅ clone the specific object
 
         if (key) {
             updatedPet[key] = val?.label || '';
         } else {
             const { name, value } = e.target;
             updatedPet[name] = value;
         }
 
         updatedPets[index] = updatedPet;
         dispatch({ type: ADD_PET_DETAILS, payload: updatedPets });
     };
 
     console.log("petFormData", petForms)
     const handleAddPet = () => {
         const newPet = { pet_name: '', pet_age: null, pet_type: '', pet_breed: null };
         dispatch({ type: ADD_PET_DETAILS, payload: [...petForms, newPet] });
     };
 

    const handletaxiDetailsChange = (e) => {
        const { name, value } = e.target
        console.log("{ name, value }", { name, value })
        dispatch(setTaxiDetails({ ...taxiFormData, ...{ [name]: value } }))
    }
    console.log("taxiFormData", taxiFormData)


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
                                <h1 className='text-xl font-semibold'>PET TAXI</h1>
                            </div>
                            <div style={{ padding: "1rem" }}>
                                {/* <h3>Set Destination</h3> */}
                                <Autocomplete
                                    freeSolo
                                    disableClearable
                                    options={suggestions}
                                    getOptionLabel={(option) => typeof option === 'string' ? option : option.label}
                                    filterOptions={(x) => x} // disable internal filtering, rely on API
                                    value={query}
                                    onInputChange={(e, value, reason) => {
                                        if (reason === 'input') {
                                            setQuery(value);
                                            debouncedFetchSuggestions(value);
                                        }
                                    }}
                                    onChange={(e, value) => {
                                        if (value && typeof value !== 'string') {
                                            setEndPos({ lat: value.lat, lng: value.lon });
                                            setQuery(value.label); // display label in input
                                        } else if (typeof value === 'string') {
                                            // If user typed and pressed enter
                                            handleSearch(value, setEndPos);
                                        }
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            // sx={{
                                            //     input: { color: "black" },
                                            //     label: { color: "black" },
                                            //     '.MuiOutlinedInput-notchedOutline': {
                                            //         borderColor: 'black'
                                            //     }
                                            // }}
                                            label="End location"
                                            color="primary"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            className='w-full p-3 outline-0'
                                        />
                                    )}
                                />

                                <br />
                                <button onClick={fetchRoute} style={{ marginTop: "1rem" }}>
                                    Get Route
                                </button>
                                {distance && <p>Distance: {distance}</p>}
                            </div>
                            {/* <div className='flex justify-between gap-10 items-center px-2 bg-slate-100'>
                                <div className='w-10'>
                                    <label className='text-md font-semibold w-10 ' htmlFor="">TO</label>
                                </div>
                                <div className='w-full'>
                                    <input value={taxiFormData.from_address} onChange={handletaxiDetailsChange} name="from_address" type="text" className='w-full p-3 outline-0' placeholder='Search Pickup location' />
                                </div>
                            </div> */}
                        </div>


                        <div className='px-5 flex flex-col gap-5'>
                            {/* <div className='flex justify-between px-2 gap-10 items-center bg-slate-100'>
                                <div className='w-10'>
                                    <label className='text-md font-sans w-10 font-semibold' htmlFor="">WHEN</label>
                                </div>
                                <div className='w-full'>
                                    <select onChange={(e) => handlerOption(e)} className='w-full p-3 outline-0' name="" id="">
                                        <option value="Now">Now</option>
                                        <option value="Schedule">Schedule</option>
                                    </select>
                                </div>
                            </div> */}

                            {
                                schedule === "Schedule" ? <div className='date-time flex justify-between px-2 gap-10 items-center bg-slate-100 '>
                                    <div className='w-10'>
                                        <label className='text-md font-sans w-10 font-semibold' htmlFor="">DEPART</label>
                                    </div>
                                    <div className='w-full flex'>
                                        <select value={taxiFormData.date} onChange={handletaxiDetailsChange} className='w-full p-3 outline-0' name="from_date" id="">
                                            {dates.map((date) => {
                                                return (
                                                    <option className='p-3 text-2xl'>{date}</option>
                                                )
                                            })}
                                        </select>
                                        <select value={taxiFormData.from_time} onChange={handletaxiDetailsChange} className='w-full p-3 outline-0' name="from_time" id="">
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
                        {petForms.map((pet, index) => (
                                <div key={index} className="px-5 py-3  rounded flex flex-col gap-5">
                                    <div className="flex gap-5 items-center">
                                        <TextField
                                            value={pet.pet_name}
                                            onChange={(e) => handlePetDetailsChange(index, e)}
                                            name="pet_name"
                                            label="Name Of Pet"
                                            variant="outlined"
                                            size="small"
                                        />
                                        <Autocomplete
                                            disablePortal
                                            options={Age}
                                            sx={{ minWidth: 200 }}
                                            value={pet.pet_age}
                                            onChange={(e, val) => handlePetDetailsChange(index, e, val, "pet_age")}
                                            renderInput={(params) => (
                                                <TextField {...params} label="Age Of Your Pet" size="small" />
                                            )}
                                        />
                                        <Autocomplete
                                            disablePortal
                                            options={PetType}
                                            value={pet.pet_type}
                                            onChange={(e, val) => handlePetDetailsChange(index, e, val, "pet_type")}
                                            sx={{ minWidth: 115 }}
                                            renderInput={(params) => (
                                                <TextField {...params} size="small" label="Pet Type" />
                                            )}
                                        />
                                        <Autocomplete
                                            disablePortal
                                            options={selectOptions}
                                            sx={{ minWidth: 200 }}
                                            value={pet.pet_breed}
                                            onChange={(e, val) => handlePetDetailsChange(index, e, val, "pet_breed")}
                                            renderInput={(params) => (
                                                <TextField {...params} label="Breed Of Your Pet" size="small" />
                                            )}
                                        />

                                        {petForms.length > 1 && (
                                            <Button onClick={() => dispatch(handleRemovePet(index))} color="error" variant="outlined">
                                                Remove
                                            </Button>
                                        )}

                                    </div>

                                </div>
                            ))}

                            <div className=' flex justify-end mx-7'>
                                <Button
                                    startIcon={<ControlPointIcon />
                                    }
                                    variant="contained"
                                    color="primary"
                                    onClick={handleAddPet}
                                    className=""
                                >
                                    Add Pet

                                </Button>
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
                                        <taxiStepper />

                                    </div>

                                </Box>
                            </AnimatedCard>
                        </Modal>
                    </div>




                </div>

                <div className='Second border-1 w-full'>

                    <MapContainer
                        center={startPos || [20.5937, 78.9629]} // fallback center (India)
                        zoom={13}
                        style={{ flex: 1, height: "100%" }}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        {startPos && (
                            <Marker position={startPos}>
                                <Tooltip direction="bottom" offset={[-15, 25]} opacity={1} permanent>
                                    {destination}
                                </Tooltip>
                            </Marker>
                        )}
                        {endPos && (
                            <Marker position={endPos}>
                                <Tooltip direction="bottom" offset={[-15, 25]} opacity={1} permanent>
                                    You
                                </Tooltip>
                            </Marker>
                        )}
                        {route.length > 0 && <Polyline positions={route} color="blue" />}
                        <FlyToLocation position={startPos} />
                        {/* onclick feature for setStartPos position */}
                        <ClickToSetEndPos setStartPos={setStartPos} setDestination={setDestination} />
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}

export default PetTaxiForm