import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavComp/Navbar'
import Home from './Components/Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgetPassword from './Components/FormComp/ForgetPassword';
import AddnewPassword from './Components/FormComp/AddnewPasswoed';
import PetDetails from './Components/Pages/PetDetails';
import SignUp from './Components/FormComp/SignUp';
import SignIn from './Components/FormComp/SignIn';
import PetFinding from './Components/Pages/PetFinding';
import ShowMoreDetails from './ShowMoreDetails/ShowMoreDetails';
import BlogDetails from './Components/Pages/BlogDetails';
import BlogCard from './Components/Pages/BlogCard';
import Bloges from './Components/Bloges';
import PetGrooming from './Components/Pages/PetGrooming';
import PetBoarding from './Components/Pages/PetBoarding';
import PetTaxi from './Components/Pages/PetTaxi';


function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/addnewpassword' element={<AddnewPassword />} />
          <Route path='/' element={<Home />} />
          <Route path='/blogcard' element={<BlogCard />} />
          <Route path='/bloges' element={<Bloges />} />
          <Route path='/about'  />
          <Route path='/accessories' />
          <Route path='/petdetails' element={<PetDetails />} />
          <Route path='/petfinding' element={<PetFinding />} />
          <Route path='/showmoredetails' element={<ShowMoreDetails />} />
          <Route path='/blogdetails' element={<BlogDetails />} />
          <Route path='/petgrooming' element={< PetGrooming />} />
          <Route path='/petboarding' element={< PetBoarding />} />
          <Route path='/pettaxi' element={< PetTaxi />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
