import React from 'react'
import { Link } from 'react-router-dom'
import CardInsertion from '../assets/images/cardInsertion.png'

const Payment = () => {
    return (
        <div className='h-screen flex flex-col bg-blue-300 justify-center text-center'> 
            <div className='flex flex-col overflow-auto text-white items-center'> 
                <div>
                    <p className='m-5 text-gray-100 text-6xl font-bold'>
                        카드를 투입해주세요.
                    </p>
                </div>

                <img className="w-50 m-7" src={CardInsertion} alt=''/>


            </div>
            <div className='flex justify-center items-center text-center p-5'>
                <Link
                to='/complete' 
                className='w-2/4 p-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-500 text-gray-100 text-2xl font-bold rounded-lg focus:border-4 border-indigo-300'>
                계산 완료
                </Link>
            </div>
        </div>
    )
}
export default Payment
