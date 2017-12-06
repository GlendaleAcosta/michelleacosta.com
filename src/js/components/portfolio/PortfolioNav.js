import React, { Component } from 'react';
import { changePage, fetchSlides, slidesFetched } from 'actions/portfolioActions';
import { StaggeredMotion, spring } from 'react-motion'
import 'styles/portfolio.css';

const defaultStyles = [
  {opacity: 0, x: -35},
  {opacity: 0, x: -35},
  {opacity: 0, x: -35},
  {opacity: 0, x: -35},
  {opacity: 0, x: -35},
  {opacity: 0, x: -35},
  {opacity: 0, x: -35},
];

const nav = [
  'Introduction',
  'Illustration Templates',
  'Noteworthy Designs',
  'Technical Sketches',
  'Hand Sketches',
  'Graphic Screens & More',
  'Accessories',
]

class PortfolioNav extends Component {
  constructor(props) {
    super(props);
    this.state= {
      renderNav: false,
      expandBar: 0,
      selectedNav: 0,
    };
    const that = this;
    setTimeout(() => {
      that.setState({
        renderNav: true,
      })
    }, 800)
  }

  changePage = (page) => {
    this.setState({
      selectedNav: page,
    })
    this.props.dispatch(fetchSlides());
    setTimeout(() => {
      this.props.dispatch(changePage(page));
    }, 300)
    setTimeout(() => {
      this.props.dispatch(slidesFetched());
    }, 600)
      
  }

  renderStyles = (prevInterpolatedStyles) => {
    return prevInterpolatedStyles.map((_, i) => {
      return i === 0
      ? {opacity: spring(1), x: spring(0, {stiffness: 300, damping: 60})}
      : {
        opacity: spring(prevInterpolatedStyles[i - 1].opacity),
        x: spring(prevInterpolatedStyles[i-1].x)
      }
    });
  }

  expandBar = (i) => {
    this.setState({
      expandBar: i,
    })
  }

  renderNavList = (interpolatingStyles) => {
    return (
      <ul className="portfolio-nav-list">
        {
          interpolatingStyles.map((style, i) => {
            const styles = {
              opacity: style.opacity,
              WebkitTransform: `translateX(${style.x}%)`,
              transform: `translateX(${style.x}%)`,
            };
            const expandBarStyle = i === this.state.selectedNav
              ? { width: '80%', transition: '0.25s ease-in-out'}
              : { width: '0', transition: '0.25s ease-in-out'}
         return (
          <li
            onClick={() => this.changePage(i)}
            onMouseOver={() => this.expandBar(i)}
            className="portfolio-nav-li"
            style={styles}
          >
            {nav[i]}
            <div style={expandBarStyle} className="li-tiny-bar"/>
          </li>
         )
        })
      }
      </ul>
    )
  }

  waitToRenderNav = () => {
    if (this.state.renderNav) {
      return (
        <StaggeredMotion
        defaultStyles={defaultStyles}
        styles={this.renderStyles}
      >
        {this.renderNavList}
      </StaggeredMotion>
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="portfolio-nav">
        <h1 className="portfolio-title">Portfolio</h1>
        {this.waitToRenderNav()}
      </div>
    );
  }
}

export default PortfolioNav;