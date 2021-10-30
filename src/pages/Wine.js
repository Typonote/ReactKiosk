import React from 'react'
import dummy from '../data/wineList'

const Wine = () => {
    return (
        <div className ='grid grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-4 mx-1 xl:mx-0'>
            {dummy.map(option => (
                <div class="relative max-w-xs bg-white hover:bg-gray-200 shadow-md rounded-3xl p-4 xl:p-8 mx-auto my-3 cursor-pointer">

                    <div class="overflow-x-hidden rounded-2xl relative">
                        <img class="h-32 xl:h-40 rounded-2xl w-full object-cover" src={option.image} alt=''/>
                        <p class="absolute right-1 top-1 bg-yellow-300 rounded-full p-2 cursor-pointer group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </p>
                    </div>

                    <div class="mt-4 pl-2 mb-2 text-center">
                        <div>
                            <p class="text-xl font-semibold text-gray-900 mb-3">{option.name}</p>
                            <p class="text-md text-gray-800">{option.price}</p>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Wine
