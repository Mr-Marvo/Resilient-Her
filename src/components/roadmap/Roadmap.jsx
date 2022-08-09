import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Roadmap.css"
import Roadmap2 from './Roadmap2'

const Roadmap = () => {
  return (
    <>  
    <div className=' flex flex-col relative w-full h-auto  overflow-hidden hero '>
        <Navbar/>
        <div className='flex flex-col  mx-auto w-full  h-auto '>
            <div className=' flex flex-col w-full h-auto justify-center items-center mt-20 mb-20'>
                <h2 className=' uppercase text-white text-6xl   font-custome z-40'>Resilient Her ROADMAP</h2>
            </div>
            <div className=' flex flex-row w-full relative justify-between  pb-20'>
                <div className=' flex flex-row w-[48%] h-[300px] relative'>
                    <img src={require("../../assets/images/s1.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s2.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s3.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/down arrow.png")} alt='slide' className=' bg-cover w-[150px] h-[200px] right-2  top-44 absolute spring'/>
                </div>
                <div className=' flex flex-row w-[48%] h-auto border-t-[1px] border-l-[1px] pl-10 pt-4'>
                    <div className='flex flex-col w-full h-auto justify-center items-start  '>
                        <div className=' flex flex-row w-full  leading-[0] justify-start items-center'>
                            <h2 className=' text-[100px] font-mono font-bold  text-violet-500 mr-8 '>10%</h2>
                            <img src={require("../../assets/images/tik.png")} alt='tik' className=' w-[100px] h-[100px] '/>
                        </div>
                        <h4 className=' text-white text-[40px] font-custome leading-[1]'>LFG</h4>
                        <h4 className=' text-white text-[25px] leading-[1] mt-2 '>20% of mint + 20% of all future royalties will be added to the community wallet and used for project growth and expansion</h4>
                        <button className=' text-white  text-xl bg-orange-400 rounded-full px-6 py-3 mt-10'>Buy on Opensea</button>
                    </div>
                </div>
            </div>
            
           
        </div>

    </div>
    <Roadmap2/>
    </>
  )
}

export default Roadmap