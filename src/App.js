import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Home from './pages/Home';
import OrderChoice from './pages/OrderChoice';
import FoodChoice from './pages/FoodChoice';

function App() {
  return (
    <Provider store={store}>
      <div className='max-w-4xl max-h-full ml-auto mr-auto'>
        <Router>
            
          <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/choose" component={OrderChoice} exact={true} />
              <Route path="/order" component={FoodChoice} exact={true} />
          </Switch>
    
        </Router>
        
      </div>
    </Provider>
  );
}

export default App;
