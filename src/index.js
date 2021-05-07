import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import PageRouter from './PageRouter';
import theme from './theme';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageRouter />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
