import React, { useState } from 'react'
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';


function Navbar() {
    const [toggleBtn, setToggleBtn] = useState(false)
  
    console.log(toggleBtn)
    return (
      <>
   
        <header className="header w-full sticky top-0 px-15 bg-slate-100 max-sm:px-2 z-50  ">
          <nav className="navbar flex justify-between items-center    p-2 py-4  border-b border-slate-300 max-sm:py-4 text-black">
            <div className='flex gap-2 items-center'>
            <p className="h-15 w-15 "><img className='h-full w-full object-cover' src={`${import.meta.env.BASE_URL}logo.png`} alt="" /> </p>
            <div className='leading-none'>
              <p className='text-md font-bold w-25'>TOE BEANS APARTMENT</p>
              {/* <p className='text-lg font-semibold font-serif m-0 p-0'>APARTMENT</p> */}
            </div>
            </div>
            <ul className="un-order-list flex gap-10 items-center  max-sm:hidden font-medium text-[15px]" >
            <li><Link  to={"/"}>HOME</Link></li>
              <li><Link  to={"/petfinding"}>ABOUT</Link></li>
              <li><Link to={"/"} >SERVICE</Link></li>
              <li><Link to={"/bloges"}>BLOGS</Link></li>
              <li><Link to={"/petfinding"}>ADOPTION</Link></li>
              <li><Link to={"/petgrooming"}>PET GROOMING </Link></li>
              <li className='flex items-center'><Link to={"/signin"}>LOGIN</Link>
              {/* <Icon fontSize={23}  icon={"oui:arrow-down"}></Icon>  */}
              </li>

            </ul>
            <div className='flex items-center gap-10'>
            <div className='search-bar border-2 border-slate-500 flex  rounded-md  max-sm:hidden'>
                <input className='p-2 w-72 outline-0  border-none max-w-full' type='search' placeholder='ask' />
                <span className='font-semibold flex items-center border-none  rounded-md px-1 '><Icon width={32}  icon="iconoir:search" /> </span>
              </div>
            <icone className="text-4xl flex ">...
              <Icon icon='line-md:phone-call-loop'></Icon>
            </icone>
            {/* <button className="nav-btn  bg-blue-400 text-white px-5 p-2 font-semibold text-lg rounded-md max-sm:hidden">Get Started</button> */}
            <div className="md:hidden"
            onClick={() => setToggleBtn(!toggleBtn)}
            >
              {toggleBtn ? 
            <div className="text-3xl">
                <Icon icon="basil:cross-outline" /></div> 
            : 
            <div className="text-3xl">
                <Icon icon="mage:align-right" /></div>}
                </div>
                {/* <button className='p-1.5 px-5 border border-black font-semibold text-[18px]'>Login</button> */}
                </div>
          </nav>
          <nav className='flex justify-between items-center max-sm:hidden'>
            <ul className='flex gap-10 font-semibold text-md p-3 '>
                <li>Nutrition</li>
                <li>Training</li>
                <li>Parenting</li>
                <li>Health</li>
                <li>Wellness</li>


            </ul>
            <p className='font-semibold text-md text-slate-600'> Proper nutrition is essential to keep your pet healthy and energetic</p>
          </nav>
  
          {/* <nav className="res-nav  max-sm:border  max-sm:border-red-600  max-sm:p-2  max-sm:absolute  max-sm:mt-[-60px]  max-sm:h-full w-full"></nav> */}
        </header>
        
        <header className="absolute w-full h-96 border border-blue-600   mt-10 p-2 border-none">
          {toggleBtn == true ? 
            <nav className="res-nav w-full h-96  text-white border flex  justify-center items-center border-slate-300 rounded-md bg-black z-30 absolute">
            <ul className="un-order-list-resp w-full flex flex-col justify-center items-center gap-5 ">
              <li>Home</li>
              <li>About</li>
              <li>Skill</li>
              <li>Portfolio</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </nav>
          : <div></div>
          }
        </header>
      </>
    );
}

export default Navbar