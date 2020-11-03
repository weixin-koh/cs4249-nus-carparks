import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import history from './history';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './Components/Main';
import SearchPage from './Components/SearchPage';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/1" component={Main} />
          <Route path="/search" component={SearchPage} />
          {/* <Route path="/2">
            <NewMain />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
