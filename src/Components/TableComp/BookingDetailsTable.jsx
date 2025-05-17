import React, { useEffect, useState } from 'react'


import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from '../NavComp/Navbar';
// import './App.css'


const findIsBooking = (data = {}) => {
    return (Object.values(data).length > 0) ? "Yes" : "No"
}

const columns = [
    { field: 'id', headerName: 'Booking Id', width: 120 },
    // { field: 'firstName', headerName: 'First name', width: 130 },
    // { field: 'lastName', headerName: 'Last name', width: 130 },
    {field: 'fullname', headerName: 'Full Name', width: 130},
    {
        field: 'phone_no',
        headerName: 'Phone No',
        type: 'number',
        width: 140,

    },
    {
        field: 'email',
        headerName: 'Email',
        width: 170,
    }, {
        field: 'address',
        headerName: 'Address',
        width: 140,
    },
    {
        field: 'no_of_pets',
        headerName: 'No of Pets',
    
        width: 100,
    },
    {
        field: 'pet_boarding',
        headerName: 'Pet Boarding',
        width: 140,
    },
    {
        field: 'pet_taxi',
        headerName: 'Pet Taxi',
        
        width: 100,
    },
    {
        field: 'pet_grooming',
        headerName: 'Pet Grooming',
        width: 150,
    },
    {
        field: 'booking_start_date',
        headerName: 'Booking Start Date',
        width: 150,
    },
    {
        field: 'booking_end_date',
        headerName: 'Booking End Date',
        width: 150,
    },
    {
        field: 'booking_time',
        headerName: 'Booking Time',
        width: 150,
    },


    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    // },
];

// const rows = [

//     { id: 1, lastName: 'Snow', firstName: 'Jon', phone_no: '', email: '', address: '', pet_name: '', pet_age: '', no_of_pets: '', booking_for: '', },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', },
//     { id: 3, lastName: '', firstName: '', phone_no: '', email: '', address: '', pet_name: '', pet_age: '', no_of_pets: '', booking_type: '', booking_start_date: '', booking_end_date: '', booking_item: '' },
//     { id: 4, lastName: '', firstName: '', phone_no: '', email: '', address: '', pet_name: '', pet_age: '', no_of_pets: '', booking_for: '', },
//     { id: 5, lastName: '', firstName: '', phone_no: '', email: '', address: '', pet_name: '', pet_age: '', no_of_pets: '', booking_for: '', },
//     { id: 6, lastName: '', firstName: '', phone_no: '', email: '', address: '', pet_name: '', pet_age: '', no_of_pets: '', booking_for: '', },
//     { id: 7, lastName: '', firstName: '', phone_no: '', email: '', address: '', pet_name: '', pet_age: '', no_of_pets: '', booking_for: '', },
//     { id: 8, lastName: '', firstName: '', phone_no: '', email: '', address: '', pet_name: '', pet_age: '', no_of_pets: '', booking_for: '', },
//     { id: 9, lastName: '', firstName: '', phone_no: '', email: '', address: '', pet_name: '', pet_age: '', no_of_pets: '', booking_for: '', },
//     { id: 10, lastName: '', firstName: '', phone_no: '', email: '', address: '', pet_name: '', pet_age: '', no_of_pets: '', booking_for: '', },

// ];


const paginationModel = { page: 0, pageSize: 5 };

const styledHeaders = columns.map(col => ({ ...col, headerClassName: "odd-row" }))
function BookingDetailsTable() {

    const [bookingDetails, setBookingDetails] = useState([])

    const fetchDataa = async () => {
        try {
            const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/booking/all-bookingdetails`;
            const fetcdata = await fetch(URL, {
                method: "GET",

            })
            const resdata = await fetcdata.json()
            console.log(resdata)
            setBookingDetails(resdata.data)

        } catch (err) {
            console.log("error", err)
        }
    }

    useEffect(() => {
        fetchDataa()
    }, [])


    const rows = bookingDetails.map((data) => {
        return (
            {
                id: data.booking_no, 
                // lastName: data.last_name, firstName: data.first_name, 
                fullname: `${data.first_name} ${data.last_name}`,
                phone_no: data.phone_no,
                email: data.email, address: data.address || "-",
                pet_boarding: findIsBooking(data.boardingDetails), pet_taxi: findIsBooking(data.taxiDetails),
                no_of_pets: data?.petDetails?.length || "NA", pet_grooming: findIsBooking(data.groomingDetails),
                booking_start_date: data.booking_start_date || "-", booking_end_date: data.booking_end_date || "-",
                booking_time: String(data.createdAt || "-").split("T")[0] || "-"
            }
        )
    })

    return (
        <div>
            <Navbar />
            <div className='m-5'>
                <Paper sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={styledHeaders}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        getRowClassName={(params) =>
                            params.indexRelativeToCurrentPage % 2 !== 0 ? 'odd-row' : ''
                        }
                        // className="custom-header"
                        sx={{
                            // border: 0,
                            '& .MuiDataGrid-columnHeader': {
                                // Header background color
                                color: 'white',               // Header text color
                                backgroundColor: 'black !important',
                                fontWeight: 'bold',
                                display: 'flex',
                                justifyContent: 'center',


                            },

                            "& .MuiDataGrid-row--borderBottom .MuiDataGrid-filler": {
                                backgroundColor: 'black !important',
                                display: 'flex',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }
                        }}

                    />
                </Paper>
            </div>
        </div>
    )
}

export default BookingDetailsTable