import React from 'react';
import { PlayIcon } from '../static';

const MainComponent = () => {
  return (
    <section className="main__wrapper">
      <div className="container">
        <div className="main__inner">
          <div className="main__inner-left">
            <p>
              After our well received Fly Air Pocket Edition we’re adding the respective touring
              iSUP to our Range – the Ray Air Pocket Edition! The ultra travel-friendly touring iSUP
              is built in a tough but light construction that allows it to be packed into a backpack
              half the size of a regular iSUP.
            </p>
            <button className="main__inner-left--btn">
              <PlayIcon />
              <span>Play video</span>
            </button>
          </div>
          <div className="main__inner-center">
            <p>
              With a thinner deck pad and tough but flexible construction, the Ray Air Pocket
              Edition can be rolled and packed into a much narrower bag, making it extremely easy to
              store and transport. Based on our highly versatile Ray Air 11’6’’, the efficient shape
              is packed with volume - offering safe, stable paddling and superb glide – which makes
              it the perfect iSUP for everyone paddling some distance. With its minimal weight and
              dimensions nothing comes close the convenient handling of our Pocket Edition iSUPs!
            </p>
          </div>
          <div className="main__inner-right">
            <img src="./assets/board.png" alt="" />
          </div>
        </div>
        <div className="main__specs">
          <h2>SPECS</h2>

          <ul className="specs__blocks">
            <li className="specs__block">
              <p className="spec__block-name">board</p>
              <p className="spec__block-description"> RAY AIR POCKET 11'6"X31"</p>
            </li>
            <li className="specs__block">
              <p className="spec__block-name">VOLUME</p>
              <p className="spec__block-description"> 299 L</p>
            </li>
            <li className="specs__block">
              <p className="spec__block-name">WIDTH</p>
              <p className="spec__block-description">31" / 78.7 CM</p>
            </li>
            <li className="specs__block">
              <p className="spec__block-name">LENGTH</p>
              <p className="spec__block-description">11'6'' / 350.5 CM</p>
            </li>
            <li className="specs__block">
              <p className="spec__block-name">THICKNESS</p>
              <p className="spec__block-description">6” / 15 CM</p>
            </li>
            <li className="specs__block">
              <p className="spec__block-name">WEIGHT</p>
              <p className="spec__block-description"> 8.5 KG</p>
            </li>
            <li className="specs__block">
              <p className="spec__block-name">FITTINGS</p>
              <p className="spec__block-description"> 2X FCS FIN SYSTEM / 2 X 4.5" CLICK FIN</p>
            </li>
            <li className="specs__block">
              <p className="spec__block-name">REC. USER WEIGHT</p>
              <p className="spec__block-description"> UP TO 100 KG</p>
            </li>
            <li className="specs__block">
              <p className="spec__block-name">MASTFOOT INSERT</p>
              <p className="spec__block-description">NO</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainComponent;
