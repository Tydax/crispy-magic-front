import React, { PropTypes } from 'react';

import { CardPropTypes } from '../../../shared/prop-types';
import { ImageUrl } from '../../../shared/constants';

const propTypes = {
  name: CardPropTypes.name.isRequired,
  multiverseId: CardPropTypes.multiverseId,
};

const CardImage = function CardImage(props) {
  if (props.multiverseId)
    return (
      <div className='card-image'>
        <img className='image' src={ImageUrl(props.multiverseId)} alt={props.name} />
      </div>
    );
  return (
      <div className='card-image'>
        <img className='image' src="img/cardback.jpg" alt={props.name} />
      </div>
  );
};

CardImage.propTypes = propTypes;

export default CardImage;
