const INVALIDATE_CONTAINER = 'INVALIDATE_CONTAINER';
const invalidateContainer = (container) => ({
  type: INVALIDATE_CONTAINER,
  payload: {
    container,
    entityType,
  },
});

const BEGIN_FETCHING_CONTAINER = 'BEGIN_FETCHING_CONTAINER';
const beginFetchingContainer = (container) => ({
  type: BEGIN_FETCHING_CONTAINER,
  payload: container,
});

const FINISH_FETCHING_CONTAINER = 'FINISH_FETCHING_CONTAINER';
const finishFetchingContainer = (container, entityType, entityIds) => ({
  type: FINISH_FETCHING_CONTAINER,
  payload: {
    container,
    entityType,
    entityIds,
  }
});

const FAIL_FETCHING_CONTAINER = 'FAIL_FETCHING_CONTAINER';
const failFetchingContainer = (container, entityType, error) => ({
  type: FAIL_FETCHING_CONTAINER,
  error,
  payload: {
    container,
    entityType,
  },
});

export {
  INVALIDATE_CONTAINER, invalidateContainer,
  BEGIN_FETCHING_CONTAINER, beginFetchingContainer,
  FINISH_FETCHING_CONTAINER, finishFetchingContainer,
  FAIL_FETCHING_CONTAINER, failFetchingContainer
};
