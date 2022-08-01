import React from 'react'
import demo from "../../assets/images/1.svg"
import "./Detail.css"
import FluidAnimation from 'react-fluid-animation'
import "../../cursor"
const Detail = () => {
  return (
    <>
    <canvas className=' w-full h-auto  absolute'>
    
    </canvas>
    <div className=' flex-wrap flex flex-col w-full h-auto container mx-auto relative hero' >
            <div className=' flex flex-col flex-wrap w-full h-auto '>
                <div className=' flex flex-row justify-center items-center mx-10 my-10  p-10 border-[1px]'>
                    <img src={demo}alt='slide' className=' w-[200px] h-[200px]'/>
                    <div className='flex flex-col w-auto h-auto'>
                        <h3 className=' text-white text-3xl'>Laid Back Llamas Benefits</h3>
                        <ul className=' text-xl text-white mt-10'>
                            <li>7,000 provably-rare Laid Back Llamas</li>
                            <li>7,000 provably-rare Laid Back Llamas</li>
                            <li>7,000 provably-rare Laid Back Llamas</li>
                            <li>7,000 provably-rare Laid Back Llamas</li>
                            <li>7,000 provably-rare Laid Back Llamas</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </>
  )
}

export default Detail