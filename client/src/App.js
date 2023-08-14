import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchId: '',
      searchData: null,
    };
  }

  handleInputChange = event => {
    this.setState({ searchId: event.target.value });
  };

  handleSearch = () => {
    const API_URL = 'http://localhost:3001'; // Change to your server URL
    const { searchId } = this.state;

    axios.get(`${API_URL}/api/data/${searchId}`)
      .then(response => {
        console.log(response.data);
        this.setState({ searchData: response.data });
      })
      .catch(error => {
        console.error('Error fetching data by ID', error);
      });
  };

  render() {
    const { searchId, searchData } = this.state;

    return (
      <div className="App">
        <h1>Search Data by ID</h1>
        <input
          type="text"
          placeholder="Enter ID"
          value={searchId}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSearch}>Search</button>

        {searchData && (
          <div>
            <h2>Search Result</h2>
            <pre>{JSON.stringify(searchData, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
}

export default App;
