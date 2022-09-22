import React from 'react'

import RippleCanvas from "../rippleEffect/RippleCanvas"

import Navbar from "../navbar/Navbar"
import "./Hero.css"
import Footer from "../footer/Footer"

const Hero = () => {

  return (
    <RippleCanvas>
      <Navbar />
      <div className=' flex flex-row   container mx-auto justify-center items-center '>
        <div className=' flex flex-col w-full h-full justify-center items-center hero-img  absolute xxs:top-0  sm:top-28 left-0  '>
          <img src={require("../../assets/images/logo-bg.png")} className=' bg-cover  top-0 left-0 ' alt="hero" />
        </div>
      </div>
      <Footer />
    </RippleCanvas>
  )
}

export default Hero