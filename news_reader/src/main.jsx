import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./files/app/App"
import store from "./files/app/store"
import { Provider } from 'react-redux'

import { worker } from './files/mocks/browser'
//const { worker } = require('./mocks/browser');
worker.start();



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
