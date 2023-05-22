
import './App.css';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import Info from './Components/Info';
import Ejemplo from './Components/Ejemplo';
import Inicio from './Components/Inicio';
import Navigationbar from './Components/Navigationbar';

function App() {
  return (
    <div className="App">
        <Router>
            <Navigationbar />
            <Switch>
                <Route exact path='/' component={Inicio}/>
                <Route path='/info' component={Info}/>
                <Route path='/ejemplo' component={Ejemplo}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;