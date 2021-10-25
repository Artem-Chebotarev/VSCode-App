import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {AuthProvider} from './auth/AuthProvier';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ReduxProvider} from './store/ReduxProvider';
import {CustomThemeProvider} from './theme/CustomThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <Router>
        <AuthProvider>
          <CustomThemeProvider>
            <App />
          </CustomThemeProvider>
        </AuthProvider>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
