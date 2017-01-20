import React, { PropTypes } from 'react';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const CardText = function CardText({ text }) {
  return <p className='text'>{text}</p>;
};

CardText.propTypes = propTypes;

export default CardText;
