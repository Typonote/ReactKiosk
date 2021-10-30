import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import Cocktail from './Cocktail';
import Coffee from './Coffee';
import Wine from './Wine';



const FoodOrder = () => {

    const typeOrder = useSelector(state => state).orderType;

    console.log('typeOrder',typeOrder)
    return (
        <div className='w-full items-center bg-yellow-300 justify-center'>
        
            <Router>

                <NavBar />

                <div classsName=''>
                    
                    <p className='font-mono text-white font-black py-5 text-2xl xl:text-3xl text-center mb-2 md:mb-5 px-2 break-words'>     
                        {typeOrder}을 선택하셨습니다.
                    </p>

                </div>

                <Switch>
                    <Route path="/order" component={Cocktail} exact={true} />
                    <Route path="/order/coffee" component={Coffee} exact={true} />
                    <Route path="/order/wine" component={Wine} exact={true} />
                </Switch>



            </Router>

        </div>
    )
}

export default FoodOrder
