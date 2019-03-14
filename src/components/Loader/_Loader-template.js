import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import loaderSrc from '../../../public/images/loader.gif';

import Icon from '../Icon';

import './styles.css';

const Loader = ({ open, openText, closeText, label, onClick }) => {
  const burgerClass = classNames({
    burger: true,
    'burger--open': open,
  });

  return (
    <div>
      <div className="loader">
        <svg viewBox="0 0 400 202" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path
              d="M202.8,88.7c-4.9,0-8.8,4.2-8.8,9.3v6.5c0,5.1,3.9,9.1,8.8,9.1h69.7c5.1,0,9.1-3.9,9.1-9.1v-6.7
		c0-5.1-3.9-9.1-9.1-9.1H202.8z"
              id="clipper"
            />
          </defs>

          <path
            d="M74.5,12.2H31.2c-4.9,0-8.8,4.2-8.8,9.3V181c0,4.9,3.9,9.1,8.8,9.1H75c48.9,0,85.9-36,85.9-88.6
            C160.9,47.4,125.9,12.2,74.5,12.2z M75.8,165.9H47.6V36.4h27.9c37.4,0,60.2,26.4,60.2,65.1C135.7,138.9,112.2,165.9,75.8,165.9z"
          />

          <path
            fill="transparent"
            d="M192.8,36c-4.8,1.1-7.7,6-6.5,11l1.4,6.3c1.1,5,5.8,8,10.6,6.9l110-25.7c5-1.1,8-5.8,6.8-10.8l-1.5-6.6
			c-1.1-5-5.8-8-10.8-6.8L192.8,36z"
          />

          <path
            fill="transparent"
            className="loader__middle-line"
            d="M202.8,88.7c-4.9,0-8.8,4.2-8.8,9.3v6.5c0,5.1,3.9,9.1,8.8,9.1h69.7c5.1,0,9.1-3.9,9.1-9.1v-6.7
		c0-5.1-3.9-9.1-9.1-9.1H202.8z"
          />

          <path
            fill="transparent"
            d="M308.6,167.8c4.8,1.1,7.7,6,6.5,11l-1.4,6.3c-1.1,5-5.8,8-10.6,6.9l-110-25.7c-5-1.1-8-5.8-6.8-10.8l1.5-6.6
			c1.1-5,5.8-8,10.8-6.8L308.6,167.8z"
          />
        </svg>

        <div className="loader__line loader__line-top" />
        <div className="loader__line" />
        <div className="loader__line loader__line-bottom" />
      </div>
      <img src={loaderSrc} alt="" />
    </div>
  );
};

Loader.defaultProps = {
  open: false,
  openText: 'Meny',
  closeText: 'Lukk',
  label: 'Open main menu',
};

Loader.propTypes = {
  open: PropTypes.bool,
  label: PropTypes.string,
  openText: PropTypes.string,
  closeText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Loader;
