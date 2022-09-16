import Hero from './components/hero/Hero';
import React, { Routes, Route } from 'react-router-dom';
import Desc from './components/desc/Desc';
import Roadmap from './components/roadmap/Roadmap';
import Faq from './components/faq/Faq';
import Team from './components/team/Team';
import AboutNFT from './components/aboutNFT/AboutNFT';
import Future from './components/future/Future';
import Tearm from './components/tearm&Condition/Tearm';
import Policy from './components/tearm&Condition/Policy';
import NFTLicence from './components/tearm&Condition/NFTLicence';
import Mint from './components/mint/Mint';
import { useEffect, useState } from 'react';
// import video from './assets/loader.mp4';

function App() {
  const [spiner, setSpiner] = useState(true);

  const loaderObject = document.querySelector('#loader')

   const hideLoader = () => loaderObject.classList.add('hidden')

  useEffect(() => {
    setTimeout(() => {
    //   // setSpiner(false);
    hideLoader()
    }, 3000);
  }, []);

  return (
    <div>
      {spiner ? (
        <div className=" w-full  h-screen bg-black relative flex flex-col justify-center items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className=" w-[500px] h-[500px] object-cover "
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="loader ">
            <div className="loaderBar"></div>
          </div>
        </div>
      </div> */}
      <Routes className={ (spiner ?'hidden':'')} >
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/about" element={<Desc />} />
        <Route exact path="/aboutNFT" element={<AboutNFT />} />
        <Route exact path="/future" element={<Future />} />
        <Route exact path="/roadmap" element={<Roadmap />} />
        <Route exact path="/mint" element={<Mint />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/policy" element={<Policy />} />
        <Route exact path="/term" element={<Tearm />} />
        <Route exact path="/nft" element={<NFTLicence />} />
      </Routes>
    </div>
  );
}

export default App;
