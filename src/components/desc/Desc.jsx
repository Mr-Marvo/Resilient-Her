import React from 'react'
import "./Desc.css"
const Desc = () => {
  return (
    <div className=' flex flex-col  flex-wrap w-full h-auto relative desc'>
        <div className=' flex flex-wrap flex-col w-full h-auto  justify-end items-end '>
            <div className=' flex flex-col  w-1/2 h-[80vh] justify-center items-start  bg-dark_1'>
                <h2 className='text-[120px] mx-1  mt-10 tracking-tighter text-transparent  font-extrabold  font-sourceCode desc-title1  uppercase'>About Us</h2>
                <h2 className=' text-6xl mx-2 font-sourceCode  relative -top-9 font-extrabold text-white'>resilient Her</h2>
                <div className=' flex flex-col mx-4  w-fit h-full  justify-center items-center mt-10'>
                    <p className=' text-2xl text-white  font-chakra '>
                        We are a group of four strong independent activists with an ambitious goal to
                        improve the future for females around the world through tackling every day
                        problems that women face.
                        We are passionate and determined to make a difference by uniting, empowering,
                        supporting and creating an environment in which females can feel safe and heard.
                        We are positive that together as a community we can make a difference.
                        We stand together with one heart and one fight.</p>
                        <strong className=' text-white uppercase text-xl'>THE FUTURE IS FEMALE!</strong>
                    <div className=' flex flex-col w-full h-full justify-center items-center  '>
                        <button className=' py-4 px-4 text-white  border-white border-[2px] font-chakra text-xl  relative z-0 about-btn-1'>Buy a Laid Back Resilient Her</button>
                    </div>
                </div>    
            </div>
        </div>
        <div className=' flex flex-wrap flex-col w-full h-auto  justify-start items-start'>
            <div className=' flex flex-col  w-1/2 h-[80vh] justify-center items-start  bg-light_1'>
                <h2 className='text-[150px] mx-1  mt-10 tracking-tighter text-transparent  font-extrabold font-sourceCode desc-title2 uppercase '>Sample</h2>
                <h2 className=' text-6xl mx-2 font-sourceCode  font-extrabold relative -top-14 text-black'>resilient Her</h2>
                <div className=' flex flex-col mx-4  w-fit h-full  justify-center items-center mt-10'>
                    <p className=' text-2xl text-black  font-chakra '>Deep in the digital mountains of the Metaverse lies a herd of 7,000 exceptional llamas. They represent confidence, tranquility, and different personalities that boast style with every stride. These fresh-looking llamas have been exploring the rolling hills of the digital landscape in search of good vibes and good vibes only. They got the swag, the funk, the jazz, with each llama more laid back than the next. This exquisite herd only breeds the finest of llamas with the fluffiest fur and the sickest drip!  Every llama is unique, with different fur colors, hairstyles, laid-back expressions, clothes, hats, shades, and more. These are the Laid Back Llamas.</p>
                    <div className=' flex flex-col w-full h-full justify-center items-center'>
                        <button className=' border-[2px] border-black  py-4 px-10 text-black  font-chakra text-xl about-btn-2 relative z-0'>Buy a  Boss Resilient Her</button>
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Desc