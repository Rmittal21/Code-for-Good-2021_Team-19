import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./components/Home";
import LoadData from "./components/LoadData";
import School from "./components/School";
import Facilitator from "./components/Facilitator";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Switch>
          <Route path="/facilitator">
            <Facilitator />
          </Route>
          <Route path="/school">
            <School />
          </Route>
          <Route path="/LoadData">
            <LoadData />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
