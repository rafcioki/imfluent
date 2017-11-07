import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../../logic/imagesLoading/imagesLoadingActions';
import './searchBar.css';

const mapDispatchToProps = (dispatch) => {
  return {
    getImages: (subreddit) => dispatch(fetchImages(subreddit))
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: 'pics'
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChanged = this.onInputChanged.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.getImages(this.state.searchText);

    this.setState({
      searchText: ''
    })
  }

  onInputChanged(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  render() {
    return (
      <form className="search-box" onSubmit={this.onSubmit}>
        <input type="text" value={this.state.searchText} onChange={this.onInputChanged} placeholder="Enter subreddit name" />
        <button className="search-box__search-button" type="submit">Search</button>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);