import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const HeadFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 1999,
};

root.render(
  <React.StrictMode>
    <App {...HeadFilm} />
  </React.StrictMode>,
);
