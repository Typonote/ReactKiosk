import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Eatin from '../assets/images/eatin.png'
import Takeout from '../assets/images/takeout.png'

const OrderChoice = (props) => {

    const [orderType, setOrderType] = useState(null)

    return (
        <div className='w-full h-screen flex flex-col items-center bg-yellow-300 justify-center'>
        
            <p className='font-mono text-white font-black text-3xl sm:text-4xl md:text-5xl text-center mb-2 md:mb-5 px-2 break-words'>     
                식사하실 장소를
            </p>

            <p className='font-mono text-white font-black text-3xl sm:text-4xl md:text-5xl text-center mb-10 px-2 break-words'>     
                선택해주세요
            </p>

            <div className='grid grid-cols-2'>
                <Link to='/order'>
                    <div class="bg-white p-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md m-3 sm:m-7 cursor-pointer">
                        <img class="h-40 md:h-60 rounded object-center " src={Eatin} alt="eatin" />                      
                        <p class="font-mono font-black text-3xl text-center md:text-5xl">매장</p>
                    </div>
                </Link>

                <Link to='/order'>
                    <div class="bg-white p-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md m-3 sm:m-7 cursor-pointer">
                        <img class="h-40 md:h-60 rounded object-center " src={Takeout} alt="eatin" />                      
                        <p class="font-mono font-black text-3xl text-center md:text-5xl">포장</p>
                    </div>
                </Link>
            </div>
            
        </div>
    )
}

export default OrderChoice
