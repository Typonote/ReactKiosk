import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Cocktail from './Cocktail';
import Coffee from './Coffee';
import Wine from './Wine';
import OrderScreen from './OrderScreen';
import App from '../App';



const FoodChoice = () => {

    return (
        <div className='w-full items-center bg-yellow-300 justify-center'>
        
            <Router>
            
                <NavBar />

                <Switch>
                    <Route path="/" component={App} exact={true} />
                    <Route path="/order" component={Cocktail} exact={true} />
                    <Route path="/order/coffee" component={Coffee} exact={true} />
                    <Route path="/order/wine" component={Wine} exact={true} />
                </Switch>


                <OrderScreen />

            </Router>

        </div>
    )
}

export default FoodChoice
