import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import Reset from './style/Reset';
import Common from './style/Common';
import { ThemeProvider } from 'styled-components';



ReactDOM.render(
    <ThemeProvider theme={Common}>
    <Reset />
    <Routes />
    </ThemeProvider>,
  document.getElementById('root')
);