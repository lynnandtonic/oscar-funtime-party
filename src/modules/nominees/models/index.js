import PropTypes from 'prop-types';

const Nominee = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}).isRequired;

export default Nominee;
