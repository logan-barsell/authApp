import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/auth/Signup';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import Feature from './components/Feature';
import auth from './reducers/auth';

let root = createRoot(document.querySelector('#root'));

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxThunk),
  preloadedState: {
    auth: {
      authenticated: localStorage.getItem('token')
    }
  }
});

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/feature" exact element={<Feature />} />
          <Route path="/signout" exact element={<Signout />} />
          <Route path="/signin" exact element={<Signin />} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>
);
