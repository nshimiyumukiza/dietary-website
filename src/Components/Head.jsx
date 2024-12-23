import React from 'react'
import eating from './images/eating.png'
import Navbar from './Navbar'
import Hero from './Hero'
const Head = () => {
  return (
    <div>
   <div>
    <div className='mx-auto flex justify-between w-11/12 p-4'>
        <h1 className='text-2xl font-bold text-gray-400'>logo</h1>
        <div className='flex space-x-4'>
            <a  href="">home</a>
            <a  href="">about</a>
            <a  href="">contact</a>
        </div>
    </div>
    <div className='flex items-center p-2'>
        <div className='text-center bg-lime-900 text-white h-screen px-8 pt-12 w-[400px]'>
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
    </div>
  )
}

export default Head