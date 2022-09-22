import React from 'react'
import "./Roadmap.css"
import Roadmap2 from './Roadmap2'
import Roadmap3 from './Roadmap3'
import Roadmap4 from './Roadmap4'

import RippleCanvas from "../rippleEffect/RippleCanvas"

const Roadmap = () => {

  return (
    <RippleCanvas>
      <div className='flex flex-col   mx-auto w-full  h-auto  '>
        <Roadmap2 />
        <Roadmap3 />
        <Roadmap4 />
      </div>
    </RippleCanvas>
  )
}

export default Roadmap