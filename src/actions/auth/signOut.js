const AUTH = 'AUTH';

export const SIGN_OUT = `${AUTH}/SIGN_OUT`;

export const signOut = () => ({
  type: SIGN_OUT,
});
