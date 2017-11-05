import React, { Component } from 'react';
import SearchBar from './stateful-components/search-bar/SearchBar';
import ImagesListContainer from './containers/images-list/imagesListContainer';

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
