import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { FavoritesContextProvider } from './store/favorite-context'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
)
