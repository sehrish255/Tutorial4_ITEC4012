import logo from './logo.svg';
import './App.css';

import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Navbar } from './components/navbar/index';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar ></Navbar>
        <Switch>
          <Route exact path="/">
            <div>Home Page</div>
          </Route>
          <Route path="/new">
            <div>New Todo Page</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
