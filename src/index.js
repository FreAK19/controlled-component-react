import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center'
};

ReactDOM.render(
  <MuiThemeProvider>
    <div className="app" style={style}>
      <App/>
    </div>
  </MuiThemeProvider>,
  document.getElementById('root'));
