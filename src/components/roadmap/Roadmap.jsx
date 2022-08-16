import React, { useEffect, useRef } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import "./Roadmap.css"
import Roadmap2 from './Roadmap2'
import Roadmap3 from './Roadmap3'
import Roadmap4 from './Roadmap4'


const Roadmap = () => {


  return (
    <>  
    <div className=' flex flex-col relative h-[100vh]  overflow-x-hidden  rd-bg'>
   
    
        <div className='flex flex-col   mx-auto w-full  h-auto  '>
          
            <Roadmap2/>
            <Roadmap3/>
            <Roadmap4/>
        </div>

    </div>
    
    </>
  )
}

export default Roadmap