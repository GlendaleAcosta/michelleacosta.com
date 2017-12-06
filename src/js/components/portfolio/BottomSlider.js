import React, { Component } from 'react';
import { changeSlide, slidesFetched } from 'actions/portfolioActions';
import 'styles/portfolio.css';
import { StaggeredMotion, spring } from 'react-motion';



class BottomSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      j: 5,
      slideContainerPosition: 'translateX(0)',
    };
  }

  changeSlide = (slideNum) => { 
    const { currentPage } = this.props.portfolioReducer;
    this.props.dispatch(changeSlide(slideNum));
    if (currentPage.images.length > 6) {
      this.moveSlider(slideNum);
    }
  }

  moveSlider = (slideNum) => {
    const { currentPage } = this.props.portfolioReducer;
    const slideLength = currentPage.images.length;
    const { i , j} = this.state;
    if (slideNum >= (j-2) && this.state.j < (slideLength - 1)) {
      // transform right
      const val = -(i+1) * 10;
      this.setState({
        i: i + 1,
        j: j + 1,
        slideContainerPosition: `translateX(${val}%)`,
      });
    } else if (slideNum <= (i+2) && this.state.i > 0) {
      // transform left
      const val = -(i-1) * 10;
      this.setState({
        i: i - 1,
        j: j - 1,
        slideContainerPosition: `translateX(${val}%)`,
      });
    }
  }

  renderSlides = () => {
    const { currentPage } = this.props.portfolioReducer;
    const slides = currentPage.images;
    return slides.map((slide, i) => {
      const slideSrc = require(`images/${slide}`);
      return (
        <div onClick={() => this.changeSlide(i)} className="slide">
          <img className="slide-img" src={slideSrc} alt='idk' />
          {this.renderSlideBG(slide)}
        </div>
      )
    })
  }

  renderSlideBG = (slide) => {
    const { currentSlide } = this.props.portfolioReducer;
    if (currentSlide !== slide) {
      return <div className="slide-img-bg" />;
    } else{
      return null;
    }
  }


  render() {
    const { currentPage } = this.props.portfolioReducer;
    const style = {
      width: `calc((100%/6) * ${currentPage.images.length})`,
      transform: currentPage.images.length > 6 ? this.state.slideContainerPosition : 'translateX(0)',
      opacity: this.props.portfolioReducer.fetchingSlides ? 0 : 1,
    };

    return (
      <div style={style} className="slide-container">
        {this.renderSlides()}
      </div>
    )
  }
}


export default BottomSlider;