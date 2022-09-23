import React from 'react';
import { LogoIcon } from '../static';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context';

const HeaderComponent = () => {
  const { basket } = useCartContext();

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <LogoIcon />
          <a href="#buy" className="header__top-btn">BUY</a>
          <a className="header__top-tel" href="tel:+1 777 77 77">
            +1 777 77 77
          </a>
          <Link to="/basket" className="basket__btn">
            <RiShoppingBasketLine size={30} />
            {basket.length ? <span>{basket.length}</span> : ''}
          </Link>
        </div>
        <div className="header__content">
          <div className="header__content-box">
            <h1>RAY AIR POCKET</h1>
            <p className="box-p">INFLATABLE SUP BOARD</p>
            <p className="box-p">SIZES: 11'6"X31"</p>
            <p className="header__decor-text header__decor-text--first">DOM</p>
            <p className="header__decor-text header__decor-text--sec">FREE</p>
            <p className="header__decor-text  header__decor-text--third">
              PACK SMALL FOR BIG ADVENTURES
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderComponent;
