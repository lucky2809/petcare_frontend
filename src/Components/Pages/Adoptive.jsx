import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

function Adoptive() {
  return (
    <div className='px-20 max-sm:px-5 py-10 bg-slate-100 '>
      <div className='felx justify-center'>
        <p className='text-3xl text-center font-semibold flex justify-center gap-3'>Pets Available For Adoption Nearby....
          <Icon width={15} className='text-black border-1 font-extrabold max-sm:hidden' icon={"weui:arrow-filled"} style={{ marginTop: "4px", color: "", }} />
        </p>
      </div>
      <Link to={"/petfinding"} onClick={() => window.scrollTo(0, 0)}>
        <div className='grid grid-cols-4 max-sm:flex max-sm:flex-col gap-7 max-h-full border-red-600 py-10'>

          <div className='h-full border-2 border-slate-100 rounde-lg hover:border-2 hover:rounded-lg hover:border-green-800 shadow-lg'>

            <div className='rounded-lg h-80 w-full'>
              <img src="https://images.unsplash.com/photo-1585137173132-cf49e10ad27d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc2lhbiUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-t-lg h-full w-full' alt="" srcset="" />
            </div>
            <div className=''>
              <div className='felx justify-center items-center rounded-b-lg  text-center py-5 bg-white'>
                <p className='text-xl font-semibold'>Sir Woofinton</p>
              </div>
            </div>

          </div>
          <div className='h-full border-2 border-slate-100 rounde-lg hover:border-2 hover:rounded-lg hover:border-green-800 shadow-lg'>

            <div className='rounded-lg h-80 w-full'>
              <img src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75245832/1/?bust=1741949538&width=450" className='rounded-t-lg h-full w-full object-cover' alt="" srcset="" />
            </div>
            <div className=''>
              <div className='felx justify-center items-center rounded-b-lg  text-center py-5 bg-white'>
                <p className='text-xl font-semibold'>Sir Woofinton</p>
              </div>
            </div>

          </div>
          <div className='h-full border-2 border-slate-100 rounde-lg hover:border-2 hover:rounded-lg hover:border-green-800 shadow-lg'>

            <div className='rounded-lg h-80 w-full'>
              <img src="https://dbw3zep4prcju.cloudfront.net/animal/1590eb19-4191-41fd-a119-c17894e90843/image/57f62956-4cc5-4d30-86aa-20b7c3727965.jpg?versionId=OY6JKtfnPrw6hGsvtALIeArGPemFlMTn&bust=1737328273&width=450" className='rounded-t-lg h-full w-full' alt="" srcset="" />
            </div>
            <div className=''>
              <div className='felx justify-center items-center rounded-b-lg  text-center py-5 bg-white'>
                <p className='text-xl font-semibold'>Sir Woofinton</p>
              </div>
            </div>

          </div>


          <Link to={"/petfinding"}>
            <div className='h-full border-2 border-slate-100 rounde-lg shadow-2xl '>
              <div className='rounded-t-lg h-80 w-full bg-green-600 flex flex-col items-center justify-center gap-5'>
                <Icon icon={"meteor-icons:paw"} fontSize={80} color='white' />
                <p className='font-semibold text-white text-md px-10 text-center'>7 more pet availble for Petfinder</p>
              </div>
              <div className=''>
                <div className='felx justify-center items-center rounded-b-lg bg-green-800 text-center border-1 py-5  hover:bg-green-950'>

                  <p className='text-xl font-semibold text-white'>MEET THEM</p>
                </div>
              </div>

            </div>
          </Link>


        </div>
      </Link>
    </div>


  )
}

export default Adoptive