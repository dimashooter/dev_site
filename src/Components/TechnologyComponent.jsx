import React from 'react';
import { PlayIcon } from '../static';

const TechnologyComponent = () => {
  return (
    <section className="technology">
      <div className="container">
        <div className="technology__inner">
          <button className="technology__btn">
            <PlayIcon />
            <span>Play video</span>
          </button>

          <h3 className="technology__title">MICRO TECHNOLOGY</h3>

          <ol className="technology__list">
            <li className="technology__list-item">First PVC rail layer </li>
            <li className="technology__list-item">Second PVC rail layer </li>
            <li className="technology__list-item">Thin diamond grooving split-pad</li>
            <li className="technology__list-item">Strong Tarpaulin layer </li>
            <li className="technology__list-item">V-Drop Stitch core</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TechnologyComponent;
