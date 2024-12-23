import React from 'react'
import img from './images/woman.png'
const Hero = () => {
  return (
    <div>
      <div className='flex p-8 gap-4 items-center'>
        <div className='bg-lime-900 h-screen w-[300px]'>
            <img className='rounded-full object-cover w-48 h-48' src={img} alt="image" />
            <h1 className='text-center p-4 text-2xl font-bold'>Say hello</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='h-screen '>
            <form className='space-y-3 items-center grid grid-cols-2'>
                <label>first name</label><br />
                <input className='outline-none border-b-2' type="text"placeholder='enter your firstName' /><br />
                <label >last name</label><br></br>
                <input className='outline-none border-b-2' type="text"placeholder='enter your last name' /> <br />
                <label>email</label><br />
                <input  className='outline-none border-b-2' type="email"placeholder='enter a vaild email addres'/><br></br>
                <label>phone</label>
                <input  className='outline-none border-b-2' type="number"placeholder='enter your phone' /><br />
                <label>message</label>
                <textarea  className='outline-none border-b-2' name="" id=""placeholder='enter your message'></textarea><br />
                <button className='border-2 rounded-md bg-lime-900 text-white font-bold'>submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Hero
