import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import Loading from 'common/Loading';
import App from './components/App';
import configureStore from './store/configureStore';

import './styles/app.scss';

const { persistor, store } = configureStore()
const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={<Loading />}
      persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  root,
);
