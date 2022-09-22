import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import RippleCanvas from '../rippleEffect/RippleCanvas';

const Future = () => {

  return (
    <RippleCanvas>
      <Navbar />
      <div className=" flex flex-wrap flex-col w-full  h-full  items-center  mt-4   ">
        <div className=" flex flex-col  w-full  h-auto justify-center items-center ">
          <h2 className="xxs:text-[27px] xxs:tracking-tighter xs:text-[50px] sm:text-[60px]  lg:text-[110px]  text-center text-purple-600   sm:top-4    mx-1  mt-10 tracking-tighter text-transparent leading-[1]  xs:font-extrabold font-custome desc-title1 uppercase z-40">
            The resilience has begun
          </h2>
          {/* <h2 className="xxs:text-[10px] xxs:top-4   xs:text-[15px] sm:text-xl sm:top-4 lg:text-xl mx-2   font-custome relative text-white z-40">
            “Women are resilient, brave, and strong.”
          </h2> */}
          <div className=" flex flex-col mx-4  w-full h-full  justify-center items-center mt-20">
            <p className=" xxs:text-sm xs:text-xl text-white   xxs:w-[300px] xs:w-[90%]  xxs:px-1 sm:w-[90%]  font-custome z-40 text-center">
              <strong className=" text-3xl  underline text-purple-500">
                The Scars
              </strong>
              <br />
              <br />
              Women worldwide have been facing gender-based violence,
              discrimination, trafficking, and other social issues plaguing the
              community. Every day women are being killed, abused, exploited and
              raped.
              <br />
              <br />
              Regardless of how progressive a country is, women around the world
              have faced gender-based violence, drug abuse, and much more
              throughout history. The problem has decayed and become worse for
              decades, leaving severe wounds of war. Men continue to dominate
              women in workplaces and homes. The self-worth of millions of women
              is stripped away gradually until there's just depression and
              anxiety left in their personalities.
              <br />
              <br />
              The scars of violence, and abuse, don't fade with time, it becomes
              deep as time passes. Millions of female fighters and soldiers
              across the world are struggling with drug addiction, depression,
              anxiety, social problems, and financial issues because of
              discrimination against them daily.
            </p>
            <p className=" xxs:text-sm xs:text-xl text-white  xxs:w-[300px] xs:w-[90%] xxs:px-1 sm:w-[90%]   font-custome z-40 text-center mt-10">
              <strong className=" text-[25px] underline text-purple-500">
                Glimmer of hope . . .
              </strong>{' '}
              <br />
              <br />
              The current situation that females around the world face requires
              improvement in their condition in society because injustice
              against women is simply unacceptable.
              <br />
              <br />
              Society must give women their rights as human beings, provide them
              the right to speak freely, the right to be heard, and appreciate
              them for their achievements.
              <br />
              <br />
              Millions of women all around the world are waiting for the day to
              be set free from the cage of darkness and to fly in order to find
              their destiny.
              <br />
              <br />
              They are waiting to see flashes of a better life and a glimmer of
              hope…
            </p>
            <p className=" xxs:text-sm xs:text-xl text-white  xxs:w-[300px] xs:w-[90%]  xxs:px-1 sm:w-[90%]  font-custome z-40 text-center mt-10">
              <strong className=" text-3xl underline text-purple-500">
                The Future is Female!
              </strong>{' '}
              <br /> <br />
              With courage in their hearts, many women warriors are fighting
              against all odds to protect women's rights and are fighting for
              equality and freedom.
              <br />
              <br />
              Together we should work toward the advancement of women in
              society. We can do this by giving people the tools and support to
              create a more inclusive and equitable workplace for all women,
              which we define as an environment where everyone has equal access
              to opportunities and resources.
              <br />
              <br />
              One needs to know that “Women’s rights mean privileges and freedom
              equal to those of men,". Women are no less than a man in any way,
              and they must take a step ahead and use their rights to make the
              world a better place to live for themselves and the younger
              generations to come.
              <br />
              <br />
              Heaven is what the world will become when abuse against women will
              no longer exist.
              <br />
              <br />
              Enter Resilient-Her . . . Our purpose: To make this world a better
              place and to fight for women’s rights for all women across the
              globe!
              <br />
              <br />
              <strong className="text-purple-500">
                {' '}
                The Future is Female!
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col   absolute bottom-0  w-full left-0">
        <Footer />
      </div>
    </RippleCanvas>
  );
};

export default Future;
