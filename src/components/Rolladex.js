import React from 'react';
import Fade from 'react-reveal/Fade';

const Rolladex = ({ words, wordIndex, className }) => (
  <div className={className} style={{ position: 'relative' }}>
    {words.map((string, index) => (
      <div key={string} style={{ position: 'absolute', top: 0, left: 0 }}>
        <Fade top opposite when={wordIndex === index}>
          {string}
        </Fade>
      </div>
    ))}
  </div>
);

export default Rolladex;
