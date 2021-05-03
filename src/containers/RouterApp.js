import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import ViewCountry from '../components/ViewCountry';

function RouterApp() {
  return (
    <BrowserRouter>
      <div className="sans-serif">
        <Route exact path="/" component={App} />
        <Route exact path="/country/:code" component={ViewCountry} />

      </div>
    </BrowserRouter>

  );
}
export default RouterApp;