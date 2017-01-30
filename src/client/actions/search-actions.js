const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE';
const updateSearchValue = value => ({
  type: UPDATE_SEARCH_VALUE,
  payload: value,
});

export {
  UPDATE_SEARCH_VALUE, updateSearchValue,
};
