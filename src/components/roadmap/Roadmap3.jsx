import React from 'react'
import Roadmap4 from './Roadmap4'

const Roadmap3 = () => {
  return (
    <div className=' w-full h-[100vh] flex flex-col hero  pt-20 '>
        <div className=' flex flex-row w-full relative justify-between   '>
                <div className=' flex flex-row w-[49%] h-[300px] relative order-2'>
                    <img src={require("../../assets/images/s1.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s2.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s3.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/down arrow.png")} alt='slide' className=' bg-cover w-[150px] h-[200px] left-2  top-44 absolute spring'/>
                </div>
                <div className=' flex flex-row w-[49%] h-auto order-1 border-t-[1px] border-r-[1px]  pr-10 pt-4'>
                    <div className='flex flex-col w-full h-auto justify-center items-end   '>
                        <div className=' flex flex-row w-full  leading-[0] justify-end items-center'>
                            <h2 className=' text-[120px] font-mono font-bold text-white ml-8 order-'>60%</h2>
                            <img src={require("../../assets/images/tik.png")} alt='tik' className=' w-[100px] h-[100px] order-1 '/>
                        </div>
                        <h4 className=' text-white text-[40px] font-custome leading-[1]'>Boot Camp</h4>
                        <h4 className=' text-white text-[25px]   leading-[1] mt-2 text-end'>Members of HER will have access to individual one-on-one virtual therapy sessions with trained professionals to get the help they need and deserve.</h4>
                    </div>
                </div>
            </div>
            <div className=' flex flex-row w-full relative justify-between mt-36 '>
                <div className=' flex flex-row w-[48%] h-[300px] relative'>
                    <img src={require("../../assets/images/s1.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s2.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s3.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/down arrow.png")} alt='slide' className='  bg-cover w-[150px] h-[200px] right-2  top-44 absolute spring'/>
                </div>
                <div className=' flex flex-row w-[48%] h-auto border-t-[1px] border-l-[1px] pl-10 '>
                    <div className='flex flex-col w-full h-auto justify-center items-start  '>
                        <div className=' flex flex-row w-full  leading-[0] justify-start items-center pt-20'>
                            <h2 className=' text-[120px] font-mono font-bold text-white mr-8'>80%</h2>
                            <img src={require("../../assets/images/tik.png")} alt='tik' className=' w-[100px] h-[100px] '/>
                        </div>
                        <h4 className=' text-white text-[40px]  font-custome leading-[1]'>Collabs</h4>
                        <h4 className=' text-white text-[25px] leading-[1] mt-2'>Attempt to collab with other ambitious projects targeting global outreach programmes.EG: -WOW –World of Women -Women Ride -Psychadelics Anonymous -Etc</h4>
                        <button className=' text-white  text-xl bg-orange-400 rounded-full px-6 py-3 mt-10'>Buy on Opensea</button>
                    </div>
                </div>
            </div>
            <Roadmap4/>
    </div>
  )
}

export default Roadmap3