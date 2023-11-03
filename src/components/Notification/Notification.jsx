import PropTypes from 'prop-types';
import { Messege } from './NotificationStyle';
export const Notification = ({ message }) => {
  return <Messege>{message}</Messege>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
