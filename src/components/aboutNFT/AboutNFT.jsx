import React from 'react'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
const AboutNFT = () => {
  return (
    <div className=' w-full h-screen flex flex-col flex-wrap relative hero'>
        <Navbar/>
        <div className=' w-full h-auto flex flex-col container mx-auto justify-center items-center'>
            <div className=' flex flex-wrap flex-col w-full h-auto  justify-center items-center '>
                <div className=' flex flex-col  w-full h-auto justify-center items-center mt-10  z-40'>
                    <h2 className='text-[100px] mx-1  mt-10 tracking-tighter text-transparent leading-[1] font-extrabold font-custome desc-title1 uppercase z-40'>Resilient Her</h2>
                    <h2 className=' text-6xl mx-2   font-custome relative text-white z-40'> Project Focus</h2>
                    <div className=' flex flex-col mx-4  w-fit h-full  justify-center items-center mt-10'>
                        <p className=' text-2xl text-white  font-chakra z-40 text-center'>Resilient Her is a real-life use project, which focuses on various aspects around the world that affects under-privileged and abused women worldwide.Our team consists of experienced, all rounded individuals with more than 20 years experience in their individual specialized fields. 
                            This project defines itself as a one-of-a-kind, long term project and aims to improve the lives of millions of women across the world who suffer from inter-alia Gender-based violence, depression, social problems, financial problems etc.
                            At the same time, we have developed a financial model by means of an NFT whereby an Investor can get superb value for money. By being a Resilient-Her NFT holder, VIP access will be granted to members and various regular perks will be offered which will be constantly refreshed and updated to keep up with current trends.</p>
                        <div className=' flex flex-col w-full h-full justify-center items-center mt-10'>
                            <button className=' border-[2px] border-white  py-4 px-10 text-white  font-chakra text-xl about-btn-2 relative z-40'>Buy a  Boss Resilient Her</button>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutNFT