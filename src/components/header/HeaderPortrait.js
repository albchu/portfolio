import React from 'react';
import Fade from 'react-reveal/Fade';
import classnames from 'classnames';
import { animateScroll } from 'react-scroll';
import Portrait from '../portrait';
import './HeaderPortrait.css';

const HeaderPortrait = ({ shrinkHeader }) => {
  return (
    <div
      className={classnames(
        'HeaderPortrait__container',
        shrinkHeader && 'HeaderPortrait__container--shrink'
      )}
    >
      <div
        onClick={() => {
          animateScroll.scrollToTop();
        }}
      >
        <Fade>
          <Portrait />
        </Fade>
      </div>
    </div>
  );
};

export default HeaderPortrait;
