import logo from './logo.svg';
import './App.css';

import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Navbar } from './components/navbar/index';
import { AllTodosPage } from './components/pages/all_todos';
import { NewTodoPage } from './components/new_todos';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar ></Navbar>
        <Switch>
          <Route exact path="/">
            <AllTodosPage></AllTodosPage>
          </Route>
          <Route path="/new">
            <NewTodoPage></NewTodoPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
