import React, { useRef, useEffect } from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './Mint.css';
import RippleCanvas from '../rippleEffect/RippleCanvas';

const Mint = () => {

  return (
    <RippleCanvas>
      <Navbar />

      <div className='flex flex-col justify-center items-center relative h-screen -mt-28'>
        <div className='xs:w-[300px]  md:w-[500px] lg:w-[800px] h-auto border-8 border-x-0 border-solid border-transparent border-t-[#066fb7] border-b-[#066fb7]' >

          <h1 className='text-[#c200c9] text-[40px] font-medium tracking-[10px] leading-10 pt-[20px] pb-[20px] text-center font-mono'>LAUNCHING SOON</h1>

        </div>
        <br />
        <p className='text-black'>&copy; Resilient-Her | All Rights Reserved.</p>
      </div>

      <Footer />
    </RippleCanvas >
  );
};

export default Mint;
