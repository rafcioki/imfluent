import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMoreImages } from '../../logic/imagesLoading/imagesLoadingActions';

const BroadcastWhenLessPixelsLeft = 500;

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreImages: () => dispatch(fetchMoreImages())
  }
}

class Scroller extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    console.log(`scrolling! ${window.innerHeight + window.scrollY >= document.body.offsetHeight}`);

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.props.getMoreImages();
    }
  }

  render() {
    return (null);
  }
}

export default connect(null, mapDispatchToProps)(Scroller);