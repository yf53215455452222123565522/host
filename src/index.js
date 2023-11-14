import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import {store, persistor}   from './Redux/store';

import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './Components/Loader';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader></Loader>} persistor={persistor}>
         <App/> 
      </PersistGate>
     
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
