import React from 'react'
import Categories from '../Components/Categories'
import MostSale from '../Components/MostSale'
import { FilterCateProvider } from '../Store/FilterCate'
import HeroDeals from '../Components/HeroDeals'

function DealsPage() {
  return (
    <div>
      <FilterCateProvider>
        <HeroDeals/>
        <Categories/>
        <MostSale/>
      </FilterCateProvider>
    </div>
  )
}

export default DealsPage