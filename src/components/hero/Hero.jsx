import React from 'react'
import Navbar from "../navbar/Navbar"
import "./Hero.css"
const Hero = () => {
  return (
    <div className=' flex flex-col w-full h-[100%] flex-wrap relative hero justify-center items-center'>
        <div className=' flex flex-row  w-full  h-[83vh]  container mx-auto justify-center items-center'>
            <div className=' flex flex-col w-1/3 flex-wrap'>
                <h2 className='  text-white font-righteous text-5xl w-[450px] tracking-wider hero_title'>Lady Llamas have now arrived to Llama Land.</h2>
                <h4 className='   text-amber-400 mt-5 text-2xl font-chakra'>Lady Llamas are a collection of wooly, super fashionable and kick-ass female Llamas</h4>
                <button className=' border-[1px] border-amber-500 text-xl text-white w-[40%] font-bold mt-10 font-chakra py-4'>Buy a Lady Llama</button>
            </div>
            <div className=' flex flex-col w-2/3'>
                <img src ={require("../../assets/images/hero.webp")} alt="hero"/>
            </div>
        </div>
    </div>
  )
}

export default Hero