import React, { useState } from 'react';
import { LogoIcon } from '../static';

const FooterComponent = () => {
  const formHandler = (e) => {
    setIsActive(true);
    e.preventDefault();
    const form = {
      name: name,
      email: email,
    };
    setTimeout(() => {
      setIsActive(false);
    }, 2500);
    console.log(form);
    setName('');
    setEmail('');
  };

  let width = window.screen.width;
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div>
            <h3 className="footer__title">CONTACT US</h3>
            <form action="" className="footer__form" onSubmit={formHandler}>
              <input
                type="text"
                name="name"
                className="form__input"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                className="form__input"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="submit"
                className="form__btn"
                value={!name || !email ? 'fill form' : 'send'}
                disabled={!name || !email}
              />
            </form>
            {isActive && <span className="alert">Сообщение было отправлено</span>}
          </div>

          <div className="footer__logo">
            <LogoIcon fill="#fff" height="81" width={width < 900 ? '200' : '370'} />
          </div>
        </div>
        <div className="footer__gallery">
          <h3>instagram</h3>
          <div className="footer__gallery--wrapper">
            <img src="./assets/footerimg1.jpg" alt="" />

            <img src="./assets/footerimg2.jpg" alt="" />
            <img src="./assets/footerimg3.jpg" alt="" />
            <img src="./assets/footerimg4.jpg" alt="" />
          </div>
          <ul className="footer__socials">
            <li className="footer__socials-item">COPYRIGHT 2022</li>
            <li className="footer__socials-item">ALL RIGHTS RESERVED</li>
            <li className="footer__socials-item">COOKIE SETTINGS</li>
            <li className="footer__socials-item">PRIVACY STATEMENTS</li>
            <li className="footer__socials-item">CONTACT</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
