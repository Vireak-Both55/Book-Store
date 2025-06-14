import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-emerald-950 text-white p-[25px] sm:px-[50px] f w-full '>
    <div className="lg:flex">
    <div className="lg:w-[30%] lg:border-e px-2">
        {/* ------------------------------------------- Logo && description ------------------------------ */}
    <div className=" flex items-center">
    <div className="flex items-center">
      <div className="h-[60px] w-[60px] rounded-full bg-black overflow-hidden me-3">
      <img src="https://img.freepik.com/premium-vector/green-book-logo-vector-icon_628348-12.jpg?w=900" alt="" className='h-full w-full object-cover' />
      </div>
    </div>
      <div className="">
      <h2 className='sm:text-3xl font-bold'>Book Store </h2>
      <p className='text-[11px] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ratione!</p>
      </div>
    </div>
    {/* ------------------------------------------------- Contect Us ---------------------------------------- */}
    <hr className='lg:hidden my-3'/>
    <div className="mt-5 ">
    <div className="font-bold text-center lg:text-start ">
        <h1 className='text-2xl'>Social Media</h1> 
    <div className="flex justify-center lg  :justify-start mt-5 items-center  ">
        <a href="" className='px-2'>
        <IoLogoFacebook className='text-2xl  hover:text-blue-800 duration-500'/>       
        </a>
        <a href="" className='px-2'>
        <IoLogoLinkedin className='text-2xl  hover:text-blue-500 duration-500'/>       
        </a>
        <a href="" className='px-2'>
        <IoLogoInstagram className='text-2xl  hover:text-amber-800 duration-500'/>       
        </a>
        <a href="" className='px-2'>
        <IoLogoTwitter className='text-2xl \ hover:text-blue-400 duration-500'/>       
        </a>
    </div>
    </div>    
      </div>
       <hr className='lg:hidden my-3'/>
         <div className="mt-3">
        <h1 className='text-xl text-center lg:text-start font-bold'>
        Accepted Payment
        </h1>
        <div className="flex flex-wrap justify-between mt-2">
            <div className="w-[19%] mt-2 bg-white h-[50px] overflow-hidden rounded-lg">
                <img src="https://freepngimg.com/thumb/paypal/2-2-paypal-logo-transparent-png.png" alt="" className=' w-full h-full object-contain'/>
            </div>
            <div className="w-[19%] mt-2 bg-white h-[50px] overflow-hidden rounded-lg">
                <img src="https://th.bing.com/th/id/OIP.E-BinyEEwrLkG0pbmOup0AHaDE?w=1600&h=662&rs=1&pid=ImgDetMain" alt="" className=' w-full h-full object-contain'/>
            </div>
            <div className="w-[19%] mt-2 bg-white h-[50px] overflow-hidden rounded-lg">
                <img src="https://th.bing.com/th/id/R.08af4fe3898f3ec5636518b704d10f05?rik=GlgP%2bsxPXoUoAg&pid=ImgRaw&r=0" alt="" className=' w-full h-full object-contain'/>
            </div>
            <div className="w-[19%] mt-2 bg-white h-[50px] overflow-hidden rounded-lg">
                <img src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png" alt="" className=' w-full h-full object-contain'/>
            </div>
            
        </div>
      </div>
     </div>

<hr className='lg:hidden my-3'/>
    <div className="lg:w-[70%] sm:ps-3  w-full sm:flex-nowrap flex-wrap flex">
        <div className="w-[49%] px-2 sm:border-e lg:w-[33.33%]">
          <h4 className='font-bold text-xl'>About Us</h4>
            <ul className='ps-2 mt-3 text-[12px] sm:text-[16px]'>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                    Help Center
                    </a>
                </li>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                  Order Tracking
                    </a>
                </li>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                    Return Policy
                    </a>
                </li>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                    Privacy Policy
                    </a>
                </li>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                   Terms & Conditions
                    </a>
                </li>
            </ul>
        </div>
        <div className="w-[49%] px-2 sm:border-e lg:w-[33.33%]">
                    <h4 className='font-bold text-xl '>Contact Us</h4>
            <ul className='ps-2 mt-3 text-[12px] sm:text-[16px]'>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                    Google Map
                    </a>
                </li>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <p href="" className=''>
                    Phone Number <br />
                    +888 000 000 0000
                    </p>
                </li>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                    BookStore@gmail.com
                    </a>
                </li>
            </ul>
        </div>
        <div className="w-[49%] px-2 sm:border-s lg:w-[33.33%]">
            <h4 className='font-bold text-xl'>Service</h4>
            <ul className='ps-2 mt-3 text-[12px] sm:text-[16px]'>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                    Help Center
                    </a>
                </li>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                  Order Tracking
                    </a>
                </li>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                    Return Policy
                    </a>
                </li>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                    Privacy Policy
                    </a>
                </li>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                   Terms & Conditions
                    </a>
                </li>
            </ul>
        </div>
        <div className="w-[49%] px-2 lg:w-[33.33%]  sm:border-s">
            <h4 className='font-bold text-xl'>Help</h4>
            <ul className='ps-2 mt-3 text-[12px] sm:text-[16px]'>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                    FAQs
                    </a>
                </li>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                 Shipping Information
                    </a>
                </li>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                 Return & Refund Policy
                    </a>
                </li>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                    Account Help
                    </a>
                </li>
                <li className='hover:text-emerald-300 duration-300 my-2 transform hover:-translate-y-1'>
                    <a href="">
                   Live Chat / Chatbot
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </div>
    <hr className='my-3'/>
    <div className=" text-center sm:text-[16px] text-[12px]">
        <h5>All Right reserved by IT ui/ux design agency | 2025 </h5>
    </div>
    </div>
  )
}

export default Footer