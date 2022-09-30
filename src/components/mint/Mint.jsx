import React, { useRef, useEffect } from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './Mint.css';
import RippleCanvas from '../rippleEffect/RippleCanvas';
import { useReactCountdown } from 'use-react-countdown';

const Mint = () => {

  const { days, hours, minutes, seconds } = useReactCountdown(
    'July 22, 2023 00:00:00'
  );


  return (
    <RippleCanvas>
      <Navbar />

      <div className='flex flex-col justify-center items-center relative md:h-screen lg:h-screen xxs:h-auto xxs:mt-8 lg:-mt-10'>
        <div className='xxs:w-[300px]  md:w-[500px] lg:w-[800px] h-auto border-8 border-x-0 border-solid border-transparent border-t-[#066fb7] border-b-[#066fb7]' >

          <h1 className='text-[#c200c9] text-[40px] font-medium tracking-[10px] leading-10 pt-[20px] pb-[20px] text-center font-mono'>LAUNCHING SOON</h1>
          <p className='text-teal-100 text-center font-mono'>Follow our discord channel for more info and mint data.</p>

          <div className='flex flex-col md:flex-row mb-8 mt-4 justify-center items-center'>
            <div className='border-[#066fb7] border-4 border-solid lg:text-[3rem] md:text-[22px] xxs:text-[3rem] text-white md:w-32 xxs:w-44 xxs:h-40 lg:w-52 lg:h-44 md:h-24 lg:pl-10 lg:pr-10 md:pl-5 md:pr-5 lg:pt-8 pt-4 lg:pb-8 pb-4 text-center m-4'>{days} <h3 className='md:text-[14px] lg:text-[26px] xxs:text-[26px]'>Days</h3></div>
            <div className='border-[#066fb7] border-4 border-solid lg:text-[3rem] md:text-[22px] xxs:text-[3rem] text-white md:w-32 xxs:w-44 xxs:h-40 lg:w-52 lg:h-44 md:h-24 lg:pl-10 lg:pr-10 md:pl-5 md:pr-5 lg:pt-8 pt-4 lg:pb-8 pb-4 text-center m-4'>{hours} <h3 className='md:text-[14px] lg:text-[26px] xxs:text-[26px]'>Hours</h3></div>
            <div className='border-[#066fb7] border-4 border-solid lg:text-[3rem] md:text-[22px] xxs:text-[3rem] text-white md:w-32 xxs:w-44 xxs:h-40 lg:w-52 lg:h-44 md:h-24 lg:pl-10 lg:pr-10 md:pl-5 md:pr-5 lg:pt-8 pt-4 lg:pb-8 pb-4 text-center m-4'>{minutes} <h3 className='md:text-[14px] lg:text-[26px] xxs:text-[26px]'>Minutes</h3></div>
            <div className='border-[#066fb7] border-4 border-solid lg:text-[3rem] md:text-[22px] xxs:text-[3rem] text-white md:w-32 xxs:w-44 xxs:h-40 lg:w-52 lg:h-44 md:h-24 lg:pl-10 lg:pr-10 md:pl-5 md:pr-5 lg:pt-8 pt-4 lg:pb-8 pb-4 text-center m-4'>{seconds} <h3 className='md:text-[14px] lg:text-[26px] xxs:text-[26px]'>Seconds</h3></div>
          </div>

        </div>
        <br />
        <p className='text-black'>&copy; Resilient-Her | All Rights Reserved.</p>
      </div>

      <Footer />
    </RippleCanvas >
  );
};

export default Mint;
