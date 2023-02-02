import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './myReactDasar/App';
// import Variable from './myReactDasar/Variable';
// import StateProps from './myReactDasar/StateProps';
// import Map from './myReactDasar/Map';
// import Lifecycle from './myReactDasar/Lifecycle';

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Crud/>
  </React.StrictMode>
);
