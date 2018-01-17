import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestMoreImages, displayMoreImages } from '../../logic/imagesLoading/imagesLoadingActions';

const BroadcastWhenScrolledScreenPercentage = 30;

const mapStateToProps = (state) => {
  return {
    hiddenImages: state.images.hiddenImages,
    isLoading: state.images.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreImages: () => dispatch(requestMoreImages()),
    displayMoreImages: () => dispatch(displayMoreImages()),
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

    const scrolledIntoInPercentage = ((window.innerHeight + window.scrollY) / document.body.offsetHeight) * 100

    if (scrolledIntoInPercentage > BroadcastWhenScrolledScreenPercentage && this.props.hiddenImages.length === 0 && !this.props.isLoading) {
      this.props.getMoreImages()
    }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.props.displayMoreImages();
    }
  }

  render() {
    return (null);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scroller);