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
      <Route path='/' index element = {<App />}>
      <Route path='/home' element = {<HomePage/>}/>
      <Route index element = {<HomePage/>}/>
      <Route path='/deals' element = {<DealsPage/>} />
      <Route path='/service'element = {<ServicePage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
      </FilterCateProvider>
    </Provider>
  </StrictMode>,
)
