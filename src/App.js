// import logo from './logo.svg';
// import './App.css';
import Home from './comp/Home';
import About from './comp/About';

import {
    BrowserRouter as Router, Switch, Route, Link

} from 'react-router-dom';

function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route path = '/' exact > <Home /> </Route>
                <Route path = '/about'> <About /> </Route>

            
            </Switch>
        </Router>



    </div>
  );
}

export default App;
