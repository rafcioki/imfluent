import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages, setOrderByFilter, setFromFilter, setSearchTerm } from '../../logic/imagesLoading/imagesLoadingActions';
import './searchBar.css';

const mapDispatchToProps = (dispatch) => {
  return {
    triggerSearch: () => dispatch(fetchImages()),
    setOrderByFilter: (orderBy) => dispatch(setOrderByFilter(orderBy)),
    setFromFilter: (from) => dispatch(setFromFilter(from)),
    setSearchTerm: (subreddit) => dispatch(setSearchTerm(subreddit))
  }
}

const mapStateToProps = (state) => {
  return {
    orderBy: state.images.orderBy,
    from: state.images.from,
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: 'pics',
      sortByOptions: [
        'top',
        'new',
        'hot',
      ],
      fromOptions: [
        'all',
        'month',
        'week',
        'day'
      ]
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChanged = this.onInputChanged.bind(this);
    this.onSortByChange = this.onSortByChange.bind(this);
    this.onFromChange = this.onFromChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.setSearchTerm(this.state.searchText)
    this.props.triggerSearch()

    this.setState({
      searchText: ''
    })
  }

  onInputChanged(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  onSortByChange(e) {
    console.log(e.target.value)
    this.props.setOrderByFilter(e.target.value)
  }

  onFromChange(e) {
    this.props.setFromFilter(e.target.value)
  }

  render() {
    return (
      <div className="search-bar">
          <form className="search-bar__search-box" onSubmit={this.onSubmit}>
            <input type="text" value={this.state.searchText} onChange={this.onInputChanged} placeholder="Enter subreddit name" />
            <button className="search-bar__search-button" type="submit">Search</button>
          </form>

          
          <div className="search-bar__options">
            {/* todo: consider moving these into separate components */}
            <span className="search-bar__order-by">Order by:</span>
            <select onChange={this.onSortByChange}>
              { 
                this.state.sortByOptions.map(option => {
                  return <option value={option}>{ option }</option>
                })
              }
            </select>
          </div>
          
          { this.props.orderBy === 'top' &&
            <div className="search-bar__options">
              <span className="search-bar__order-by">From:</span>
              <select onChange={this.onFromChange}>
                { 
                  this.state.fromOptions.map(option => {
                    return <option value={option}>{ option }</option>
                  })
                }
              </select>
            </div>
          }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);