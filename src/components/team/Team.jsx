import React from 'react'
import TeamMember from './TeamMember'

const Team = () => {
  return (
    <div className=' mt-24 w-full h-auto relative flex flex-col  flex-wrap justify-center items-center'>
        <div className=' flex flex-col flex-wrap w-full h-auto container mx-auto justify-center items-center'>
            <div className=' flex flex-col w-full h-auto justify-center items-center'>
                <h2 className=' uppercase text-white text-6xl  font-chakra'>LAID BACK LLAMAS TEAM</h2>
            </div>
            <div className=' w-auto h-auto mt-20 grid grid-cols-4 gap-x-10  gap-y-12  justify-items-center justify-self-center'>
                <TeamMember/>
                <TeamMember/>
                <TeamMember/>
                <TeamMember/>
                <TeamMember/>
                <TeamMember/>
                <TeamMember/>
                <TeamMember/>
               
            </div>
        </div>
    </div>
  )
}

export default Team