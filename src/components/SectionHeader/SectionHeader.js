import React from 'react';
import Visible from 'react-visibility-sensor';
import Fade from 'react-reveal/Fade';
import { trackComponentVisible } from '../../lib/ga';

const onComponentVisible = section => isVisible =>
  isVisible && trackComponentVisible(section);

const SectionHeader = ({ title }) => {
  return (
    <Visible onChange={onComponentVisible(title)}>
      <div>
        <Fade>
          <h1>{title}</h1>
        </Fade>
      </div>
    </Visible>
  );
};

export default SectionHeader;
