import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react';
import SearchContainer from './SearchContainer';

class SearchFunction extends Component {
  state = {
    destinations: ['COM1', 'FASS', 'UTown'],
    searchTerm: ''
  }
    
  editSearchTerm = (e) => {
      this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.destinations.filter(destination => destination.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }
    
  render() {
    return (
      <div style={{ background: "#E5E5E5", alignContent: 'center' }}>
        <div className="row" style={{ padding: 5, margin: 0, width: '100%' }}>
          <div className="input-group">
            <span className="input-group-prepend" style={{ background: "#FFF" }}>
              <div className="input-group-text bg-transparent border-right-0">
                {/* <i className="fa fa-search"></i> */}
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </span>
            <input className="form-control py-2 border-left-0 border" type="search" id="example-search-input" value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder='Search' />
          </div>
        </div>
        <SearchContainer labels={this.dynamicSearch()}/>
      </div>
    );
  }
}

export default SearchFunction;
