import React from 'react'
import { useSelector } from 'react-redux';

const FoodOrder = () => {

    const typeOrder = useSelector(state => state).orderType;

    console.log('typeOrder',typeOrder)
    return (
        <div className='w-full h-screen flex flex-col items-center bg-yellow-300 justify-center'>
        
            <p className='font-mono text-white font-black text-3xl sm:text-4xl md:text-5xl text-center mb-2 md:mb-5 px-2 break-words'>     
                {typeOrder}
            </p>
            
        </div>
    )
}

export default FoodOrder
