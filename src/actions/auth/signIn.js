const AUTH = 'AUTH';

export const SIGN_IN = `${AUTH}/SIGN_IN`;
export const SIGN_IN_SUCCESS = `${AUTH}/SIGN_IN_SUCCESS`;
export const SIGN_IN_FAIL = `${AUTH}/SIGN_IN_FAIL`;

export const signIn = credentials => ({
  type: SIGN_IN,
  credentials,
});

export const signInSuccess = token => ({
  type: SIGN_IN_SUCCESS,
  token,
});

export const signInFail = errors => ({
  type: SIGN_IN_FAIL,
  errors,
});
