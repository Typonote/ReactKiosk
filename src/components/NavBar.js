import React from 'react'
import { Link } from 'react-router-dom'
import cocktail from '../assets/images/cocktail.png'
import coffee from '../assets/images/coffee.png'
import wine from '../assets/images/wine.png'

const NavBar = () => {
    return (
        <div className="grid grid-cols-3 text-center">

            <Link to='/order' className='py-5 cursor-pointer hover:bg-yellow-200 border-r-2 border-b-2 border-white'>
                <img className="h-15 ml-auto mr-auto mb-3" src={cocktail} alt="cocktail" />
                <p className='text-white font-mono font-black text-xl'>칵테일</p>
            </Link>

            <Link to='/coffee' className='py-5 cursor-pointer hover:bg-yellow-200 border-r-2 border-b-2 border-white'>
                <img className="h-15 ml-auto mr-auto mb-3" src={coffee} alt="cocktail" />
                <p className='text-white font-mono font-black text-xl'>커피</p>
            </Link>

            <Link to='/wine' className='py-5 cursor-pointer hover:bg-yellow-200 border-b-2 border-white'>
                <img className="h-15 ml-auto mr-auto mb-3" src={wine} alt="cocktail" />
                <p className='text-white font-mono font-black text-xl'>와인</p>
            </Link>
                    
        </div>
    )
}

export default NavBar
