import React, { PropTypes } from 'react';

const propTypes = {
  name: CardPropTypes.name.isRequired,
  imageUrl: CardPropTypes.imageUrl.isRequired,
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
