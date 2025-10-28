/*aqui tudo será renderizado*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  /*cada um desses aqui são componentes*/
  <StrictMode>
    <App />
  </StrictMode>,
)
