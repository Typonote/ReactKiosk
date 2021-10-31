import React from 'react'
import Check from '../assets/images/check.png'

const CompleteScreen = () => {
    return (
        <div className='h-screen flex flex-col bg-blue-300 justify-center text-center'> 
            <div className='flex flex-col overflow-auto text-white items-center'> 
                <div>
                    <p className='m-5 text-gray-100 text-6xl font-bold'>
                        주문이 완료되었습니다.
                    </p>

                    <p className='m-5 text-gray-100 text-2xl font-bold'>
                        주문번호: 번
                    </p>

                </div>

                <img className="w-50 m-7" src={Check} alt=''/>


            </div>
            <div className='flex justify-center items-center text-center p-5'>
                <button className='w-2/4 p-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-500 text-gray-100 text-2xl font-bold rounded-lg focus:border-4 border-indigo-300'>
                    다시 주문하기
                </button>
            </div>
        </div>
    )
}

export default CompleteScreen
