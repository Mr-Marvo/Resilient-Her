import React from 'react'
import {FiTwitter} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {TbBrandDiscord} from "react-icons/tb"
import "./Navbar.css"
import {FaBars} from  "react-icons/fa"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex flex-col  relative  z-[999]  w-full h-auto  justify-center items-center  text-white'>
        <nav className=' flex flex-row  w-full h-[99px] mt-6  container mx-auto bg-dark_1  justify-between items-center'>
            <div className='flex flex-wrap w-1/5 justify-start items-start   '>
                <img src={require("../../assets/images/logo.png")} alt='logo' className=' bg-cover cursor-pointer  w-fit'/>
            
            </div>
            <div className=' flex flex-row  w-4/5   h-auto  justify-between mx-4 items-center   '>
       
                    <ul className=' flex flex-row flex-wrap font-sourceCode font-bold text-base pl-40'>
                        <li className=' cursor-pointer uppercase px-5 py-2  relative '><Link to="/" >Home</Link></li>
                        <li className=' cursor-pointer uppercase px-5 py-2  relative '><Link to="/about">About us</Link></li>
                        <li className=' cursor-pointer uppercase px-5 py-2  relative '><Link to="/aboutNFT">About the NFT</Link></li>
                        <li className=' cursor-pointer uppercase px-5 py-2  relative '><Link to="/roadmap" >Roadmap</Link></li>
                        <li className=' cursor-pointer uppercase px-5 py-2  relative '><Link to="/ask" >FAQ</Link></li>
                        <li className=' cursor-pointer uppercase px-5 py-2  relative '><Link to="/team" >Team</Link></li>
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