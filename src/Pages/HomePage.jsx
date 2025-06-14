import React from 'react'
import HeroBanner from '../Components/HeroBanner'
import Categories from '../Components/Categories'
import { FilterCateProvider } from '../Store/FilterCate'
import MostSale from '../Components/MostSale'
import { Outlet } from 'react-router-dom'
import Service from '../Components/Service'
function HomePage() {
  return (
    <div>
        <HeroBanner/>
        <Categories/>
        <MostSale/>
        <Service/>
    </div>
  )
}

export default HomePage