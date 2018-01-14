import PropTypes from 'prop-types';

const Category = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nominees: PropTypes.objectOf(PropTypes.bool)
}).isRequired;

export default Category
