import React, { useRef, useEffect } from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { BiMinus } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import './Mint.css';
import { BsInfoCircle } from 'react-icons/bs';
import { useState } from 'react';

import {
  getTotalMinted,
  getMaxSupply,
  isPausedState,
  isPublicSaleState,
  isPreSaleState,
  presaleMint,
  publicMint,
} from '../../utils/interact';

import { initOnboard } from '../../utils/onboard';
import { useConnectWallet, useSetChain, useWallets } from '@web3-onboard/react';
import { config } from '../../utils/config';
import RippleCanvas from '../rippleEffect/RippleCanvas';

const Mint = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();
  const connectedWallets = useWallets();

  const [maxSupply, setMaxSupply] = useState(0);
  const [totalMinted, setTotalMinted] = useState(0);
  const [maxMintAmount, setMaxMintAmount] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isPublicSale, setIsPublicSale] = useState(false);
  const [isPreSale, setIsPreSale] = useState(false);

  const [status, setStatus] = useState(null);
  const [mintAmount, setMintAmount] = useState(1);
  const [isMinting, setIsMinting] = useState(false);
  const [onboard, setOnboard] = useState(null);

  const ref = useRef(null);
  const [expand, setExpand] = useState(false);

  //wallet connect
  useEffect(() => {
    setOnboard(initOnboard);
  }, []);

  //store in localstorage
  useEffect(() => {
    if (!connectedWallets.length) return;

    const connectedWalletsLabelArray = connectedWallets.map(
      ({ label }) => label
    );
    window.localStorage.setItem(
      'connectedWallets',
      JSON.stringify(connectedWalletsLabelArray)
    );
  }, [connectedWallets]);

  //get from localstorage
  useEffect(() => {
    if (!onboard) return;

    const previouslyConnectedWallets = JSON.parse(
      window.localStorage.getItem('connectedWallets')
    );

    if (previouslyConnectedWallets?.length) {
      async function setWalletFromLocalStorage() {
        await connect({
          autoSelect: {
            label: previouslyConnectedWallets[0],
            disableModals: true,
          },
        });
      }

      setWalletFromLocalStorage();
    }
  }, [onboard, connect]);

  useEffect(() => {
    const init = async () => {
      setMaxSupply(await getMaxSupply());
      setTotalMinted(await getTotalMinted());

      setPaused(await isPausedState());
      setIsPublicSale(await isPublicSaleState());
      const isPreSale = await isPreSaleState();
      setIsPreSale(isPreSale);

      setMaxMintAmount(
        isPreSale ? config.presaleMaxMintAmount : config.maxMintAmount
      );
    };

    init();
  }, []);

  const presaleMintHandler = async () => {
    setIsMinting(true);

    const { success, status } = await presaleMint(mintAmount);

    setStatus({
      success,
      message: status,
    });

    setIsMinting(false);
  };
  const publicMintHandler = async () => {
    setIsMinting(true);

    const { success, status } = await publicMint(mintAmount);

    setStatus({
      success,
      message: status,
    });

    setIsMinting(false);
  };

  return (
    <RippleCanvas>
      <div
        className={`w-full min-h-screen h-auto  overflow-y-scroll overflow-x-hidden relative  flex flex-col hero pb-20   `}
      >
        <Navbar />

        <div
          onClick={() => {
            setExpand(false);
          }}
          className={`w-fit h-full pt-28 flex flex-col container mx-auto justify-center  items-center font-custome font-bold   relative  `}
        >
          <div className="w-fit h-full flex flex-col justify-center items-center   ">
            <div className="xxs:p-3 xxs:w-[300px] xxs:h-auto xs:w-[350px] xs:h-auto    sm:w-[500px] sm:h-fit flex flex-col  bg-dark_1  rounded-xl   px-4 justify-center items-center mint">
              <div className=" w-full h-auto flex flex-row text-white justify-center items-center">
                <h2 className="xxs:text-sm font-bold bg-clip-text mt-2 tracking-widest text-transparent bg-gradient-to-l from-amber-400 via-white  to-white sm:text-2xl mb-4  ">
                  {paused ? 'Paused' : isPreSale ? 'Pre-Sale' : 'Public Sale'}
                </h2>
              </div>
              <div className="  h-auto flex flex-row    w-full justify-center items-center ">
                <div className=" flex flex-row  justify-around items-center  bg-neutral-700  min-w-[100px] w-auto py-1 rounded-full">
                  <div className=" w-[7px] h-[7px] mint-status mr-3 rounded-full bg-blue-700"></div>
                  <span className=" text-white z-40">
                    {wallet?.accounts[0].address
                      ? wallet?.accounts[0].address.slice(0, 8) +
                      '...' +
                      wallet?.accounts[0]?.address.slice(-4)
                      : ''}
                  </span>
                </div>
              </div>

              <div className=" w-full h-auto flex flex-row text-white justify-between">
                <h3 className="xxs:text-sm sm:text-xl ">Remaining</h3>
                <strong className="xxs:text-sm sm:text-xl">
                  {totalMinted}/{maxSupply}
                </strong>
              </div>
              <div className=" w-full h-auto flex flex-row text-white mt-10 justify-between">
                <h3 className="xxs:text-sm sm:text-xl ">Price</h3>
                <strong className="xxs:text-sm sm:text-xl ">0.1ETH</strong>
              </div>

              <div className=" w-full h-auto flex flex-row text-white justify-between mt-10 items-center">
                <h3 className=" xxs:text-sm sm:text-xl  "> Quantity</h3>
                <div className=" w-full h-auto flex flex-row text-white  sm:px-10 xxs:justify-around items-center ">
                  <div className=" sm:mr-4 xxs:w-[20px] xxs:h-[20px] minus border-[1px] border-transparent xs:w-[40px] xs:h-[40px]  font-bold cursor-pointer rounded-full bg-red-500 flex justify-center items-center">
                    <BiMinus
                      onClick={() => {
                        if (mintAmount > 1) {
                          setMintAmount(mintAmount - 1);
                        }
                      }}
                    />
                  </div>
                  <span className=" border-[1px] px-4 py-4 justify-center items-center flex font-custome font-bold   w-[60px] border-none outline-none text-white">
                    {mintAmount}
                  </span>
                  <div className=" sm:ml-4 xxs:w-[20px] xxs:h-[20px] plus border-[1px] border-transparent xs:w-[40px] xs:h-[40px] font-bold cursor-pointer rounded-full  bg-sky-600 flex justify-center items-center">
                    <AiOutlinePlus
                      onClick={() => {
                        if (mintAmount < maxMintAmount) {
                          setMintAmount(mintAmount + 1);
                        }
                      }}
                    />
                  </div>
                </div>
                <strong className="xxs:text-sm sm:text-xl    sm:w-[200px]">
                  <div className=" flex flex-col  w-full justify-start items-end">
                    <span>
                      {Number.parseFloat(config.price * mintAmount).toFixed(2)}{' '}
                    </span>{' '}
                    <span className=" text-sm">ETH + GAS</span>
                  </div>
                </strong>
              </div>

              <div className=" w-full  mt-10 h-auto flex flex-row text-white justify-center items-center  relative z-10 ">
                {wallet ? (
                  <button
                    className="z-50 relative  uppercase bg-neutral-700 xxs:text-sm sm:text-xl cursor-pointer p-4  mint-btn border-[1px] border-transparent"
                    onClick={isPreSale ? presaleMintHandler : publicMintHandler}
                    disabled={paused || isMinting}
                  >
                    {connecting
                      ? 'Connecting...'
                      : isMinting
                        ? 'Minting...'
                        : 'Mint Now'}
                  </button>
                ) : (
                  <button
                    className={` relative  uppercase bg-neutral-700 xxs:text-sm sm:text-xl cursor-pointer p-4 mint-btn border-[1px] border-transparent`}
                    onClick={() => connect()}
                  >
                    Wallet Connect
                  </button>
                )}
              </div>
            </div>
            <div className=" w-full h-auto flex flex-col text-white justify-center items-center mt-3 ">
              <a
                href={`https://rinkeby.etherscan.io/address/${config.contractAddress}`}
                target="_blank"
                className="xxs:text-sm sm:text-sm  relative z-50 order-2"
              >
                View Contract on Etherscan
              </a>

              {status && (
                <div
                  className={`border order-1 ${status.success ? 'border-green-500' : 'border-brand-pink-400 '
                    } rounded-md text-start h-full mx-auto mt-8 md:mt-4"`}
                >
                  <p className=" text-white text-sm md:text-base break-words ...">
                    {status.message}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col container mx-auto z-40 absolute mt-40 w-full h-auto justify-end pb-20 items-end">

            <div
              className={`text-white xxs:px-2 xs:px-10 xxs:py-4 sm:py-10   absolute z-40 
            ${expand ? 'flex' : 'hidden'
                } flex-col justify-center items-start xxs:bg-gray-800 sm:bg-gray-800 lg:step-bg `}
            >
              <div className="flex flex-row justify-center items-center ">
                <div className="xxs:w-[20px] xxs:h-[20px] sm:w-[50px] sm:h-[50px] xxs:text-base sm:text-2xl bg-white text-black justify-center items-center flex flex-col  font-custome font-bold rounded-full">
                  1
                </div>
                <h4 className=" xxs:text-sm sm:text-xl font-custome font-bold ml-4">
                  Connect Etherium Wallet
                </h4>
              </div>

              <div className="flex flex-row justify-center items-center pt-4">
                <div className=" xxs:w-[20px] xxs:h-[20px] sm:w-[50px] sm:h-[50px] xxs:text-base sm:text-2xl bg-white text-black justify-center items-center flex flex-col  font-custome font-bold rounded-full">
                  2
                </div>
                <h4 className="  xxs:text-sm sm:text-xl font-custome font-bold ml-4">
                  Select Mint Amount
                </h4>
              </div>

              <div className="flex flex-row justify-center items-center pt-4">
                <div className=" xxs:w-[20px] xxs:h-[20px] sm:w-[50px] sm:h-[50px] xxs:text-base sm:text-2xl bg-white text-black justify-center items-center flex flex-col  font-custome font-bold rounded-full">
                  3
                </div>
                <h4 className="  xxs:text-sm sm:text-xl font-custome font-bold ml-4">
                  Click Mint Button
                </h4>
              </div>

              <div className="flex flex-row justify-center items-center pt-4">
                <div className=" xxs:w-[20px] xxs:h-[20px] sm:w-[50px] sm:h-[50px] xxs:text-base sm:text-2xl bg-white text-black justify-center items-center flex flex-col  font-custome font-bold rounded-full">
                  4
                </div>
                <h4 className="  xxs:text-sm sm:text-xl font-custome font-bold ml-4">
                  Mint NFT
                </h4>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <div className=" w-fit text-3xl  z-[999] right-0 mr-4 mb-20  bottom-0  fixed    xl:mr-44  text-white cursor-pointer btn-shadow rounded-full  bg-gray-800 px-4 py-4">
          <BsInfoCircle
            onClick={() => {
              setExpand(!expand);
            }}
          />
        </div>
      </div>
    </RippleCanvas>
  );
};

export default Mint;
