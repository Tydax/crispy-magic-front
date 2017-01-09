import React, { PropTypes } from 'react';

const CardButt = function CardButt({ action, id, label, variants }) {
  const classNames = ['card-button'];
  if (variants && variants.length != 0) {
    classNames.push(variants);
  }
  return <button className={classNames.join(' ')} onClick={action}>{label}</button>;
};

CardButt.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  variants: PropTypes.arrayOf(PropTypes.string),
};

CardButt.defaultProps = {
  variants: null,
};

export default CardButt;
