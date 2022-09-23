import React from 'react';
import BuyComponent from '../Components/BuyComponent';
import FooterComponent from '../Components/FooterComponent';
import Gallery from '../Components/Gallery';
import HeaderComponent from '../Components/Header';
import Main from '../Components/Main';
import MainComponent from '../Components/MainComponent';
import TechnologyComponent from '../Components/TechnologyComponent';
import { useCartContext } from '../Context';

const Home = () => {
  const { addToCart } = useCartContext();
  return (
    <>
      <HeaderComponent />
      <Main>
        <MainComponent />
        <BuyComponent addToCart={addToCart} />
        <TechnologyComponent />
        <Gallery />
      </Main>
      <FooterComponent />
    </>
  );
};

export default Home;
