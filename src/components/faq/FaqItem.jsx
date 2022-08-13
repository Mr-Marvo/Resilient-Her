import React, { useState } from 'react'
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"
import "./FaqItem.css";

const FaqItem = ({question,answer}) => {

  const [expand,setExpand] = useState(false);
  const expandCls = expand ? 'flex' : 'hidden';
  const answer1 = `${expandCls} px-4 py-1 relative` 
  
  const continerHeight = expand? `h-[100px] `:` h-[70px] `

  return (
    <div className={` ${continerHeight}  overflow-y-auto  anim xs:w-[500px] md:w-[1100px] relative    bg-transparent text-white flex flex-col border-b-[1px] border-opacity-10 `}>
        <div className=' w-full  relative h-[65px] flex flex-row  justify-between items-center px-4 z-40'>
            <h3 className='xs:text-lg md:text-xl  pt-2 font-bold font-custome'>{question}</h3>
            <div className='flex flex-row ml-10 text-2xl z-40'> 
            {
              (expand)?  <AiOutlineMinus onClick={()=>setExpand(!expand)} className='btn cursor-pointer'/>:<AiOutlinePlus onClick={()=>setExpand(!expand)} className=' cursor-pointer'/>
            }  
            
            </div>
        </div>
        <div className={`${answer1} text-gray-400 font-custome z-40`}>
            <sapn>
             {answer}
            </sapn>
        </div>
    </div>
  )
}

export default FaqItem;