import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Cocktail from './Cocktail';
import Coffee from './Coffee';
import Wine from './Wine';
import OrderScreen from './OrderScreen';
import App from '../App';
import Payment from './Payment';
import CompleteScreen from './CompleteScreen';




const FoodChoice = () => {

    return (
        <div className='w-full items-center bg-yellow-300 justify-center'>
        
            <Router>
        
                <Switch>
                    <Route path="/" component={App} exact={true} />
                    <Route path="/order" component={Cocktail} exact={true} />
                    <Route path="/order/coffee" component={Coffee} exact={true} />
                    <Route path="/order/wine" component={Wine} exact={true} />
                    <Route path="/payment" component={Payment} exact={true} />
                    <Route path="/complete" component={CompleteScreen} exact={true} />
                </Switch>

            </Router>

        </div>
    )
}

export default FoodChoice
