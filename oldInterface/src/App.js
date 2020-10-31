import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SearchOptions from './Components/SearchOptions';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <SearchOptions />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
