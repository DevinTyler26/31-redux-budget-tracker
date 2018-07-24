const create = ({ title }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    title,
    id: Math.random(),
    createdOn: new Date(),
  },
});

const update = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

const remove = category => ({
  type: 'CATEGORY_REMOVE',
  payload: category,
});

export { create, update, remove };
