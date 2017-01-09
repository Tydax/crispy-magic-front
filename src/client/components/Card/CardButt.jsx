import React, { PropTypes } from 'react';

const CardButt = function CardButt({ action, id, label, variants }) {
  const classNames = ['card-button'];
  if (variants && variants.length != 0) {
    classNames.push(variants);
  }
  return <button className={classNames.join(' ')} onClick={action}>{label}</button>;
};

CardButt.propTypes = {
  action: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired,
  variants: React.PropTypes.arrayOf(React.PropTypes.string),
};

CardButt.defaultProps = {
  variants: null,
};

export default CardButt;
