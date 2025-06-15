import React from 'react'

function HeroDeals() {
  return (
    <div className='p-[25px] text-center dealBanner sm:p-[50px]  w-full '>
        <div className="w-full lg:h-[30vh]">
            <h1 className='text-2xl lg:text-4xl font-bold text-white mb-4'>Today’s Best Book Deals</h1>
            <p className=' text-white text-[12px] sm:text-[18px]'>Welcome to our Deals Corner — where book lovers save big!
Whether you're into thrillers, romance, self-help, or children's stories, we've got special offers just for you. Enjoy hand-picked discounts, buy-one-get-one deals, and surprise bundles — updated regularly to keep your shelves (and heart) full.
Don’t wait too long — these deals won’t last forever!</p>
        </div>
        <button className='text-white font-bold btn rounded-2xl shadow-none hover:bg-emerald-600 bg-emerald-700 border-0 '>
            <a href="">
                Explore Now
            </a>
        </button>
    </div>
  )
}
export default HeroDeals