import React from 'react';
import './Slide.css';

function Slide({ content }) {
  return (
    <div className="slide">
      {content}
    </div>
  );
}

export default Slide;
