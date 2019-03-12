import React from 'react';
import Fade from 'react-reveal/Fade';
import classnames from 'classnames';
import Rolladex from '../Rolladex';
import './HeaderTitle.css';

const HeaderTitle = ({ shrinkHeader, wordIndex, descriptors }) => {
  return (
    <div
      className={classnames(
        'HeaderTitle__titleContainer noselect',
        shrinkHeader && 'HeaderTitle__titleContainer--shrink'
      )}
    >
      <div
        className={classnames(
          'HeaderTitle__name',
          shrinkHeader && 'HeaderTitle__name--shrink'
        )}
      >
        <Fade>Albert Chu</Fade>
      </div>
      <Rolladex
        className={classnames(
          'HeaderTitle__rolladex',
          shrinkHeader && 'HeaderTitle__rolladex--shrink'
        )}
        words={descriptors}
        wordIndex={wordIndex}
      />
    </div>
  );
};

export default HeaderTitle;
