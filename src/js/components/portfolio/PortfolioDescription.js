import React, { Component } from 'react';
import 'styles/portfolio.css';

class PortfolioDescription extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    const { currentPage } = this.props.portfolioReducer;
    const style = {
      opacity: this.props.portfolioReducer.fetchingSlides ? 0 : 1,
    };
    return (
      <div style={style} className="portfolio-description-container">
        <h1 className="portfolio-description-title">{currentPage.DescriptionTitle}</h1>
        <p className="portfolio-description">
          {currentPage.Description}
        </p>
      </div>
    );
  }
}

export default PortfolioDescription;