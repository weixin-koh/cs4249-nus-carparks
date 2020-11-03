import React from 'react';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import history from './history';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Style/App.css';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/1" component={Main} />
          {/* <Route path="/2" component={NewMain} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
