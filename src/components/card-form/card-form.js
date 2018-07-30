import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
  title: '',
  price: 0,
};

export default class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.card || emptyState;
  }

  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value,
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const categoryId = this.props.category ? this.props.category.id : this.props.card.categoryId;
    this.props.onComplete({
      ...this.state,
      categoryId,
    });
    this.setState(emptyState);
  }

  render() {
    const { card } = this.props;
    const buttonText = card ? 'Update Card' : 'Create Card';
    const formText = card ? `Update ${card.content} Card` : 'Create Card';
    return (
      <form
        className="card-form"
        data-cy="card-form"
        onSubmit={ this.handleSubmit }
      >
        <label htmlFor="content">{ formText }</label>
        <input 
          type="text"
          name="content"
          placeholder="Enter New Card Content"
          value={ this.state.content }
          onChange={ this.handleChange }
        />
        <input
          type="number"
          min="0.00" 
          step="0.01"
          name="price"
          placeholder="0.00"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit"> {buttonText} </button>
      </form>
    );
  }
}

CardForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
  card: PropTypes.object,
};
