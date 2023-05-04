import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { UserContextProvider } from './components/api/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </Provider>
);
