import React from 'react'
import FaqItem from './FaqItem'

const Faq = () => {
  return (
    <div className=' flex flex-col flex-wrap w-full h-auto relative mt-16'>
        <div className=' container mx-auto w-full h-auto flex flex-wrap flex-col'>
            <div className=' flex flex-col w-full h-auto justify-center items-center'>
                <h2 className=' uppercase text-white text-6xl  font-chakra'>FAQ</h2>
            </div>
            <div className=' flex flex-col w-full h-auto relative justify-center items-center mt-6'>
                <FaqItem question="What is MiNFT ?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                <FaqItem question="What is MiNFT ?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                <FaqItem question="What is MiNFT ?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                <FaqItem question="What is MiNFT ?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                <FaqItem question="What is MiNFT ?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                <FaqItem question="What is MiNFT ?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                
            </div>
        </div>
    </div>
  )
}

export default Faq