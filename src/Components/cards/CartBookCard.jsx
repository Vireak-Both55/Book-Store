import React from 'react'
import { IoTrash } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { DecrementQty, IncrementQty, RemoveItems } from '../../redux/CartStore';

function CartBookCard({id,image,bookName,price,qty}) {
    let dispatch = useDispatch();
  return (
    <div className='flex flex-shrink-0 justify-between mt-5 p-2 rounded-2xl shadow-lg bg-emerald-200 items-center h-[110px] '>
<div className="flex items-center h-full w-[70%]">
    <div className="">
        <div className="h-[100px] rounded-2xl me-3 w-[100px] boder-0 overflow-hidden bg-amber-300">
            <img src= {image} alt="" className='w-full h-full object-cover'/>
        </div>
            </div>
            <div className="w-full">
        <div className="">
            <p>{bookName}</p>
                </div>
             <div className=" flex mt-4 shadow-2xs rounded-3xl items-center justify-between bg-green-100">
            <button onClick={()=>dispatch(IncrementQty(id))} className='btn btn-circle text-white text-2xl bg-emerald-500'>
                <span>+</span>
            </button>
            <p className='px-4'>{qty}</p>
            <button onClick={()=>{qty>1?dispatch(DecrementQty(id)):1}} className='btn text-center text-white text-2xl btn-circle bg-red-500'>
                -
            </button>
        </div>  
            </div>
        </div>




    <div className="w-[30%] h-full items-center grid justify-end ">
        <p>{price}</p>
        <IoTrash className='text-red-500 text-2xl cursor-pointer' onClick={()=>dispatch(RemoveItems(id))}/>
    </div>
    </div>
  )
}

export default CartBookCard