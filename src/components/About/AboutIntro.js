import React from 'react';
import './AboutIntro.css';
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

const AboutIntro = () => {
  return (
    <div className="AboutIntro__Container">
      <div className="AboutIntro__row">
        <div className="AboutIntro__cell">I'm a</div>
        <div className="AboutIntro__cell">
          <Plx
            className="AboutIntro__emphasis"
            parallaxData={emphasisTextFullStack}
          >
            full stack developer
          </Plx>
        </div>
      </div>

      <div className="AboutIntro__row AboutIntro__location">
        <div className="AboutIntro__cell">
          <div className="AboutIntro__cellPart AboutIntro__locationPart1">
            based out of
          </div>
          <div className="AboutIntro__cellPart AboutIntro__locationPart2">
            Calgary, Alberta
          </div>
        </div>
        <div className="AboutIntro__cell AboutIntro__cellPart AboutIntro__cellPartCanada ">
          <Plx
            className="AboutIntro__emphasis"
            parallaxData={emphasisTextCanada}
          >
            Canada.
          </Plx>
        </div>
      </div>
      <div className="AboutIntro__row">
        <div className="AboutIntro__cell AboutIntro__missionPart1">
          I am always seeking new and
        </div>
      </div>
      <div className="AboutIntro__row">
        <div className="AboutIntro__cell AboutIntro__missionPart2">
          exciting opportunities
        </div>
      </div>
      <div className="AboutIntro__row">
        <div className="AboutIntro__cell AboutIntro__missionPart3">
          to explore and improve at my craft
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
