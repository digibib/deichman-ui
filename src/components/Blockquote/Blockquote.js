import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Blockquote = ({ children, cite }) => {
  return (
    <blockquote className="blockquote">
      <div className="blockquote__text">
        «{children}»
      </div>
      {cite && 
        <footer className="blockquote__footer">{cite}</footer>
      }
    </blockquote>
  );
};

Blockquote.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  cite: PropTypes.string
};

Blockquote.defaultProps = {
  cite: ""
};

export default Blockquote;
