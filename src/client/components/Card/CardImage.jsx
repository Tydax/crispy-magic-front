import React, { PropTypes } from 'react';

const propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const CardImage = function CardImage({ imageUrl }) {
  return (
    <div className='card-image'>
      <img className='image' src={imageUrl} alt={name} />
    </div>
  );
};

CardImage.propTypes = propTypes;

export default CardImage;
