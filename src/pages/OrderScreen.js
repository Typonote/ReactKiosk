import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const OrderScreen = (props) => {

    const typeOrder = useSelector(state => state).orderType;
    const selectItem = useSelector(state => state).item;

    console.log('itemList',selectItem );
    
    return (

            <div>

                <div className='grid grid-cols-5 bg-white border-solid rounded-lg mt-5 mx-7 border-2 p-5'>
                    <p className='text-xl font-bold'>장소 : {typeOrder}</p>
                    <p className='col-start-2 col-span-2 text-center text-xl font-bold'>합계: {} 원</p>
                    <p className='col-start-4 col-span-2 text-center text-xl font-bold'>갯수: {} 개</p>
                </div>

                <p className='text-xl font-bold'>{selectItem}</p>

                <div className='w-full grid grid-cols-2 p-5 gap-4 text-center'>

                    <Link
                        to = '/'
                        className='bg-gray-400 text-xl font-bold py-3 rounded-lg mx-5'
                    >
                        취소하기
                    </Link>

                    <Link
                        to = '/payment'
                        className='bg-red-500 text-white text-xl font-bold py-3 rounded-lg mx-5'
                    >
                        주문하기
                    </Link>

                </div>
            </div>
        
    )
}

export default OrderScreen
