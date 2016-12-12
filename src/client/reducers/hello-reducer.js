import { SAY_HELLO } from '../actions/hello-actions';

const initialState = {
  saidHello: false,
};

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return { saidHello: action.payload };
    default:
      return state;
  }
};

export default helloReducer;
