import React, { useEffect, useRef } from 'react'
import {SiDiscord} from "react-icons/si"
import {TbBrandDiscord} from "react-icons/tb"
import {AiOutlineInstagram} from "react-icons/ai"
import  {FiTwitter} from "react-icons/fi"
import "./Footer.css"
import { Link } from 'react-router-dom'
import Tearm from '../tearm&Condition/Tearm'

const Footer = () => {

  return (
    <div className='flex flex-col flex-wrap   fixed  bottom-0  w-full h-auto  z-40   bg-transparent  '>
     
       
        <div className=' xxs:text-[8px] xs:text-[9px] flex flex-row w-full h-auto  container mx-auto bg-dark_1  py-4   text-white sm:text-sm justify-end xxs:px-2 px-4 items-end mb-4 z-40 '>
                <p className='z-40'>© 2022 Resilient Her</p>
                <Link to ="/policy" className=' uppercase z-40 hover:underline'> / Privacy Policy / </Link>
                <Link to='/term' className='z-40 hover:underline'>TERMS &  CONDITIONS /</Link>
                <Link to='/nft' className='z-40 hover:underline'>NFT LICENSE</Link>
               
        </div>
    </div>
  )
}

export default Footer