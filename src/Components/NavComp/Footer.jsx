import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'


function Footer() {
    return (

        <footer class="footer border-b border-sky-300 flex justify-around gap-10 mt-14 bg-black max-sm:flex-col max-sm:px-3 max-sm:py-4">
            <div class="digimax  w-[450px] h-72 max-sm:h-60 flex flex-col  max-sm:w-full">
                <p className='font-semibold text-3xl text-white max-sm:text-center mt-5'>Petpy.in</p>
                <p class="pareghraph  mt-6 font-sans max-sm:text-center max-sm:px- font-semibold text-slate-400 hover:text-white">Caring for a pet requires love, patience, and responsibility. Ensure your pet has a balanced diet suited to their breed and age. Fresh water should always be available. Regular vet check-ups help detect health</p>
                <div class="icone_box flex gap-1 mt-6 max-sm:justify-center max-sm:gap-3">
                    <div class="facebook h-10 w-10 rounded-full flex items-center justify-center bg-white hover:bg-slate-800 hover:text-white duration-700"><Icon width={30} icon="mdi:facebook" /> </div>
                    <div class="world  h-10 w-10 rounded-full flex items-center justify-center bg-white hover:bg-slate-800 hover:text-white duration-700"> <Icon width={30} icon={"line-md:instagram"} /> </div>
                    <div class="insta  h-10 w-10 rounded-full flex items-center justify-center bg-white hover:bg-slate-800 hover:text-orange-700 duration-700"><Icon width={30} icon={"line-md:twitter"} /> </div>

                    <div class="youtube  h-10 w-10 rounded-full flex items-center justify-center bg-white hover:bg-slate-800 hover:text-red-500 duration-700"> <Icon width={26} icon={"icon-park-solid:instagram-one"} /> </div>
                </div>
            </div>
            {/* <!--Start service section --> */}
            <div class="Service  text-white flex flex-col w-52 max-sm:w-full border border-red-600  max-sm:flex gap-2 border-none max-sm:mt-3 ">
                <p1 class="footer_p1 font-bold text-xl mt-9 text-blue-600 font-sans max-sm:mt-0 max-sm:text-center">Services</p1>
                <a class=" mt-6 text-sm max-sm:text-center font-semibold text-slate-400 hover:text-white" href="#">Pet Medical Administertion </a>
                <a class=" text-sm mt-1 max-sm:text-center font-semibold text-slate-400 hover:text-white " href="#">Overnight Pet Care</a>
                <a class="text-sm mt-1  max-sm:text-center font-semibold text-slate-400 hover:text-white" href="#">Puppu Day Care</a>
                <a class=" text-sm mt-1 max-sm:text-center font-semibold text-slate-400 hover:text-white" href="#">Training through Goodpup</a>
                <a class=" text-sm mt-1 max-sm:text-center font-semibold text-slate-400 hover:text-white" href="#">Brand Identity</a>
                <a class="text-sm mt-1 max-sm:text-center font-semibold text-slate-400 hover:text-white" href="#">Pet Housing Seting

                </a>
            </div>
            {/* <!--End service section --> */}

            {/* <!-- start support section --> */}
            <div class="Support  text-white flex flex-col w-44 max-sm:w-full">
                <p1 class="footer_p1 font-bold text-xl mt-9 text-blue-600 max-sm:mt-0 max-sm:text-center">Support</p1>
                <a class="font-sans mt-6 text-sm  max-sm:text-center font-semibold text-slate-400 hover:text-white" href="#">Help Center </a>
                <a class="font-sans text-sm mt-1 max-sm:text-center font-semibold text-slate-400 hover:text-white" href="#">FAQ</a>
                <a class="font-sans text-sm mt-1 max-sm:text-center font-semibold text-slate-400 hover:text-white" href="#">Ticket Support</a>
                <a class="font-sans text-sm mt-1 max-sm:text-center font-semibold text-slate-400 hover:text-white" href="#">Sale Support</a>
                <a class="font-sans text-sm mt-1 max-sm:text-center font-semibold text-slate-400 hover:text-white" href="#">Contact us</a>

            </div>
            {/* <!-- End support section --> */}
            {/* 
     <!-- Start company section --> */}
            <div class="Company   text-white flex flex-col w-44 max-sm:w-full">
                <p1 class="footer_p1 font-bold text-xl mt-9 text-blue-600 max-sm:mt-0 max-sm:text-center" >Company</p1>
                <a class="font-sans mt-6 text-sm max-sm:text-center font-semibold text-slate-400 hover:text-white" href="#">About us </a>
                <a class="font-sans text-sm mt-1 max-sm:text-center font-semibold text-slate-400 hover:text-white" href="#">Careers</a>
                <a class="font-sans text-sm mt-1 max-sm:text-center font-semibold text-slate-400 hover:text-white" href="#">Article & News</a>
                <a class="font-sans text-sm mt-1 max-sm:text-center font-semibold text-slate-400 hover:text-white" href="#">Legal Notice</a>

            </div>


        </footer>
    )
}

export default Footer