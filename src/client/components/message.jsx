import React, { PropTypes } from 'react';

const Message = ({ message }) => <h2>{message}</h2>;

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
