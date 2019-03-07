import React from 'react';
import './AboutIntroText.css';
import Plx from 'react-plx';

const emphasisTextFullStack = [
  {
    start: 500,
    end: 1800,
    properties: [
      {
        startValue: 1,
        endValue: 1.1,
        property: 'scale'
      },
      {
        startValue: 0,
        endValue: 24,
        property: 'translateX'
      },
      {
        startValue: 0,
        endValue: -2,
        property: 'translateY'
      },
      {
        startValue: '#FFCF21',
        endValue: '#D26200',
        property: 'color'
      }
    ]
  }
];

const emphasisTextCanada = [
  {
    start: 500,
    end: 1800,
    properties: [
      {
        startValue: 1,
        endValue: 1.8,
        property: 'scale'
      },
      {
        startValue: 0,
        endValue: 65,
        property: 'translateX'
      },
      {
        startValue: 0,
        endValue: -14,
        property: 'translateY'
      },
      {
        startValue: '#FFCF21',
        endValue: '#D26200',
        property: 'color'
      }
    ]
  }
];

const AboutIntroText = () => {
  return (
    <div className="AboutIntroText__Container">
      <div className="AboutIntroText__row">
        <div className="AboutIntroText__cell">I'm a</div>
        <div className="AboutIntroText__cell">
          <Plx
            className="AboutIntroText__emphasis"
            parallaxData={emphasisTextFullStack}
          >
            full stack developer
          </Plx>
        </div>
      </div>

      <div className="AboutIntroText__row AboutIntroText__location">
        <div className="AboutIntroText__cell">
          <div className="AboutIntroText__cellPart AboutIntroText__locationPart1">
            based out of
          </div>
          <div className="AboutIntroText__cellPart AboutIntroText__locationPart2">
            Calgary, Alberta
          </div>
        </div>
        <div className="AboutIntroText__cell AboutIntroText__cellPart AboutIntroText__cellPartCanada ">
          <Plx
            className="AboutIntroText__emphasis"
            parallaxData={emphasisTextCanada}
          >
            Canada.
          </Plx>
        </div>
      </div>
      <div className="AboutIntroText__row">
        <div className="AboutIntroText__cell AboutIntroText__missionPart1">
          I am always seeking new and
        </div>
      </div>
      <div className="AboutIntroText__row">
        <div className="AboutIntroText__cell AboutIntroText__missionPart2">
          exciting opportunities
        </div>
      </div>
      <div className="AboutIntroText__row">
        <div className="AboutIntroText__cell AboutIntroText__missionPart3">
          to explore and improve at my craft
        </div>
      </div>
    </div>
  );
};

export default AboutIntroText;
