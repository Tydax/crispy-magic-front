import React, { PropTypes } from 'react';

import { CardPropTypes } from '../../../shared/prop-types';

const propTypes = {
  text: CardPropTypes.text,
};

const CardText = function CardText({ text }) {
  return <p className='text'>{text}</p>;
};

CardText.propTypes = propTypes;

export default CardText;
