import React, { PropTypes } from 'react';

const CardButt = function CardButt({ action, variants, label }) {
  const classNames = ['card-button'];
  if (variants && variants.length != 0) {
    classNames.push(variants);
  }
  return <button className={classNames.join(' ')} onClick={action}>{label}</button>;
};

CardButt.propTypes = {
  action: React.PropTypes.function.isRequired,
  variants: React.PropTypes.arrayOf(React.Proptypes.string),

};

CardButt.defaultProps = {
  variants: null,
};

export default CardButt;
