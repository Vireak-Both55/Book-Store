import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import DealsPage from './Pages/DealsPage.jsx'
import ServicePage from './Pages/ServicePage.jsx'
import { FilterCateProvider } from './Store/FilterCate.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <Provider store={store}>
      <FilterCateProvider>
        <BrowserRouter>
          <Routes>
            {/* The Parent Layout Route */}
            <Route path='/' element={<App />}>
              {/* 1. This handles the default root: / */}
              <Route index element={<HomePage />} />
              {/* 2. This handles the explicit path: /home */}
              <Route path='home' element={<HomePage />} />
              
              {/* 3. Other Pages */}
              <Route path='deals' element={<DealsPage />} />
              <Route path='service' element={<ServicePage />} />
              
              {/* 4. Optional: A "Not Found" catch-all inside your layout */}
              <Route path='*' element={<div>Page Not Found</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FilterCateProvider>
    </Provider>
  </StrictMode>,
)