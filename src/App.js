import React, { Component } from 'react';
import SearchBar from './stateful-components/search-bar/SearchBar';
import GalleryContainer from './containers/gallery/galleryContainer';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <GalleryContainer />
      </div>
    );
  }
}

export default App;
