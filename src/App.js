import './App.css';
import Home from './home/Home';
import New from './home/New';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/new">
            <New />
          </Route>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
