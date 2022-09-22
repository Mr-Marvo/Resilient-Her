import React, { useEffect, useRef } from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import RippleCanvas from '../rippleEffect/RippleCanvas';
import FaqItem from './FaqItem';

const Faq = () => {

  return (
    <RippleCanvas>
      <Navbar />
      <div className=" w-full h-auto flex flex-col pt-16  mb-32">
        <div className=" flex flex-col w-full h-auto justify-center items-center">
          <h2 className=" uppercase text-purple-600 xxs:text-[27px] xxs:tracking-tighter xs:text-[50px] sm:text-[60px]  lg:text-[110px]  font-custome z-40">
            FAQ
          </h2>
        </div>
        <div className=" flex flex-col w-full h-auto relative justify-center items-center mt-6 ">
          <FaqItem
            question="How can I buy a Resilient Her?"
            answer="After sales start you can buy on the mint page."
          />
          <FaqItem
            question="How do the rarities work?"
            answer="Resilient Her NFT's rarity will be revealed after the opensea listing. Resilient Her's are drawn by hand, and are carefully detailed.The rarer the Her is, the more she will be worth."
          />
          <FaqItem
            question="What is a Super-Rare Her?"
            answer="An NFT with rare traits is very scarce and only a selected few will be able to get their hands on this type of NFT."
          />
          <FaqItem
            question="What is the mint price?"
            answer="0,10 ETH Pre-sale.0.15 ETH Public Sale."
          />
          <FaqItem question="How many can I mint?" answer="Max 3 per person." />
          <FaqItem
            question="When will the Resilient-Her's be revealed?"
            answer="After 10 days from mint."
          />
          <FaqItem
            question="What are the Royalties?"
            answer="We charge 5% royalties, and opensea charges another 2.5% commission on all sales, tallying 7.5% commission in total."
          />
          <FaqItem
            question="How many Resilient-Her’s are there ? "
            answer="9880"
          />
        </div>
      </div>
      <Footer />
    </RippleCanvas>
  );
};

export default Faq;
