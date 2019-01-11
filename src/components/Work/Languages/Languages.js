import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const LANGUAGES = {
  en: 'Engelsk',
  es: 'Spansk',
  de: 'Tysk',
  no: 'Norsk',
};

const Languages = ({ selected, languages }) => {
  return (
    <div className="work-languages">
      <span>{LANGUAGES[selected]}</span>
      {languages.length > 1 && (
        <span className="work-languages__sum">(+{languages.length} flere)</span>
      )}
    </div>
  );
};

Languages.propTypes = {
  selected: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
};

export default Languages;
