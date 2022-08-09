import React from 'react'

const Roadmap4 = () => {
  return (
    <div className=' flex flex-col w-full h-auto relative   hero pb-32 '>
        <div className=' flex flex-row w-full relative justify-between  mt-36 '>
                <div className=' flex flex-row w-[49%] h-[300px] relative order-2'>
                    <img src={require("../../assets/images/s1.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s2.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s3.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/down arrow.png")} alt='slide' className=' bg-cover w-[150px] h-[200px] left-2  top-44 absolute spring'/>
                </div>
                <div className=' flex flex-row w-[49%] h-auto order-1 border-t-[1px] border-r-[1px]  pr-10 pt-4'>
                    <div className='flex flex-col w-full h-auto justify-center items-end   '>
                        <div className=' flex flex-row w-full  leading-[0] justify-end items-center'>
                            <h2 className=' text-[120px] font-mono font-bold  text-purple-600 ml-8 order-2'>100%</h2>
                            <img src={require("../../assets/images/tik.png")} alt='tik' className=' w-[100px] h-[100px] order-1'/>
                        </div>
                        <h4 className=' text-white text-[40px] font-custome leading-[1]'>The metaverse</h4>
                        <h4 className=' text-white text-[25px]   leading-[1] text-end mt-2'>Expansion into the metaverse with the ambitious goal to create a virtual reality platform for people in need to attend virtual therapy sessions anywhere in the world with our trained professionals</h4>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Roadmap4