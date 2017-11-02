import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import ImagesListContainer from './containers/imagesListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ImagesListContainer />
      </div>
    );
  }
}

export default App;
