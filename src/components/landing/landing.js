import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category';
import CategoryForm from '../category-form/category-form';
import Category from '../category/category';

class Landing extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props;
    return (
      <div>
        <CategoryForm onComplete={categoryCreate} />
        {
          categories.map((currentCategory, i) => <Category category={currentCategory} key={i}/>)
        }
      </div>
    );
  }
}

Landing.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    categories: store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
