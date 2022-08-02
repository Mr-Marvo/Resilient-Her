import React from 'react'
import {FiTwitter} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {TbBrandDiscord} from "react-icons/tb"
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className=' flex flex-col  fixed z-[999] flex-wrap w-full h-[10vh]  justify-center items-center  text-white'>
        <nav className=' flex flex-row flex-wrap w-full h-auto container mx-auto justify-between items-center'>
            <div className='flex flex-wrap w-1/5 '>
                <img src={require("../../assets/images/logo.png")} alt='logo' className=' bg-cover cursor-pointer h-[240px] pt-4 w-[400px]'/>
            
            </div>
            <div className=' flex flex-row  w-4/5   h-auto  justify-around items-center'>
                <ul className=' flex flex-row flex-wrap font-sourceCode font-bold text-base'>
                    <li className=' cursor-pointer uppercase px-5 py-2  relative nav-item'><a href="/" >Home</a></li>
                    <li className=' cursor-pointer uppercase px-5 py-2  relative nav-item'><a href="/" >About us</a></li>
                    <li className=' cursor-pointer uppercase px-5 py-2  relative nav-item'><a href="/" >Roadmap</a></li>
                    <li className=' cursor-pointer uppercase px-5 py-2  relative nav-item'><a href="/" >FAQ</a></li>
                    <li className=' cursor-pointer uppercase px-5 py-2  relative nav-item'><a href="/" >Team</a></li>
                </ul>
                <div className=' flex-row flex flex-wrap justify-center items-center text-xl'>
                    <FiTwitter className=' mx-2 cursor-pointer nav-icon'/>
                    <AiOutlineInstagram className=' mx-2 cursor-pointer nav-icon'/>
                    <TbBrandDiscord className=' mx-2 cursor-pointer nav-icon'/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar