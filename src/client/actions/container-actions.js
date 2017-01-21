const INVALIDATE_CONTAINER = 'INVALIDATE_CONTAINER';
const invalidateContainer = (container) => ({
  type: INVALIDATE_CONTAINER,
  payload: container,
});

export {
  INVALIDATE_CONTAINER, invalidateContainer,
};
