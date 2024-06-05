import React, { useState } from 'react';
import Slide from './components/Slide';
import './App.css';

function App() {
  const slidesContent = [];
  for (let i = 1; i <= 12; i++) {
    slidesContent.push(`slide ${i}`);
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const handleRightClick = () => {
    if (currentIndex < slidesContent.length - 3) {
      setCurrentIndex(currentIndex + 3);
    }
  };
  const handleRangeChange = (event) => {
    const index = Number(event.target.value);
    setCurrentIndex(index);
  };

  return (
    <div className="container">
      <button onClick={handleLeftClick}>left</button>
      <div className="slides">
        {slidesContent.slice(currentIndex, currentIndex + 3).map((content, index) => (
          <Slide key={currentIndex + index} content={content} />
        ))}
      </div>
      <button onClick={handleRightClick}>right</button>
      <input
        type="range"
        min="0"
        max={slidesContent.length - 3}
        value={currentIndex}
        onChange={handleRangeChange}
        className="slider"
      />
    </div>
  )
}

export default App;
