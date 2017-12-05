import React, { Component } from 'react';
import BottomSlider from 'components/portfolio/BottomSlider';
import PortfolioNav from 'components/portfolio/PortfolioNav';
import PortfolioDescription from 'components/portfolio/PortfolioDescription';
import CurrentSlide from 'components/portfolio/CurrentSlide';
import { connect } from 'react-redux';
import '../../styles/home.css';
import '../../styles/portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state= {
      redHalfStyle: {
        width: '100%',
      }
    }
  }

  render() {
    const {redHalfStyle} = this.state;
    return (
      <div className="page">
        <div className="grey-box">
          <PortfolioNav {...this.props} />
          <div style={redHalfStyle} className="red-half-portfolio" >

            <div className="top-portfolio-container">
              <PortfolioDescription {...this.props} />
              <CurrentSlide {...this.props} />
            </div>

            <BottomSlider {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    portfolioReducer: state.portfolioReducer,
  };
}

export default connect(mapStateToProps)(Portfolio);