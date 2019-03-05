import React from 'react';
import { Textfit } from 'react-textfit';
import './AboutIntro.css';

const AboutIntro = () => {
  return (
    <div className="AboutIntro__Container">
      <div className="AboutIntro__row">
        <Textfit>Fat headline!</Textfit>
        <Textfit>Fat headline!</Textfit>
        <Textfit>Fat headline!</Textfit>
      </div>
      <div className="AboutIntro__row">hello2</div>
      <div className="AboutIntro__row">hello3</div>
      <div className="AboutIntro__row">hello4</div>
    </div>
  );
};

export default AboutIntro;
