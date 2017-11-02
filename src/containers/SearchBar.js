import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../logic/search/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    getImages: (subreddit) => dispatch(fetchImages(subreddit))
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    };

    this.onSearchClicked = this.onSearchClicked.bind(this);
    this.onInputChanged = this.onInputChanged.bind(this);
  }

  onSearchClicked() {
    this.props.getImages(fetchImages(this.state.searchText));

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
      <div>
        <input type="text" value={this.state.searchText} onChange={this.onInputChanged} placeholder="Enter subreddit name" />
        <button onClick={this.onSearchClicked}>Search</button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);