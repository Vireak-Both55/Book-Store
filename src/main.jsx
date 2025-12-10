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
      {/* CORRECTION: Removed 'index' from this parent route.
        <App /> is now a layout component that uses <Outlet /> to render its children.
      */}
      <Route path='/' element = {<App />}>
        
        {/* Removed the duplicate <Route path='/home' ... /> */}
        
        {/* This is the primary index route. 
          It renders <HomePage /> when the path is exactly '/' (inside the <App /> layout). 
        */}
        <Route index element = {<HomePage/>}/>
        
        <Route path='/deals' element = {<DealsPage/>} />
        <Route path='/service' element = {<ServicePage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
      </FilterCateProvider>
    </Provider>
  </StrictMode>,
)