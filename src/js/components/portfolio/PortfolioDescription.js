import React, { Component } from 'react';
import 'styles/portfolio.css';

class PortfolioDescription extends Component {
  constructor(props) {
    super(props);
    this.state ={};
    console.log(props);
  }

  render() {
    const { currentPage } = this.props.portfolioReducer;
    return (
      <div className="portfolio-description-container">
        <h1 className="portfolio-description-title">{currentPage.DescriptionTitle}</h1>
        <p className="portfolio-description">
          {currentPage.Description}
        </p>
      </div>
    );
  }
}

export default PortfolioDescription;