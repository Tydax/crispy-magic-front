import React, { PropTypes } from 'react';

import { CardPropTypes } from '../../../shared/prop-types';
import { ImageUrl } from '../../../shared/constants';

const propTypes = {
  name: CardPropTypes.name.isRequired,
  multiverseId: CardPropTypes.multiverseId.isRequired,
};

const CardImage = function CardImage({ name, multiverseId }) {
  return (
    <div className='card-image'>
      <img className='image' src={ImageUrl(multiverseId)} alt={name} />
    </div>
  );
};

CardImage.propTypes = propTypes;

export default CardImage;
