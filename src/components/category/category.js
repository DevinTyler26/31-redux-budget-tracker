import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';
import CardForm from '../card-form/card-form';
import Card from '../card/card';
import * as cardActions from '../../action/card';

const mapStateToProps = store => ({
  cards: store.cards,
});


class Category extends React.Component {
  render() {
    const {
      cards,
      cardCreate,
      category,
      key,
      categoryRemove,
      categoryUpdate,
    } = this.props;
    
    const categoryCards = cards[category.id];
    return (
      <div className="category" key={key}>
        <h3> { category.title } - ${category.price.toLocaleString({ style: 'currency' })}</h3>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
        <button onClick={() => categoryRemove(category)}>Delete</button>
        <div className="card-form">
          <CardForm category={category} onComplete={cardCreate} />
          <div className="card-list">
            {
              categoryCards.map(card => <Card card={card} key={card.id} />)
            }
        </div>
      </div>
      </div>
    );
  }
}

Category.propTypes = {
  cards: PropTypes.object,
  cardCreate: PropTypes.func,
  category: PropTypes.object,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    cardCreate: data => dispatch(cardActions.createCard(data)),
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
