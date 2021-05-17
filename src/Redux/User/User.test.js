import { SIGN_IN, REMOVE_USER } from './User-Constants';
import { userSignIn, signOutUser } from './User-Actions';
import UserReducer from './User.Reducer';

describe('Testing User Reducer', () => {
  const InitialState = {
    user: null,
  };
  test('Reducer returns InitialState', () => {
    expect(UserReducer(InitialState, {})).toEqual({
      user: null,
    });
  });
  test('Testing SIGN IN action', () => {
    expect(
      UserReducer(InitialState, {
        type: SIGN_IN,
        payload: { user: 'Kwabena' },
      })
    ).toEqual({
      user: { user: 'Kwabena' },
    });
  });
  test('Testing REMOVE USER action', () => {
    expect(UserReducer(InitialState, { type: REMOVE_USER })).toEqual({
      user: '',
    });
  });
});

describe('Testing User Actions', () => {
  test('UserSignIn Action', () => {
    expect(userSignIn({ user: 'Kwabena' })).toEqual({
      type: SIGN_IN,
      payload: { user: 'Kwabena' },
    });
  });
  test('UserSignOut Action', () => {
    expect(signOutUser()).toEqual({
      type: REMOVE_USER,
    });
  });
});
