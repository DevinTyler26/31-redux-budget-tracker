export default store => next => (action) => {
  const result = next(action);

  const reduxStore = store.getState();

  for (const key in reduxStore) { // eslint-disable-line
    if (!localStorage[key]) {
      localStorage[key] = JSON.stringify(reduxStore[key]);
    }
  }
  return result;
};
