const emptyState = {};

export default (state = emptyState, { type, payload }) => {
  let categoryId;
  let categoryCards;
  let updatedCards;
  let updatedState;

  switch (type) {
    case 'CATEGORY_CREATE': 
      return { ...state, [payload.id]: [] };
    case 'CATEGORY_REMOVE':
      updatedState = { ...state };
      delete updatedState[payload.id];
      return updatedState;
    case 'CARD_CREATE': 
      categoryId = payload.categoryId; // eslint-disable-line
      categoryCards = state[categoryId];
      updatedCards = [...categoryCards, payload];
      return { ...state, [categoryId]: updatedCards };
    case 'CARD_UPDATE': 
      categoryId = payload.categoryId; // eslint-disable-line
      categoryCards = state[categoryId];
      updatedCards = categoryCards.map(card => (card.id === payload.id ? payload : card));
      return { ...state, [categoryId]: updatedCards };
    case 'CARD_REMOVE':
      categoryId = payload.categoryId; // eslint-disable-line
      categoryCards = state[categoryId];
      updatedCards = categoryCards.filter(card => card.id !== payload.id);
      return { ...state, [categoryId]: updatedCards };
    default: 
      return state;
  }
};
