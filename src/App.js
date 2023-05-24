
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import InfoJovenes from './Components/InfoJovenes';
import Ejemplo from './Components/Ejemplo';
import Inicio from './Components/Inicio';
import Navigationbar from './Components/Navigationbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Switch>
          <Route exact path='/' component={Inicio} />
          <Route path='/infoJovenes' component={InfoJovenes} />
          <Route path='/ejemplo' component={Ejemplo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;