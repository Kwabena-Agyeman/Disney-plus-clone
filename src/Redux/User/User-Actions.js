import { SIGN_IN, REMOVE_USER } from './User-Constants';

export const userSignIn = (user) => {
  return {
    type: SIGN_IN,
    payload: user,
  };
};

export const signOutUser = () => {
  return {
    type: REMOVE_USER,
  };
};
