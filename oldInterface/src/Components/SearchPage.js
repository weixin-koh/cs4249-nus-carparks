import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from './Header';
import SearchFunction from './SearchFunction';

class SearchPage extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />
        <SearchFunction />
      </div>
    );
  }
}

export default SearchPage;
