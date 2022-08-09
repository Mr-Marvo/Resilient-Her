import React from 'react'
import Roadmap3 from "../roadmap/Roadmap3"
const Roadmap2 = () => {
  return (
    <>
    <div className=' flex flex-col w-full h-[100vh] hero '>
        <div className=' flex flex-row w-full relative justify-between  mt-36 '>
                <div className=' flex flex-row w-[49%] h-[300px] relative order-2'>
                    <img src={require("../../assets/images/s1.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s2.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s3.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/down arrow.png")} alt='slide' className=' bg-cover w-[150px] h-[200px] left-2  top-44 absolute spring'/>
                </div>
                <div className=' flex flex-row w-[49%] h-auto order-1 border-t-[1px] border-r-[1px]  pr-10 pt-4'>
                    <div className='flex flex-col w-full h-auto justify-center items-end   '>
                        <div className=' flex flex-row w-full  leading-[1]  justify-end items-center'>
                            <h2 className=' text-[100px] font-mono font-bold text-white ml-8 order-2 text-end'>20%</h2>
                            <img src={require("../../assets/images/tik.png")} alt='tik' className=' w-[100px] h-[100px] order-1'/>
                        </div>
                        <h4 className=' text-white text-[40px] font-custome leading-[1]'>The Safehouse</h4>
                        <h4 className=' text-white text-[25px]  leading-[1] mt-2 text-end'>Various clubhouses will be acquired in the meta-verse (Eg Sandbox, decentraland) where our members can debrief and discuss tactics</h4>
                       
                    </div>
                </div>
            </div>
            <div className=' flex flex-row w-full relative justify-between mt-36  '>
                <div className=' flex flex-row w-[48%] h-[300px] relative'>
                    <img src={require("../../assets/images/s1.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s2.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s3.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/down arrow.png")} alt='slide' className=' bg-cover w-[150px] h-[200px] right-2  top-44 absolute spring'/>
                </div>
                <div className=' flex flex-row w-[48%] h-auto border-t-[1px] border-l-[1px] pl-10 pt-4'>
                    <div className='flex flex-col w-full h-auto justify-center items-start  '>
                        <div className=' flex flex-row w-full  leading-[0] justify-start items-center'>
                            <h2 className=' text-[120px] font-mono font-bold text-white mr-8'>40%</h2>
                            <img src={require("../../assets/images/tik.png")} alt='tik' className=' w-[100px] h-[100px]'/>
                        </div>
                        <h4 className=' text-white text-[40px]  font-custome leading-[1]'>Community Enrichment</h4>
                        <h4 className=' text-white text-[25px]  leading-[1]  mt-2'>The project will begin its ambitious plan of attempting to destroy unjust issues that affect women globally.EG. - Sanitation products affecting poverty sticken countries - Domestic Violence - Gender-based violence - Etc</h4>
                        <button className=' text-white  text-xl bg-orange-400 rounded-full px-6 py-3 mt-10'>Buy on Opensea</button>
                    </div>
                </div>
            </div>
            
    </div>
    <Roadmap3/>
    </>
  )
}

export default Roadmap2