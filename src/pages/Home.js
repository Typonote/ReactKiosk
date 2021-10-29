import React from 'react'
import meal from '../assets/images/meal.png'


const Home = (props) => {


    return (
        <div className='flex flex-col items-center justify-center'>
            <div
            className='w-full h-screen '
            onClick={() => props.history.push('/choose')}
            >
                <div className = 'w-full h-screen text-white bg-yellow-300  p-5 cursor-pointer'>         
                    <div className = 'flex flex-col overflow-auto text-white items-center my-5'>      
                        <p className='font-mono font-black text-4xl text-center my-12 sm:text-5xl md:text-8xl'>
                        Le Cordon Bleu
                        </p>
                        <p className='font-mono font-black text-3xl sm:text-4xl md:text-5xl text-center mb-2'>     
                        주문을 원하시면 
                        </p>
                        <p className='font-mono font-black text-3xl sm:text-4xl md:text-5xl text-center mb-10'>     
                        화면을 클릭해주세요.
                        </p>
                        <img class="w-10/12 sm:w-6/12 rounded  object-cover object-center mb-10" src={meal} alt="" />
                        
                    </div>
                    <button className= 'w-full flex justify-center items-center text-center rounded-md bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500  hover:bg-green-200 mt-10'> 
                        <p className='font-mono font-black text-3xl sm:text-4xl md:text-5xl  text-center py-5'> 
                        주문시작
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home
