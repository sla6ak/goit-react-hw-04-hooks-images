import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './Components/App';
import '../node_modules/modern-normalize/modern-normalize.css';
import { GlobalStyle } from 'GlobalStyle.styled';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'; //скелетон загрузок
import 'react-toastify/dist/ReactToastify.css'; // попапы

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);
