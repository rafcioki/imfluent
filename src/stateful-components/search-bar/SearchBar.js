import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { requestImages, setOrderByFilter, setFromFilter, setSearchTerm } from '../../logic/imagesLoading/imagesLoadingActions';
import './searchBar.css';

const mapDispatchToProps = (dispatch) => {
  return {
    triggerSearch: () => dispatch(requestImages()),
    setOrderByFilter: (orderBy) => dispatch(setOrderByFilter(orderBy)),
    setFromFilter: (from) => dispatch(setFromFilter(from)),
    setSearchTerm: (subreddit) => dispatch(setSearchTerm(subreddit))
  }
}

const mapStateToProps = (state) => {
  return {
    orderBy: state.images.orderBy,
    from: state.images.from,
    images: state.images.images,
    isLoading: state.images.isLoading,
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
      ],
      isCollapsed: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChanged = this.onInputChanged.bind(this);
    this.onSortByChange = this.onSortByChange.bind(this);
    this.onFromChange = this.onFromChange.bind(this);
    this.onCollapseMenuButtonClick = this.onCollapseMenuButtonClick.bind(this);
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
    this.props.setOrderByFilter(e.target.value)
  }

  onFromChange(e) {
    this.props.setFromFilter(e.target.value)
  }

  onCollapseMenuButtonClick() {
    this.setState(prevState => {
      return {
        isCollapsed: !prevState.isCollapsed
      }
    })
  }

  getCollapseArrowDirection() {
    return this.state.isCollapsed ? 'down' : 'up'
  }

  galleryIsEmpty() {
    return this.props.images.length === 0;
  }

  loadingInitially() {
    return this.props.isLoading && this.props.images.length === 0;
  }

  render() {
    return (
      !this.loadingInitially() &&
      <div className={`search-bar${this.galleryIsEmpty() ? '' : '--fixed'}`}>
       {
         !this.state.isCollapsed &&
          <div>
            <form className="search-bar__search-box" onSubmit={this.onSubmit}>
              <input className="search-bar__search-box__text" type="text" value={this.state.searchText} onChange={this.onInputChanged} placeholder="Enter subreddit name" />
              <button className="search-bar__search-button" type="submit">Search</button>
            </form>
            
            <SortingOptions title="Order by" onChangeCallback={this.onSortByChange} options={this.state.sortByOptions} selected={this.props.orderBy}/>
            
            { this.props.orderBy === 'top' &&
              <SortingOptions title="From" onChangeCallback={this.onFromChange} options={this.state.fromOptions} selected={this.props.from} />
            }
          </div>
       }

        {
          !this.galleryIsEmpty() &&
          <div className="search-bar__collapse-menu-button" onClick={this.onCollapseMenuButtonClick}>
            <FontAwesome name={`arrow-${this.getCollapseArrowDirection()}`} className="search-bar__collapse-menu-button__button" />
          </div>
        }
          
      </div>
    );
  }
}

const SortingOptions = ({title, onChangeCallback, options, selected}) => {
  return (
    <div className="search-bar__options">
      <span className="search-bar__order-by">{title}:</span>
      <select onChange={onChangeCallback} value={selected}> 
        { 
          options.map(option => {
            return <option  value={option}>{ option }</option>
          })
        }
      </select>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);