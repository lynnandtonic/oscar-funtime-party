import { PropTypes } from 'react';

const Nominee = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}).isRequired

export default Nominee;