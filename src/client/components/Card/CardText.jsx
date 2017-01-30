import React, { PropTypes } from 'react';

import { CardPropTypes } from '../../../shared/prop-types';

const propTypes = {
  text: CardPropTypes.text.isRequired,
};

const CardText = function CardText({ text }) {
  const texts = text.split('\n').map((t, index) => <p className='text' key={index}>{t}</p>);
  return (
    <div className='text-container'>
      {texts}
    </div>
  );
};

CardText.propTypes = propTypes;

export default CardText;
