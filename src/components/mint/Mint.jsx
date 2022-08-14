import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import {BiMinus} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"
import "./Mint.css"
const Mint = () => {
  return (
    <div className=' w-full h-screen relative flex flex-col hero'>
        <Navbar/>
        <div  className=' w-full h-full flex flex-col container mx-auto justify-center items-center font-custome font-bold'>
            <div className=' w-[500px] h-[400px] flex flex-col  bg-dark_1  rounded-xl px-4 justify-center items-center mint'>
                <div className=' w-full h-auto flex flex-row text-white justify-between'>
                    <h3 className=' text-xl'>Remaining</h3>
                    <strong>4566/10000</strong>
                </div>
                <div  className=' w-full h-auto flex flex-row text-white mt-10 justify-between'>
                    <h3  className=' text-xl'>Price</h3>
                    <strong>0.001ETH</strong>
                </div>
                <div  className=' w-full h-auto flex flex-row text-white justify-between mt-10 items-center'>
                    <h3  className=' text-xl'> Quantity</h3>
                    <div className=' w-full h-auto flex flex-row text-white justify-around items-center'>
                        <div className=' w-[40px] h-[40px]  font-bold cursor-pointer rounded-full bg-red-500 flex justify-center items-center'>
                            <BiMinus/>
                        </div>
                        <strong className=' border-[1px] px-4 py-4 font-custome font-bold'>002</strong>
                        <div className=' w-[40px] h-[40px] font-bold cursor-pointer rounded-full  bg-sky-600 flex justify-center items-center'>
                            <AiOutlinePlus/>
                        </div>
                    </div>
                    <strong>0.001ETH</strong>
                </div>
                <div  className=' w-full mt-10 h-auto flex flex-row text-white justify-center items-center' >
                    <button className=' uppercase bg-violet-800 text-xl cursor-pointer px-4 py-4'>Mint Now</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Mint