import React from 'react';

import './styles.css';

const Loader = () => {
  return (
    <div className="loader">
      <svg viewBox="0 0 400 202" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M74.5,12.2H31.2c-4.9,0-8.8,4.2-8.8,9.3V181c0,4.9,3.9,9.1,8.8,9.1H75c48.9,0,85.9-36,85.9-88.6
            C160.9,47.4,125.9,12.2,74.5,12.2z M75.8,165.9H47.6V36.4h27.9c37.4,0,60.2,26.4,60.2,65.1C135.7,138.9,112.2,165.9,75.8,165.9z"
        />
      </svg>

      <div className="loader__line loader__line-top" />
      <div className="loader__line" />
      <div className="loader__line loader__line-bottom" />
    </div>
  );
};

export default Loader;
