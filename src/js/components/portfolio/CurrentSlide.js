import React, { Component } from 'react';
import 'styles/portfolio.css';

class CurrentSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
   render() {
    const { currentSlide } = this.props.portfolioReducer;
    const slideSrc = require(`images/${currentSlide}`);
    const style = {
      opacity: this.props.portfolioReducer.fetchingSlides ? 0 : 1,
    };
    return (
      <div style={style} className="current-slide-container">
        <img alt={'idk'} src={slideSrc} className="current-slide" />

        <div className="current-slide-bg"/>
      </div>
    );
  }
}

export default CurrentSlide;