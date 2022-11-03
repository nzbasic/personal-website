import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import './index.css';
import NavigationProvider from './context/NavigationProvider';
import DataProvider from './context/DataProvider';

ReactDOM.render(
  <React.StrictMode>
    <NavigationProvider>
      <DataProvider>
        <Router />
      </DataProvider>
    </NavigationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
