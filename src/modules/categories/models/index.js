import { PropTypes } from 'react';

const Category = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nominees: PropTypes.objectOf(PropTypes.bool)
}).isRequired;

export default Category