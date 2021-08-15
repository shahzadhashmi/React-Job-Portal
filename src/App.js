import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Navigation from '../src/components/Navigation';
function App() {
  return (
    <div className='App container'>
      <Router>
        <Navigation></Navigation>
          <Switch>
            <Route path='/' component={Home} exact></Route>
            <Route path='/jobs' component={Jobs}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
