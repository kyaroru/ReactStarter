import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import persist from './persist';

export default ({
  AUTH: auth,
  PERSIST: persist,
  form: formReducer,
});
