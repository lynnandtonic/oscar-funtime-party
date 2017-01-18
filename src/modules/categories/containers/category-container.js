import React from 'react';
import Category from '../components/category';
import NomineeListContainer from '../../nominees/containers/nominee-list-container';
import _ from 'lodash';

const CategoryContainer = React.createClass({

  render: function() {
    return (
      <Category category={this.props.category}>
        <NomineeListContainer keys={_.keys(this.props.category.nominees)} />
      </Category>
    );
  }

});

export default CategoryContainer;