import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import BloggetApp from './BloggetApp';
import {store} from './store';
import {Provider} from 'react-redux';

import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <BloggetApp />
    </Provider>
  </BrowserRouter>
// </React.StrictMode>
);
