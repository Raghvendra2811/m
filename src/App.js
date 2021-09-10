import logo from './logo.svg';
import './App.css';
import Add from './Components/Add.js';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
    
        <Navbar />

        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/">
            <Movies />
          </Route>

        </Switch>

      </Router>
    </>
  );
}

export default App;
