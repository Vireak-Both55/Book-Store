import React, { useContext } from 'react'
import { IoStar } from 'react-icons/io5';
import { VscLaw } from 'react-icons/vsc';
import { AddItem } from '../../redux/CartStore';
import { useDispatch } from 'react-redux';
function BookCard({id,bookName,image,price,rate,description,qty}) {
    const star = [
        <IoStar className='text-yellow-400 text-[8px] sm:text-[14px]'/>,
        <IoStar className='text-yellow-400 text-[8px] sm:text-[14px]'/>,
        <IoStar className='text-yellow-400 text-[8px] sm:text-[14px]'/>,
        <IoStar className='text-yellow-400 text-[8px] sm:text-[14px]'/>,
    ];
    let dispatch = useDispatch();
  return (
            <div  className=" shadow border-0 w-[49%] shrink-0 bg-emerald-100 text-start p-2 sm:p-4 rounded-2xl mt-3 overflow-hidden lg:w-[24%]  h-[250px] sm:h-[400px]">
                <div className="w-full h-[40%] sm:h-[50%]">
                    <img className='w-full h-full object-contain 'src={image} alt="" />
                </div>

                <div className="h-[40%] w-full">
                    <div className="flex justify-between my-2">
                        <div className="w-[70%]">
                     <h1 className='text-[11px] sm:text-[16px] text-emerald-700 text-start font-bold'>
                        {
                            bookName
                        }
                    </h1>
                        </div>
                    <div className="w-[30%] text-end">
                        <p className='font-bold text-[11px] sm:text-[16px]'>{price} <sup>$</sup></p>
                    </div>
                    </div>
                    <span className='flex'>
                        {
                            star.map((value,index)=>{
                                return(
                                    value   
                                )
                            })
                        }
                        <sub className='text-[8px] sm:text-[10px]'>
                             {
                                rate
                            }
                        </sub>
                    </span>
                    <p className='line-clamp-3 text-[8px] sm:text-[12px] text-gray-400'> {description}</p>
                </div>
                <div className="flex justify-end items-center sm:mt-0 mt-3 h-[10%]">
                    <button onClick={()=>dispatch(AddItem({id:id,bookName:bookName,image:image,price:price,rate:rate,description:description,qty:1}))} className='sm:btn-lg btn-sm btn font-bold text-emerald-700 duration-300 hover:text-white hover:bg-emerald-600 bg-transparent border-1 border-emerald-700  rounded-2xl  text-[8px] sm:text-[14px]'>
                        Add to Cart
                    </button>
                </div>
            </div>    
  )
}

export default BookCard