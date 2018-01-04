import Actions from 'actions';

export const getDefaultState = () => null;

function token(state, action) {
  if (typeof state === 'undefined') {
    return getDefaultState();
  }
  switch (action.type) {
    case Actions.SIGN_IN_SUCCESS:
    case Actions.SET_TOKEN:
      return action.token;
    case Actions.SIGN_OUT:
      return null;
    default:
      return state;
  }
}

export default token;
