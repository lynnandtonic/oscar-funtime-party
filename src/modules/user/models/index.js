import PropTypes from 'prop-types';

const User = PropTypes.shape({
  displayName: PropTypes.string.isRequired,
  photoURL: PropTypes.string
});

export default User
