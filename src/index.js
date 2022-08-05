import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { UserProvider } from './contexts/user.context';
// import { CategoriesProvider } from './contexts/categories.context';
// import { CartProvider } from './contexts/cart.context';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // this adds the redux store into our application
  <Provider store={store}>
    <BrowserRouter>
      {/* <UserProvider> */}
        {/* <CategoriesProvider> */}
          {/* <CartProvider> */}
            <App />
          {/* </CartProvider> */}
        {/* </CategoriesProvider> */}
      {/* </UserProvider> */}
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
