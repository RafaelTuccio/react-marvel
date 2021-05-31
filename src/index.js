import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FavoritoProvider } from './service/useFavorito';


ReactDOM.render(
  <React.StrictMode>
    <FavoritoProvider>
      <App />
    </FavoritoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


