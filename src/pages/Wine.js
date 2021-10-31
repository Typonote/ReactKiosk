import React from 'react'
import Menu from '../components/Menu'
import NavBar from '../components/NavBar'
import dummy from '../data/wineList'
import OrderScreen from './OrderScreen'

const Wine = () => {
    return (
        <div className='w-full items-center bg-yellow-300 justify-center'>
            <NavBar />
            <Menu data={dummy}/>
            <OrderScreen />
        </div>
    )
}

export default Wine
