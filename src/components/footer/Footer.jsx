import React from 'react'
import {SiDiscord} from "react-icons/si"
import {TbBrandDiscord} from "react-icons/tb"
import {AiOutlineInstagram} from "react-icons/ai"
import  {FiTwitter} from "react-icons/fi"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='flex flex-col flex-wrap relative  w-full h-auto mt-16 justify-center items-center'>
        <div className='w-full h-auto  container mx-auto  flex flex-col flex-wrap justify-center items-center'>
            <div className='text-white w-full h-auto flex flex-col  justify-center items-center '>
                <p className=' text-md text-center mb-4 w-1/2'>Laid Back Llamas are a collection of 7,000 uniquely generated llamas, while the Boss Llamas are 100 manually created llamas, all living on the Ethereum Blockchain.</p>
                <div className=' flex flex-row '>
                   <input type="email" className=' w-[300px] h-[40px] outline-hidden border-none  rounded-full mr-4 px-4' placeholder='Enter email...'/>
                   <button className=' uppercase border-[1px] px-4 h-[40px] font-sourceCode font-bold text-xl  rounded-3xl'>Join</button>
                </div>
            </div>
            <div className='text-white w-auto relative  -left-14   container   flex flex-row  justify-between items-center '>
                <div className=' flex flex-col  h-auto justify-center items-center' >
                   <a href='/'><img src={require("../../assets/images/logo.png")}alt='logo' className=' w-[300px] h-[200px] bg-cover'/></a>
                </div>
                <div className=' mt-2 justify-center items-center mr-20'>
                    <p>2022 RESILIENT HER | All rights reserved</p>
               </div>
                <div className=' flex flex-row   justify-center items-center text-3xl '>
                    <div className=' mx-3 cursor-pointer '>
                        <AiOutlineInstagram className='media'/>
                    </div>
                    <div  className=' mx-3 cursor-pointer'>
                        <FiTwitter className='media'/>
                    </div>
                 
                </div>
              
            </div>
 
        </div>
    </div>
  )
}

export default Footer