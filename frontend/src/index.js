import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import { GlobalProvider } from './context/globalContext';
import { AuthProvider } from './AuthContext/AuthContext';
//import { AuthProvider } from './AuthContext/AuthContext.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
        <GlobalProvider>
          <App />
        </GlobalProvider>
    </AuthProvider>
  </React.StrictMode>
);
