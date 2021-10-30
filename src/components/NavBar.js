import React from 'react'
import { Link } from 'react-router-dom'
import cocktail from '../assets/images/cocktail.png'
import coffee from '../assets/images/coffee.png'
import wine from '../assets/images/wine.png'

const NavBar = () => {
    return (
        <div className="grid grid-cols-3 text-center">

            <Link to='/order' className='py-2 xl:py-5  cursor-pointer hover:bg-yellow-200 border-r-2 border-b-2 border-white'>
                <img className="h-11 xl:h-16  ml-auto mr-auto mb-1 xl:mb-3" src={cocktail} alt="cocktail" />
                <p className='text-white font-mono font-black text-xl'>칵테일</p>
            </Link>

            <Link to='/order/coffee' className='py-2 xl:py-5 cursor-pointer hover:bg-yellow-200 border-r-2 border-b-2 border-white'>
                <img className="h-11 xl:h-16 ml-auto mr-auto mb-1 xl:mb-3" src={coffee} alt="cocktail" />
                <p className='text-white font-mono font-black text-xl'>커피</p>
            </Link>

            <Link to='/order/wine' className='py-2 xl:py-5 cursor-pointer hover:bg-yellow-200 border-b-2 border-white'>
                <img className="h-11 xl:h-16 ml-auto mr-auto mb-1 xl:mb-3" src={wine} alt="cocktail" />
                <p className='text-white font-mono font-black text-xl'>와인</p>
            </Link>
                    
        </div>
    )
}

export default NavBar
