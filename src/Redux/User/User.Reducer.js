import { SIGN_IN, REMOVE_USER } from './User-Constants';

const InitialState = {
  user: null,
};

const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case REMOVE_USER:
      return {
        ...state,
        user: '',
      };
    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
