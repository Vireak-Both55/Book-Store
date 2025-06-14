import React from 'react'

function Service() {
  return (
    <div className='p-[25px] sm:p-[50px] f w-full text-center'>
        <h1 className='text-2xl lg:text-4xl font-bold'>Services to help you shop</h1>
        <div className=" lg:flex-nowrap flex flex-wrap  justify-between mt-5">
            <div className="w-full sm:w-[32%]  overflow-hidden  h-[300px] lg:h-[400px] rounded-2xl bg-amber-200">
                <div className="h-[50%] w-full  overflow-hidden">
                    <img src="https://th.bing.com/th/id/OIP.AlYEW8RFJFgoRhpIusxaggHaEB?w=1500&h=814&rs=1&pid=ImgDetMain" className='hover:scale-105 duration-300 h-full w-full object-cover' alt=""/>
                </div>
                <div className="text-start px-3 text-white ">
                    <h2 className='font-bold lg:text-3xl my-2'>Frequently asked questions</h2>
                    <p className=' lg:text-[20px]'>Updates on safe Shopping in our Stores</p>
                </div>
            </div>
            <div className="w-full sm:w-[32%]  lg:mt-0 mt-2 overflow-hidden  h-[300px] lg:h-[400px] rounded-2xl bg-red-200">
                <div className="h-[50%] w-full  overflow-hidden">
                    <img src="https://static.vecteezy.com/system/resources/previews/015/876/877/original/online-payment-icon-in-flat-style-mobile-transaction-illustration-on-isolated-background-pay-information-sign-business-concept-vector.jpg" className='hover:scale-105 duration-300 h-full w-full object-cover' alt=""/>
                </div>
                <div className="text-start px-3 text-white ">
                    <h2 className='font-bold lg:text-3xl my-2'>Online Payment Process</h2>
                    <p className=' lg:text-[20px]'>Updates on safe Shopping in our Stores</p>
                </div>
            </div>
            <div className="w-full sm:w-[32%]  lg:mt-0 mt-2 overflow-hidden  h-[300px] lg:h-[400px] rounded-2xl bg-emerald-200">
                <div className="h-[50%] w-full  overflow-hidden">
                    <img src="https://static.vecteezy.com/system/resources/previews/002/047/856/non_2x/safe-delivery-concept-during-coronavirus-with-courier-man-and-truck-vector.jpg" className='hover:scale-105 duration-300 h-full w-full object-cover' alt=""/>
                </div>
                <div className="text-start px-3 text-white ">
                    <h2 className='font-bold lg:text-3xl my-2'>Home Delivery Options</h2>
                    <p className=' lg:text-[20px]'>Updates on safe Shopping in our Stores</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service