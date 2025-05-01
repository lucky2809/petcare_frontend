import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import { theme } from "./theme/themeConfig.js"
import { Provider } from 'react-redux'
import store from './store/Store.js'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
     
     <App />
     
    </ThemeProvider>
    </Provider>
  // </StrictMode>
)
