import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import RippleCanvas from '../rippleEffect/RippleCanvas';

const AboutNFT = () => {

  return (
    <RippleCanvas>
      <div className=" flex flex-col   w-full   min-h-screen h-auto    relative hero  z-0 overflow-x-hidden   overflow-y-scroll pb-20   ">
        <canvas
          className=" w-full  min-h-full   absolute z-30 opacity-60"
          ref={ref}
        ></canvas>
        <Navbar />
        <div className=" flex flex-wrap flex-col w-full  h-full  items-center  mt-4   ">
          <div className=" flex flex-col  w-full  h-auto justify-center items-center ">
            <h2 className="xxs:text-[27px] xxs:tracking-tighter xs:text-[40px] sm:text-[60px] text-purple-600 sm:tracking-tighter lg:text-[100px] mx-1  mt-10 tracking-tighter text-transparent leading-[1]  xs:font-extrabold font-custome desc-title1 uppercase z-40">
              Resilient Her
            </h2>
            <h2 className="xxs:text-xl xxs:top-4  text-purple-600  xs:text-[35px] sm:text-4xl sm:top-4 lg:text-6xl mx-2   font-custome relative  z-40">
              Project Focus
            </h2>
            <div className=" flex flex-col mx-4  w-fit h-full  justify-center items-center mt-10">
              <p className=" xxs:text-sm xs:text-xl text-white   xxs:w-[300px] xs:w-[350px] xxs:px-1 sm:w-[85%]  font-custome z-40 text-center">
                Resilient Her is a real-life use project, which focuses on various
                aspects around the world that affects under-privileged and abused
                women worldwide. Our team consists of experienced, all rounded
                individuals with more than 20 years experience in their
                specialized fields.
              </p>
              <p className=" xxs:text-sm xs:text-xl text-white  xxs:w-[300px] xs:w-[350px] xxs:px-1 sm:w-[85%]  font-custome z-40 text-center mt-4">
                This project defines itself as a one-of-a-kind, long term project
                and aims to improve the lives of millions of women across the
                world who suffer from <p className=" italic">inter-alia</p>
                Gender-based violence, depression, social problems, financial
                problems etc.
                <br /> At the same time, we have developed a financial model by
                means of an NFT whereby an Investor can get superb value for
                money. By being a Resilient-Her NFT holder, VIP access will be
                granted to members and various regular perks will be offered which
                will be constantly refreshed and updated to keep up with current
                trends.
              </p>
              <div className=" flex flex-col w-full h-full justify-center items-center   mt-10 ">
                <Link to="/mint">
                  <button className=" mb-10 border-[2px] border-white  uppercases py-4 px-10 text-white xxs:text-sm lg:text-xl font-custome text-xl about-btn-2 relative z-40 ">
                    Buy a Resilient Her
                  </button>
                </Link>
                <div className="text-white  flex flex-row   justify-center items-center  z-40">
                  <figure>
                    <blockquote cite="">
                      <p className="font-medium tracking-tighter italic text-xl text-center">
                        <strong className="text-xl tracking-tighter">"</strong>
                        In a world that wants women to whisper, I choose to yell."
                      </p>
                    </blockquote>
                    <figcaption className="text-center">
                      - Harriet Tubman <cite>Social activist</cite>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col   absolute bottom-0  w-full left-0">
          <Footer />
        </div>
      </div>
    </RippleCanvas>
  );
};

export default AboutNFT;
