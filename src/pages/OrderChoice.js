import React from 'react'
import { Link } from 'react-router-dom'
import Eatin from '../assets/images/eatin.png'
import Takeout from '../assets/images/takeout.png'
import { actionOrderType } from '../redux/action.js';
import { useDispatch } from 'react-redux';

const OrderChoice = () => {
    
    
    const dispatch = useDispatch();
    
    const chooseHandler = (orderType) => {
        dispatch(actionOrderType(orderType));
    };

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
                    <div 
                    className="bg-white p-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md m-3 sm:m-7 cursor-pointer"
                    onClick={() => chooseHandler('매장')}
                    >
                        <img className="h-40 md:h-60 rounded object-center " src={Eatin} alt="eatin" />                      
                        <p className="font-mono font-black text-3xl text-center md:text-5xl">매장</p>
                    </div>
                </Link>

                <Link to='/order'>
                    <div 
                    className="bg-white p-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md m-3 sm:m-7 cursor-pointer"
                    onClick={() => chooseHandler('포장')}
                    >
                        <img className="h-40 md:h-60 rounded object-center " src={Takeout} alt="eatin" />                      
                        <p className="font-mono font-black text-3xl text-center md:text-5xl">포장</p>
                    </div>
                </Link>
            </div>
            
        </div>
    )
}

export default OrderChoice
