import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import App from './App.tsx'
import "./styles/main.css";
import store from './store';
import reportWebVitals from './reportWebVitals.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter  basename="/portfolioPage">
        <App />
      </BrowserRouter >
    </Provider>
  </React.StrictMode>,
)

reportWebVitals(console.log);
