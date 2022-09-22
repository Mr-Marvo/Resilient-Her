import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import RippleCanvas from '../rippleEffect/RippleCanvas';
import TeamMember from './TeamMember';

const Team = () => {

  return (
    <RippleCanvas>
      <div className="  w-full  min-h-screen h-auto relative flex flex-col   overflow-y-scroll overflow-x-hidden z-0 hero pb-20 ">
        <Navbar />
        <div className=" flex flex-col flex-wrap w-full h-auto  mt-16  container mx-auto justify-center items-center">
          <div className=" flex flex-col w-full h-auto justify-center items-center">
            <h2 className=" uppercase text-purple-600  xxs:text-[27px] xxs:tracking-tighter xs:text-[50px] sm:text-[60px]  lg:text-[110px] text-center sm:text-6xl   font-custome z-40">
              Resilient Her TEAM
            </h2>
          </div>
          <div className=" w-full z-30 h-auto mt-16 grid  sm:grid-cols-2 md:grid-cols-3 gap-x-28  gap-y-1   justify-items-center justify-self-center">
            <TeamMember
              className="z-40"
              name="Athena"
              position="Founder and Project Leader"
              image={require('../../assets/images/s7.png')}
            />
            <TeamMember
              className="z-40"
              name="Aphrodite"
              position="Head of Philanthropy"
              image={require('../../assets/images/s8.png')}
            />
            <TeamMember
              className="z-40"
              name="Selene"
              position="Social Media Manager"
              image={require('../../assets/images/s9.png')}
            />
            <TeamMember
              className="z-40"
              name="Hera"
              position="Lead Programmer and Developer"
              image={require('../../assets/images/s10.png')}
            />
            <TeamMember
              className="z-40"
              name="Hestia"
              position="Lead Artist and Creative Director"
              image={require('../../assets/images/s11.png')}
            />
            <TeamMember
              className="z-40"
              name="Nemesis"
              position="Director of Communications"
              image={require('../../assets/images/s12.png')}
            />
          </div>
        </div>
        <div className="text-white xxs:ml-4 sm:ml-0 flex flex-row z-40 justify-center items-center">
          <figure>
            <blockquote cite="">
              <p className="text-xl font-medium tracking-tighter italic text-center">
                <strong className=" text-xl tracking-tighter">"</strong>Some women
                fear the fire, some women simply become it..."
              </p>
            </blockquote>
            <figcaption className="text-center">
              -r.h. <cite>sin</cite>
            </figcaption>
          </figure>
        </div>
        <Footer />
      </div>
    </RippleCanvas>
  );
};

export default Team;
