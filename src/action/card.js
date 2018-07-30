import uuid from 'uuid/v4';

export const createCard = ({ content, categoryId }) => ({
  type: 'CARD_CREATE',
  payload: {
    content,
    categoryId,
    id: uuid(),
  },
});

export const updateCard = card => ({
  type: 'CARD_UPDATE',
  payload: card,
});

export const removeCard = card => ({
  type: 'CARD_REMOVE',
  payload: card,
});
