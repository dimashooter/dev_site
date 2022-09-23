import React from 'react';

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__inner">
          <div className="gallery__box">
            <div className="gallery__min-wrapper">
              <p className="gallery__text">
                Our new Micro technology provides a featherweight and quality construction that can
                be rolled and packed into a backpack half the width of a standard iSUP package. The
                reduced pad and our twin Click Fin system make it possible to have a regular sized
                iSUP packed into minimal space.
              </p>
              <div className="gallery__min">
                <img className="gallery__img img-1" src="./assets/gmin-1.png" alt="" />
                <img className="gallery__img img-2" src="./assets/gmin2.jpg" alt="" />
                <img className="gallery__img" src="./assets/gmin3.jpg" alt="" />
              </div>
            </div>
            <div className="gallery__max">
              <img className="gallery__img" src="./assets/gmax-1.png" alt="" />
              <img className="gallery__img" src="./assets/gmax-2.png" alt="" />
              <img className="gallery__img" src="./assets/gmax-3.png" alt="" />
              <img className="gallery__img" src="./assets/gmax-4.png" alt="" />
              <img className="gallery__img" src="./assets/gmax-5.png" alt="" />
              <img className="gallery__img" src="./assets/gmax-6.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
