import React from 'react'
import img from './images/woman.png'
const Hero = () => {
  return (
    <div>
      <div className='flex p-8 gap-4 items-center'>
        <div className=' bg-lime-900 h-screen w-[300px]'>
            <img className='rounded-full object-cover w-48 h-48 p-4' src={img} alt="image" />
            <h1 className='text-center p-4 text-2xl font-bold'>Say hello</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='h-screen '>
            <form className='gap-5 space-y-3 grid grid-cols-2 sm:gap-5 items-center '>
                <div>
                <label className='text-sm'>first name</label><br />
                <input className='outline-none border-b-2 border-b-lime-700 text-sm' type="text"placeholder='enter your firstName' /><br />
                </div>
                <div className='pb-2'>
                <label  className='text-sm' >last name</label><br></br>
                <input className='outline-none border-b-2 border-b-lime-700  text-sm' type="text"placeholder='enter your last name' /> <br />
                </div>
                <div>
                <label  className='text-sm'>email</label><br />
                <input  className='outline-none border-b-2 border-b-lime-700  text-sm' type="email"placeholder='enter a vaild email addres'/><br></br>
                </div>
                <div>
                <label  className='text-sm'>phone</label> <br />
                <input  className='outline-none border-b-2 border-b-lime-700  text-sm' type="number"placeholder='enter your phone' /><br />
                </div>
                <div>
                <label  className='text-sm'>message</label> <br />
                <textarea  className='outline-none border-b-2 border-b-lime-700 text-sm' name="" id=""placeholder='enter your message'></textarea><br />
                </div>
            </form>
                <button className='border-2 rounded-md bg-lime-900 text-white font-bold px-16 text-center mt-8 w-11/12 pt-2 pb-2'>submit</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
