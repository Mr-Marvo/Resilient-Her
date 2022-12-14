import React from 'react';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import './TeamMember.css';
const TeamMember = (props) => {
  return (
    <div className=" flex flex-col w-[210px] h-[330px]   relative">
      <div className=" flex w-full flex-col h-auto container mx-auto cursor-pointer">
        <div className=" flex flex-col w-[210px] h-[190px]  bg-blue-700 border-[2px] border-white relative">
          <img
            src={props.image}
            alt="team"
            className=" -top-4  absolute bg-cover flex  w-full h-[200px] z-40 team-img"
          />
        </div>
        <div className=" flex flex-col w-full h-auto justify-center items-center mt-1">
          <h3 className=" text-white text-2xl  font-bold  font-custome z-40">
            {props.name}
          </h3>
          <p className=" text-white text-center font-custome mt-1 z-40">
            {props.position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
