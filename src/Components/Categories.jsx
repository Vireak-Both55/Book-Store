import React, { useContext } from 'react'
import { IoSearch } from 'react-icons/io5'
import BookCard from './cards/BookCard'
import { CategoriesData } from '../data/CategoryData'
import { FilterCateContext } from '../Store/FilterCate'
function Categories() {
  const { filteredBooks, filter } = useContext(FilterCateContext);
   const { searchTerm, setSearchTerm } = useContext(FilterCateContext);
  return (
    <div className="">
    <div className='p-[25px] sm:p-[50px] f w-full text-center'>
      <h1 className='font-bold text-4xl'>Feature Product</h1>
      {/* ScarchBar */}
      <form onSubmit={(e)=>e.preventDefault()} action="" className='mt-5  border-1 border-gray-300 rounded-full flex items-center p-3 '>
        <IoSearch className='text-2xl text-gray-300'/>
        <input onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm} type="text" placeholder='Search' className='ms-3 border-0 w-full outline-0 ' name="" id="" />
      </form>
        {/* Cards */}
        <div className="flex sm:overflow-x-clip  overflow-x-auto justify-between mt-5">
          {/* <CategoriesCard/> */}
          {
            CategoriesData.map((value,index)=>{
              return(
              <button onClick={()=>filter(value.title)} key={index}  className="  border-2 font-bold btn bg-white text-emerald-400  sm:mt-0 sm:w-[19%] me-3 lg:me-0 lg:p-[25px] border-emerald-500 lg:text-2xl hover:bg-emerald-500 hover:text-white  rounded-lg">
              {value.title}
               </button>  
              )
            })
          }
      </div>
        
    </div>
    <div className=" flex flex-wrap w-full justify-between lg:justify-evenly my-4  px-[15px] sm:px-[50px]">      
        {/* {
          filteredBooks.map((value,index)=>{
            return(
              <BookCard key={index} bookName={value.bookName} description={value.description} image={value.image} price={value.price} rate={value.rate}/>
            )
          })
        } */}
        {
          filteredBooks.map((value,index)=>{
            return(
              <BookCard key={index} id={value.id} bookName={value.bookName} image={value.image} description={value.description} price={value.price} rate={value.rate} qty={value.qty}/>
            )
          })
        }
    </div>
    </div>
  )
}

export default Categories