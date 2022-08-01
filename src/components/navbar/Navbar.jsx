import React from 'react'
import {FiTwitter} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {TbBrandDiscord} from "react-icons/tb"


const Navbar = () => {
  return (
    <div className=' flex flex-col  fixed z-[999] flex-wrap w-full h-[10vh]  justify-center items-center  text-white'>
        <nav className=' flex flex-row flex-wrap w-full h-auto container mx-auto justify-between items-center'>
            <div className='flex flex-wrap w-1/5 '>
                <img src={require("../../assets/images/logo.webp")} alt='logo' className=' bg-cover cursor-pointer'/>
            </div>
            <div className=' flex flex-row  w-4/5  pr-20 h-auto justify-between items-center'>
                <ul className=' flex flex-row flex-wrap font-sourceCode font-bold text-base'>
                    <li className='mx-4 cursor-pointer'><a href="/">Laid black Llamas</a></li>
                    <li className='mx-4 cursor-pointer'><a href="/">Boss Llamas</a></li>
                    <li className='mx-4 cursor-pointer'><a href="/">Roadmap</a></li>
                    <li className='mx-4 cursor-pointer'><a href="/">Team</a></li>
                    <li className='mx-4 cursor-pointer'><a href="/">FAQ</a></li>
                    <li className='mx-4 cursor-pointer'><a href="/">Media Kit</a></li>
                    <li className='mx-4 cursor-pointer'><a href="/">L'Dezen Redemption</a></li>
                </ul>
                <div className=' flex-row flex flex-wrap justify-center items-center text-xl'>
                    <FiTwitter className=' mx-2 cursor-pointer'/>
                    <AiOutlineInstagram className=' mx-2 cursor-pointer'/>
                    <TbBrandDiscord className=' mx-2 cursor-pointer'/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar