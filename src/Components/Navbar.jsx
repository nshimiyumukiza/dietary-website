import React from 'react'
import datas from '../pricing.json'
import { TiTick } from "react-icons/ti";

const Navbar = () => {
    console.log(datas)
  return (
    <div>
      <div>
        <h1 className='text-4xl text-center text-black font-bold p-4'>pricing</h1>
        <p className='text-center px-12 w-11/12 pb-4'>Vel risus commodo viverra maecenas accumsan lacus vel facilisis.
             Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.
             Cras semper auctor neque vitae tempus quam.</p>
             <div className='grid md:grid-cols-3 px-4 pt-6 gap-4'>
                {
                    datas.map(data =>(
                        <div className='bg-slate-300 p-4 items-center rounded-md'>
                        <p className='text-3xl text-lime-800 font-bold pb-4'>{data.pric}</p>
                        <p className='text-lg text-black font-bold pb-2'>{data.head}</p>
                        <p className='pt-2 pb-4 text text-sm'>{data.p}</p>
                        <ul>{data.list.map(lis =>(
                            <div className='flex space-x-2'>
                                <TiTick />
                            <li>{lis}</li>
                            </div>
                        ))}</ul>
                        <div className='pt-8 '>
                          <button className=' text-lime-900 font-bold rounded-md border-2 px-2 hover:bg-lime-800 hover:text-white'>select plan</button>
                          </div>
                        </div>
                    ))
                }
              
             </div>
      </div>
    </div>
  )
}

export default Navbar
