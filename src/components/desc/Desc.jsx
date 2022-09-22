import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './Desc.css';
import { Link } from 'react-router-dom';
import RippleCanvas from "../rippleEffect/RippleCanvas"

const Desc = () => {
  return (
    <RippleCanvas>
      <Navbar />
      <div className=" flex flex-wrap flex-col w-full  h-full  items-center  mt-10 ">
        <div className=" flex flex-col  w-full  h-auto justify-center items-center ">
          <h2 className=" xxs:text-[27px] xxs:tracking-tighter xs:text-[50px] sm:text-[60px]  lg:text-[110px] mx-1 text-purple-600 text-transparent  font-extrabold font-custome desc-title1  uppercase z-40">
            About Us
          </h2>
          <h2 className="xxs:text-xl xxs:top-0  xs:text-[35px] sm:text-4xl sm:top-1  lg:text-6xl mx-2  relative  font-custome text-purple-600 z-40 ">
            Resilient Her
          </h2>
          <div className=" flex flex-col mx-4  w-fit h-full  justify-center items-center mt-10">
            <p className=" xxs:text-base xs:text-xl text-white   xxs:w-[300px] xs:w-[350px] sm:w-[70%] font-custome  z-40 text-center">
              We are a group of six strong independent activists with an
              ambitious goal to improve the future for females around the world
              through tackling everyday problems that woman face. We are
              passionate and determined to make a difference by uniting,
              empowering, supporting and creating an environment in which
              females can feel safe and heard. We are positive that together as
              a community we can make a difference. We stand together with one
              heart and one fight.
            </p>
            <strong className=" text-white uppercase text-xl z-40 font-custome">
              THE FUTURE IS FEMALE!
            </strong>
            <div className=" flex flex-col w-full h-full justify-center items-center   mt-10 ">
              <Link to="/mint">
                {' '}
                <button className=" mb-10 py-4 px-4 text-white  border-white border-[2px] uppercase font-custome xxs:text-sm lg:text-xl  relative  about-btn-1 z-40">
                  Buy a Resilient Her
                </button>
              </Link>
              <div className="text-white  flex flex-row  justify-center items-center z-40 ">
                <figure>
                  <blockquote cite="">
                    <p className="  font-medium  tracking-tighter text-center  italic text-xl">
                      <strong className=" text-xl tracking-tighter">"</strong>A
                      really strong woman accepts the war she went through and
                      is ennobled by her scars."
                    </p>
                  </blockquote>
                  <figcaption className="text-center">
                    -Cleopatra - , <cite>51 BC</cite>
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
    </RippleCanvas>
  );
};

export default Desc;
