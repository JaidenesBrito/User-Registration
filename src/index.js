import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';
import GlobalStyles from "./styles/globalStyle";

ReactDOM.render(
  <>
    <Routes />
    <GlobalStyles />
  </>,
  document.getElementById('root')
);



