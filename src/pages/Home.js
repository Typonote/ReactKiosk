import TouchAppIcon from '@material-ui/icons/TouchApp';
import React from 'react'
import meal from '../assets/images/meal.png'

const Home = (props) => {


    return (
        <div className='flex flex-col items-center justify-center bg-primary hover:bg-secondary'>
            <div
            className='w-full h-screen '
            onClick={() => props.history.push('/choose')}
            >
                <div className = 'w-full h-screen text-white bg-red-300  p-5 cursor-pointer'>         
                    <div className = 'flex flex-col overflow-auto text-white items-center my-5'>      
                        <p className='font-mono font-black text-8xl text-center my-12'>
                        Le Cordon Bleu
                        </p>
                        <p className='font-mono font-black text-5xl text-center mb-2'>     
                        주문을 원하시면 
                        </p>
                        <p className='font-mono font-black text-5xl text-center mb-10'>     
                        화면을 클릭해주세요.
                        </p>
                        <img class="w-6/12 rounded  object-cover object-center mb-10" src={meal} alt="" />
                        
                    </div>
                    <button className= 'w-full flex justify-center items-center text-center bg-green-300  hover:bg-green-200 mt-10'> 
                    <TouchAppIcon className='my-5' style={{width:'5rem',height:'5rem'}}/>
                        <p className='font-mono font-black text-5xl text-center'> 
                        주문시작
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home
