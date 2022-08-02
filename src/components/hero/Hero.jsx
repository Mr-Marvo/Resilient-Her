import React from 'react'
import Navbar from "../navbar/Navbar"
import "./Hero.css"
const Hero = () => {
  return (
    <div className=' flex flex-col w-full h-auto flex-wrap relative hero justify-center items-center'>
        <Navbar/>
        <div className=' flex flex-row  w-full  h-[80vh]  container mx-auto justify-center items-center'>
            <div className=' flex flex-col w-1/3 flex-wrap'>
                <h2 className='  text-white font-righteous text-[70px]  leading-[1] uppercase  w-[450px] tracking-wider hero_title'>THE FUTURE IS FEMALE!</h2>
                <h4 className='   text-amber-400 mt-5 text-3xl leading-[1] font-chakra'>We stand together with one heart and one fight.</h4>
                <button className='  border-[1px] border-white text-xl text-white w-[50%] font-bold mt-10 font-chakra py-5 btn-main relative z-1 uppercase'>Buy a Resilient Her</button>
            </div>
            <div className=' flex flex-col w-2/3  justify-center items-center'>
                <img src ={require("../../assets/images/hero.png")} className='w-[130%] relative  bottom-3 bg-cover h-auto  ' alt="hero"/>
            </div>
        </div>
    </div>
  )
}

export default Hero