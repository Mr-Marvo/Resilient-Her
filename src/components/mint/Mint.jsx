import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './Mint.css';
import './base.css';
import './skeleton.css';
import RippleCanvas from '../rippleEffect/RippleCanvas';

const Mint = () => {

  return (
    <RippleCanvas>
      <Navbar />

      <div class="outer">
        <div class="middle">
          <div class="container">

            <div class="transbox">
              <h1 class='text'>Launching Soon</h1>
            </div>

            <p>&copy; Resilient-Her | All Rights Reserved.</p>
          </div>
        </div>
      </div>

      <Footer />
    </RippleCanvas>
  );
};

export default Mint;
