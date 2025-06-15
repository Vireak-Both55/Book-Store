import React from 'react'

function DiscountBanner() {
  return (
    <div className='discountBanner flex justify-end items-center p-4 h-[100vh]'>
        <div className="h-[400px]  p-[50px]  text-white w-[500px] rounded-2xl  bg-emerald-800">
            <h1 className='text-5xl font-bold '>Get 25% Cash</h1>
            <h2 className='text-4xl font-bold'>Back on 100$</h2>
            <p className='text-[20px] my-5'>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
        <button className='bg-transparent hover:bg-emerald-500 text-white shadow-none btn rounded-full'>
            Learn more
        </button>
        </div>
    </div>
  )
}

export default DiscountBanner