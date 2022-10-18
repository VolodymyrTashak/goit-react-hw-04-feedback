import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './Notification.styled';
import { FaExclamation } from 'react-icons/fa';

export const Notification = ({ message }) => {
  return (
    <Text>
      {message}
      <FaExclamation color="red" size={25} />
    </Text>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
