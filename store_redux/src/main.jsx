import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './files/app/App'
import './index.css'
import { store } from './files/app/store'
import { Provider } from 'react-redux'
const element = (
<React.StrictMode>
  <Provider store={store}>   
     <App/>
    </Provider>

  </React.StrictMode>
  )

const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(element)



