import React, { Component } from 'react';
import SearchBar from './stateful-components/search-bar/SearchBar';
import GalleryContainer from './containers/gallery/galleryContainer';
import Scroller from './containers/wrappers/scroller';

import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <GalleryContainer />
        <Scroller />
      </div>
    );
  }
}

export default App;
