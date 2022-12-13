import { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

export function Notification(props) {
  return <Message>{props.message}</Message>;
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
