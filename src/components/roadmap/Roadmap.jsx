import React from 'react'
import "./Roadmap.css"

const Roadmap = () => {
  return (
    <div className=' flex flex-col relative w-full h-auto pb-40 overflow-hidden roadmap'>
        <div className='flex flex-col  mx-auto w-full  h-auto '>
            <div className=' flex flex-col w-full h-auto justify-center items-center mt-20 mb-20'>
                <h2 className=' uppercase text-white text-6xl  font-chakra z-40'>Resilient Her ROADMAP</h2>
            </div>
            <div className=' flex flex-row w-full relative justify-between  '>
                <div className=' flex flex-row w-[48%] h-[300px] relative'>
                    <img src={require("../../assets/images/s1.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s2.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s3.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/down arrow.png")} alt='slide' className=' bg-cover w-[150px] h-[200px] right-2  top-44 absolute '/>
                </div>
                <div className=' flex flex-row w-[48%] h-auto border-t-[1px] border-l-[1px] pl-10 pt-4'>
                    <div className='flex flex-col w-full h-auto justify-center items-start  '>
                        <div className=' flex flex-row w-full  leading-[0] justify-start items-center'>
                            <h2 className=' text-[100px] font-mono font-bold text-white mr-8 '>10%</h2>
                            <img src={require("../../assets/images/tik.png")} alt='tik' className=' w-[100px] h-[100px]'/>
                        </div>
                        <h4 className=' text-white text-[25px] font-medium leading-[1] '>20% of mint + 20% of all future royalties will be added to the community wallet and used for project growth and expansion</h4>
                        <button className=' text-white  text-xl bg-orange-400 rounded-full px-6 py-3 mt-10'>Buy on Opensea</button>
                    </div>
                </div>
            </div>
            <div className=' flex flex-row w-full relative justify-between  mt-36 '>
                <div className=' flex flex-row w-[48%] h-[300px] relative order-2'>
                    <img src={require("../../assets/images/s1.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s2.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s3.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/down arrow.png")} alt='slide' className=' bg-cover w-[150px] h-[200px] left-2  top-44 absolute '/>
                </div>
                <div className=' flex flex-row w-[48%] h-auto order-1 border-t-[1px] border-r-[1px]  pr-10 pt-4'>
                    <div className='flex flex-col w-full h-auto justify-center items-end   '>
                        <div className=' flex flex-row w-full  leading-[1]  justify-end items-center'>
                            <h2 className=' text-[100px] font-mono font-bold text-white ml-8 order-2 text-end'>20% - The Safehouse</h2>
                            <img src={require("../../assets/images/tik.png")} alt='tik' className=' w-[100px] h-[100px] order-1'/>
                        </div>
                        <h4 className=' text-white text-[40px] font-medium leading-[1]'>National Llama Day Event</h4>
                        <h4 className=' text-white text-[40px] font-medium  leading-[1]'>Llama Sanctuary Donation</h4>
                        <h4 className=' text-white text-[40px] font-medium  leading-[1]'>12 Lots Purchased</h4>
                        <h4 className=' text-white text-[40px] font-medium  leading-[1]'>2 NFT Worlds Purchased</h4>
            
                    </div>
                </div>
            </div>
            <div className=' flex flex-row w-full relative justify-between mt-36  '>
                <div className=' flex flex-row w-[48%] h-[300px] relative'>
                    <img src={require("../../assets/images/s1.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s2.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s3.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/down arrow.png")} alt='slide' className=' bg-cover w-[150px] h-[200px] right-2  top-44 absolute '/>
                </div>
                <div className=' flex flex-row w-[48%] h-auto border-t-[1px] border-l-[1px] pl-10 pt-4'>
                    <div className='flex flex-col w-full h-auto justify-center items-start  '>
                        <div className=' flex flex-row w-full  leading-[0] justify-start items-center'>
                            <h2 className=' text-[120px] font-mono font-bold text-white mr-8'>20%</h2>
                            <img src={require("../../assets/images/tik.png")} alt='tik' className=' w-[100px] h-[100px]'/>
                        </div>
                        <h4 className=' text-white text-[40px]  font-medium leading-[1]'>Genesis Collection</h4>
                        <h4 className=' text-white text-[40px] font-medium '>100 Boss Llamas Drop</h4>
                        <button className=' text-white  text-xl bg-orange-400 rounded-full px-6 py-3 mt-2'>Buy on Opensea</button>
                    </div>
                </div>
            </div>
            <div className=' flex flex-row w-full relative justify-between  mt-36 '>
                <div className=' flex flex-row w-[48%] h-[300px] relative order-2'>
                    <img src={require("../../assets/images/s1.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s2.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s3.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/down arrow.png")} alt='slide' className=' bg-cover w-[150px] h-[200px] left-2  top-44 absolute '/>
                </div>
                <div className=' flex flex-row w-[48%] h-auto order-1 border-t-[1px] border-r-[1px]  pr-10 pt-4'>
                    <div className='flex flex-col w-full h-auto justify-center items-end   '>
                        <div className=' flex flex-row w-full  leading-[0] justify-end items-center'>
                            <h2 className=' text-[120px] font-mono font-bold text-white ml-8 order-2'>40%</h2>
                            <img src={require("../../assets/images/tik.png")} alt='tik' className=' w-[100px] h-[100px] order-1'/>
                        </div>
                        <h4 className=' text-white text-[40px] font-medium leading-[1]'>National Llama Day Event</h4>
                        <h4 className=' text-white text-[40px] font-medium  leading-[1]'>Llama Sanctuary Donation</h4>
                        <h4 className=' text-white text-[40px] font-medium  leading-[1]'>12 Lots Purchased</h4>
                        <h4 className=' text-white text-[40px] font-medium  leading-[1]'>2 NFT Worlds Purchased</h4>
            
                    </div>
                </div>
            </div>
            <div className=' flex flex-row w-full relative justify-between mt-36 '>
                <div className=' flex flex-row w-[48%] h-[300px] relative'>
                    <img src={require("../../assets/images/s1.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s2.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s3.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/down arrow.png")} alt='slide' className=' bg-cover w-[150px] h-[200px] right-2  top-44 absolute '/>
                </div>
                <div className=' flex flex-row w-[48%] h-auto border-t-[1px] border-l-[1px] pl-10 pt-4'>
                    <div className='flex flex-col w-full h-auto justify-center items-start  '>
                        <div className=' flex flex-row w-full  leading-[0] justify-start items-center'>
                            <h2 className=' text-[120px] font-mono font-bold text-white mr-8'>60%</h2>
                            <img src={require("../../assets/images/tik.png")} alt='tik' className=' w-[100px] h-[100px]'/>
                        </div>
                        <h4 className=' text-white text-[40px]  font-medium leading-[1]'>Genesis Collection</h4>
                        <h4 className=' text-white text-[40px] font-medium '>100 Boss Llamas Drop</h4>
                        <button className=' text-white  text-xl bg-orange-400 rounded-full px-6 py-3 mt-2'>Buy on Opensea</button>
                    </div>
                </div>
            </div>
            <div className=' flex flex-row w-full relative justify-between  mt-36 '>
                <div className=' flex flex-row w-[48%] h-[300px] relative order-2'>
                    <img src={require("../../assets/images/s1.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s2.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s3.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/down arrow.png")} alt='slide' className=' bg-cover w-[150px] h-[200px] left-2  top-44 absolute '/>
                </div>
                <div className=' flex flex-row w-[48%] h-auto order-1 border-t-[1px] border-r-[1px]  pr-10 pt-4'>
                    <div className='flex flex-col w-full h-auto justify-center items-end   '>
                        <div className=' flex flex-row w-full  leading-[0] justify-end items-center'>
                            <h2 className=' text-[120px] font-mono font-bold text-white ml-8 order-2'>80%</h2>
                            <img src={require("../../assets/images/tik.png")} alt='tik' className=' w-[100px] h-[100px] order-1'/>
                        </div>
                        <h4 className=' text-white text-[40px] font-medium leading-[1]'>National Llama Day Event</h4>
                        <h4 className=' text-white text-[40px] font-medium  leading-[1]'>Llama Sanctuary Donation</h4>
                        <h4 className=' text-white text-[40px] font-medium  leading-[1]'>12 Lots Purchased</h4>
                        <h4 className=' text-white text-[40px] font-medium  leading-[1]'>2 NFT Worlds Purchased</h4>
            
                    </div>
                </div>
            </div>
            <div className=' flex flex-row w-full relative justify-between mt-36 '>
                <div className=' flex flex-row w-[48%] h-[300px] relative'>
                    <img src={require("../../assets/images/s1.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s2.png")} alt='slide' className=' bg-cover w-auto'/>
                    <img src={require("../../assets/images/s3.png")} alt='slide' className=' bg-cover w-auto'/>
                    
                </div>
                <div className=' flex flex-row w-[48%] h-auto border-t-[1px] border-l-[1px] pl-10 pt-4'>
                    <div className='flex flex-col w-full h-auto justify-center items-start  '>
                        <div className=' flex flex-row w-full  leading-[0] justify-start items-center'>
                            <h2 className=' text-[120px] font-mono font-bold text-white mr-8'>100%</h2>
                            <img src={require("../../assets/images/tik.png")} alt='tik' className=' w-[100px] h-[100px]'/>
                        </div>
                        <h4 className=' text-white text-[40px]  font-medium leading-[1]'>Genesis Collection</h4>
                        <h4 className=' text-white text-[40px] font-medium '>100 Boss Llamas Drop</h4>
                    
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Roadmap