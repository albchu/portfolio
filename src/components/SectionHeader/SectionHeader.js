import React from 'react';
import Visible from 'react-visibility-sensor';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import { trackComponentVisible } from '../../lib/ga';
import './SectionHeader.css';

const onComponentVisible = section => isVisible =>
  isVisible && trackComponentVisible(section);

const SectionHeader = ({ title, show = true }) => {
  return (
    <Visible onChange={onComponentVisible(title)}>
      <div className="SectionHeader__Container">
        <Element name={title.toLowerCase()}>
          {show && (
            <Fade>
              <h1>{title}</h1>
            </Fade>
          )}
        </Element>
      </div>
    </Visible>
  );
};

export default SectionHeader;
