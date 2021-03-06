import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';

class Category extends React.Component {
  render() {
    const {
      category,
      key,
      categoryRemove,
      categoryUpdate,
    } = this.props; 
    return (
      <div className="category" key={key}>
        <h3> { category.title } - ${category.price.toLocaleString({ style: 'currency' })}</h3>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
        <button onClick={() => categoryRemove(category)}>Delete</button>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(Category);
