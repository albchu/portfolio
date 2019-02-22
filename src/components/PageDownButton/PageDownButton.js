import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import DownButton from '../DownButton';
import './style.css';

const PageDownButton = () => {
  return (
    <DownButton
      className="pageDownButton"
      onClick={() => scroll.scrollMore(210)}
    />
  );
};

export default PageDownButton;
