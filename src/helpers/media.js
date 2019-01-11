import { css } from 'styled-components';
import { breakpoints } from '../constants/breakpoints';

// iterate through the breakpoints and create a media template
const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const size = breakpoints[label];
  accumulator[label] = (...args) => css`
    @media (min-width: ${size}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;
