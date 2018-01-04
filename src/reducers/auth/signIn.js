import Actions from 'actions';

export const getDefaultState = () => ({ isLoading: false, errors: [] });

function signIn(state, action) {
  if (typeof state === 'undefined') {
    return getDefaultState();
  }

  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        isLoading: true,
        errors: [],
      };
    case Actions.SIGN_IN_SUCCESS:
      return {
        isLoading: false,
        errors: [],
      };
    case Actions.SIGN_IN_FAIL:
      return {
        isLoading: false,
        errors: action.errors,
      };
    default:
      return state;
  }
}

export default signIn;
