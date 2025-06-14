import React, { useContext, useState } from 'react';
import { IoCart, IoCartOutline, IoClose, IoMenu, IoPerson, IoPersonAdd, IoPersonCircleOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { FilterCateContext } from '../Store/FilterCate';
import CartBookCard from './cards/CartBookCard';
import { useSelector } from 'react-redux';
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const {showDetail,setShowDetail} = useContext(FilterCateContext);
    const books = useSelector(state=>state.cart)
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    console.log(books);
    const subTotal = books.reduce((total,items)=>total+Number( items.price)*Number(items.qty),0)
    const deliveryFee = 10;
    const taxes = subTotal * 0.5/100;
    const total = Number(subTotal+deliveryFee+taxes) 
  return (
   <div className="bg-emerald-700 text-white w-full px-[10px] sm:px-[50px] py-[10px] flex">
    {/* --------------------------------------- Logo&&Title ------------------------------------ */}
    <div className="flex items-center w-full lg:w-[30%]">
      <NavLink to={'/home'}>
      <div className="h-[60px] w-[60px] rounded-full bg-black overflow-hidden me-3">
      <img src="https://img.freepik.com/premium-vector/green-book-logo-vector-icon_628348-12.jpg?w=900" alt="" className='h-full w-full object-cover' />
      </div>
    </NavLink>
      <h2 className='sm:text-3xl font-bold'>Book Store</h2>
    </div>
    {/* --------------------------------------- NavMenu ------------------------------------ */}
    <div className="lg:flex justify-center hidden w-[60%]  items-center">
      <ul className='flex font-bold'>
        <li className='hover:text-emerald-400 duration-300 px-3'>
          <NavLink to={'/home'}>
            Home
          </NavLink>
        </li>
        <li className='hover:text-emerald-400 duration-300 px-3'>
          <NavLink to={'/deals'}>
            Deals
          </NavLink>
        </li>
        <li className='hover:text-emerald-400 duration-300 px-3'>
          <NavLink to={'/service'}>
            Service
          </NavLink>
        </li>
        <li className='hover:text-emerald-400 duration-300 px-3'>
          <NavLink>
            Contact
          </NavLink>
        </li>
        </ul>
    </div>
    {/* ---------------------------------------------- Auth&&Cart -------------------------------------------- */}
    <div className="flex items-center justify-end  lg:w-[20%]">
      <a href="" className='hidden lg:flex items-center font-bold hover:text-emerald-300 me-5 duration-300'>
      <IoPersonCircleOutline className="text-2xl me-1"/>
      <span>Account</span>
      </a>
      <button onClick={()=>setShowDetail(true)} className='  btn hover:bg-emerald-500 bg-emerald-600 text-white border-0 font-bold  rounded-full lg:w-[100px] lg:h-[50px] shadow-none me-5'>
        <IoCartOutline className=" absolute lg:text-2xl me-1"/>
        <div className="bg-red-500 relative -top-3 sm:-top-4 sm:-right-10 -right-5 size-6 text-center rounded-2xl">
        <span className=''>{books.length}</span>
        </div>
      </button>
    </div>

    {/* --------------------------------------------- offcanvas ------------------------------------------------- */}
    <button className='block lg:hidden' onClick={()=>setIsOpen(!isOpen)}>
      {isOpen? <IoClose className='text-3xl'/> :<IoMenu className='text-3xl'/> }
    </button>
  
  <div className={`${isOpen?`opacity-100 translate-y-2 pointer-events-auto shadow z-1`:`opacity-0 translate-y-4  pointer-events-none`}
      w-[90%] lg:hidden 
      border-1 mt-2
      rounded-lg
      bg-white
      duration-500 
      absolute transform -translate-x-1/2 left-1/2 p-4
  `}>
    {/* offcanvas Header */}
    <div className="border-b py-3 text-emerald-600 w-full items-center flex justify-between">
    <h1 className='text-3xl font-bold'>Welcom</h1>
    <button className=''onClick={()=>setIsOpen(false)}>
      {isOpen?<IoClose className='text-3xl text-emerald-600'/>:null}
    </button>
    </div>
    {/* offcavas Body */}
    <div className="">
     <ul className='font-bold text-emerald-600 '>
           <li className='hover:text-emerald-400 duration-300 border-b-1 py-3'>
          <NavLink to={'/home'}>
            Home
          </NavLink>
        </li>
        <li className='hover:text-emerald-400 duration-300 border-b-1 py-3'>
          <NavLink to={'/deals'}>
            Deals
          </NavLink>
        </li>
        <li className='hover:text-emerald-400 duration-300 border-b-1 py-3'>
          <NavLink to={'/service'}>
            Service
          </NavLink>
        </li>
        <li className='hover:text-emerald-400 duration-300 border-b-1 py-3'>
          <NavLink>
            Contact
          </NavLink>
        </li>
        </ul>
    </div>
    {/* offcanvas Footer */}
    <div className="py-4 text-emerald-600 flex justify-between">
      <a href="" className=' flex items-center font-bold hover:text-emerald-300 me-5 duration-300'>
      <IoPersonCircleOutline className="text-2xl me-1"/>
      <span>Account</span>
      </a>
    </div>
  </div>

    {/* ---------------------------------------------- Slide detail ------------------------------------------------------- */}
    <div className={`flex-1 overflow-y-scroll space-y-3 w-full md:w-[60%] lg:w-[40%] text-emerald-600 p-5 bg-white h-[100vh] fixed top-0 right-0 z-1 ${showDetail?"duration-500 translate-x-0":"translate-x-full duration-500"}`}>
      {/* Header */}
      <div className="flex items-center  justify-between ">
        <span className='text-3xl font-bold '>Order Item</span>
        <button onClick={()=>setShowDetail(false)} >
          <IoClose className='text-3xl'/>
        </button>
      </div>

      {
        books.length>0? <div className="">
      {/* Body */}
      <div className="">
        {
          books.map((value,index)=>{
            return(
              <CartBookCard id={value.id} qty={value.qty} bookName={value.bookName} image={value.image} price={value.price} key={index}/>
            )
          }
          )
        }
      </div>
      {/* Footer */}
      <div className="border-t-2 mt-5 ">
        <div className="flex justify-between my-2">
        <span>SubTotal : </span>
        <span>{subTotal.toFixed(2)} <sup>$</sup> </span>
        </div>
        <div className="flex justify-between my-2">
        <span>Delivery Fee : </span>
        <span>{deliveryFee} <sup>$</sup></span>
        </div>
        <div className="flex justify-between my-2">
        <span>Taxes : </span>
        <span>{taxes.toFixed(2)}<sup>$</sup></span>
        </div>
        <div className="flex justify-between  border-t-2">
          <span className='text-xl'>Total : </span>
        <span className='text-xl'>{total.toFixed(2)}<sup>$</sup></span>
        </div>
        <button className='btn w-full bg-emerald-700 rounded-2xl mt-5 text-white hover:bg-emerald-600 py-[25px]'>
          Check Out
        </button>
      </div>
        </div>
        :<div className="text-center grid justify-center">
          <h1 className='text-center'>Empty</h1>
        </div> 
      }
    </div>
    </div>
  );
}

export default Header;
