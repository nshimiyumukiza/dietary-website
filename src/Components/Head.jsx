import React from 'react'
import eating from './images/eating.png'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import { IoMenuOutline } from "react-icons/io5";
import { FiX } from "react-icons/fi";
import { useState } from 'react'
const Head = () => {
    const [icons,setIcons]=useState(false)
  return (
    <div>
   <div>
    <div className='flex justify-between w-11/12 p-4'>
        <h1 className='text-2xl font-bold text-gray-400'>logo</h1>
        <div className ={!icons ? 'flex space-x-4':'hidden '}>
            <a href="">home</a>
            <a href="">about</a>
            <a href="">contact</a>
        </div>
        <div onClick={()=>setIcons(prev=>!prev)}>
            {!icons? <FiX /> :<IoMenuOutline />}
        </div>
    </div>
    <div className='flex flex-col px-4 sm:flex-row md:'>
        <div className='sm:w-[300px] sm:px-4 md:text-center bg-lime-900 text-white h-screen px-8 pt-12 w-[400px]'>
            <h1 className='text-4xl font-bold'>be healthy,enjoy life !</h1>
            <p className='pt-3'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <p className='pt-6'>image from <span className='underline'>freepik</span></p>
            <div className='pt-12'>
            <button className='border px-8 text-center rounded-lg  hover:bg-white text-lime-700 font-bold'>join now</button>
            </div>
        </div>
        <div className='h-screen'>
            <img className='h-screen' src={eating} alt="eating fruits" />
        </div>
    </div>
   </div>
   <Navbar/>
   <Hero />
   <Footer />
    </div>
  )
}

export default Head