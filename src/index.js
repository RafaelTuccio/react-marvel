import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FavoritoProvider } from './service/useFavorito';
import { HeroProvider } from './service/useHero';

ReactDOM.render(
  <React.StrictMode>
    <HeroProvider>
      <FavoritoProvider>
        <App />
      </FavoritoProvider>
    </HeroProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


