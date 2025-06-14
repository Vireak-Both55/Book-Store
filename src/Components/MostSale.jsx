import React from 'react'
import { MostSaleData } from '../data/MostSaleData'
import BookCard from './cards/BookCard'

function MostSale() {
  return (
        <div className='p-[25px]  sm:p-[50px]  w-full text-center'>
            <h1 className='text-4xl font-bold'>The Most Popular Books</h1>
            <div className=" overflow-x-auto justify-between  w-full flex gap-4 py-5">
                {
                    MostSaleData.map((value,index)=>{
                        return(
                            <BookCard bookName={value.bookName} id={value.id} qty={value.qty} image={value.image} description={value.description} price={value.price} rate={value.rate} key={index}/>
                        )
                    })
                }
            </div>
        </div>
  )
}

export default MostSale