import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import OrderChoice from './pages/OrderChoice';

function App() {
  return (
    <div className='max-w-4xl max-h-full ml-auto mr-auto'>
      <Router>

        <Switch>

            <Route path="/" component={Home} exact={true} />
            <Route path="/choose" component={OrderChoice} exact={true} />

        </Switch>
  
      </Router>
      
    </div>
  );
}

export default App;
