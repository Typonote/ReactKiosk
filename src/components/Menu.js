import React from 'react'
import { useDispatch } from 'react-redux';
import {actionAddOrder, actionRemoveOrder} from '../redux/action.js';

const Menu = (props) => {

    const dispatch = useDispatch();

    return (
        <div className ='grid grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-4 mt-5'>
            {props.data.map(option => (
                <div className="relative max-w-xs bg-white shadow-md rounded-3xl p-4 xl:p-8 mx-auto my-3 cursor-pointer">

                    <div className="overflow-x-hidden rounded-2xl relative">
                        <img className="h-32 xl:h-40 rounded-2xl w-full object-cover" src={option.image} alt=''/>
                    </div>

                    <div class="mt-4 pl-2 mb-2 text-center">
                        <div>
                            <p className="text-xl font-semibold text-gray-900 mb-3">{option.name}</p>
                            <p className="text-md text-gray-800">{option.price}</p>
                        </div>

                        <p 
                        className="absolute right-2 bottom-2 bg-blue-300 hover:bg-blue-500 rounded-full p-2 cursor-pointer group"
                        onClick={() => dispatch(actionAddOrder(option.name))}    
                        >
                            
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 20 20" stroke="black" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>

                        </p>

                        <p 
                        className="absolute left-2 bottom-2 bg-red-300 hover:bg-red-500 rounded-full p-2 cursor-pointer group"
                        onClick={() => dispatch(actionRemoveOrder(option.name))}   
                        >
                            
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 20 20" stroke="black"xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                            </svg>

                        </p>

                    </div>

                </div>
            ))}
        </div>
    )
}

export default Menu
