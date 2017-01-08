import React, { PropTypes } from 'react';

const classNames = ['card-button'];

const CardButt = function CardButt({ action, id, label, variants}) {
  if (variants && variants.length != 0) {
    classNames.push(variants);
  }
  return <button className={classNames.join(' ')} onClick={action(id)}>{label}</button>;
};

CardButt.propTypes = {
  action: React.PropTypes.function.isRequired,
  id: React.PropTypes.number.isRequired,
  label: React.PropTypes.string.isRequired,
  variants: React.PropTypes.arrayOf(React.Proptypes.string),
};

CardButt.defaultProps = {
  variants: null,
};

export default CardButt;
