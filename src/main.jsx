import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import stores from './stores'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={stores}>
      <PersistGate loading={null} persistor={persistStore(stores)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
