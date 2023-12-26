import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './pages/App'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="589006822818-hqqkcncp1fl8c6h4eic8hap83c8emhf7.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
