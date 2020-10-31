import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react';
import SearchContainer from './SearchContainer';

class Search extends Component {
  state = {
    names: [
      'John', 'Abigail', 'X Æ A-Xii', 'Beyonce', 'Khloe Kardashian', 'George Bush', 'Queen Elizabeth', 'Yeezy', 'Ivanka Trump', 'Leonardo DiCaprio', 
    ],
    searchTerm: ''
  }
    
  editSearchTerm = (e) => {
      this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }
    
  render() {
    return (
      <div style={{ background: "#E5E5E5", alignContent: 'center' }}>
        <div class="row" style={{ padding: 5 }}>
            <div>
                <div class="input-group">
                    <span class="input-group-prepend" style={{ background: "#FFF" }}>
                        <div class="input-group-text bg-transparent border-right-0">
                            {/* <i class="fa fa-search"></i> */}
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </span>
                    <input class="form-control py-2 border-left-0 border" type="search" id="example-search-input" value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder='Search' />
                </div>
            </div>
        </div>
        <br></br>
        <SearchContainer labels = {this.dynamicSearch()}/>
      </div>
    );
  }
}

export default Search;
