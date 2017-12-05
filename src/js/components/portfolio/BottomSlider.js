import React, { Component } from 'react';
import { changeSlide } from 'actions/portfolioActions';
import 'styles/portfolio.css';
import { StaggeredMotion, spring } from 'react-motion';

const slides = [
  1, 2, 3, 4, 5, 6
]

const defaultStyles = [
  { opacity: 0, y: 40 },
  { opacity: 0, y: 40 },
  { opacity: 0, y: 40 },
  { opacity: 0, y: 40 },
  { opacity: 0, y: 40 },
  { opacity: 0, y: 40 },
]

class BottomSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderSlides: false,
      defaultStyles: [
        { opacity: 0, y: 40 },
        { opacity: 0, y: 40 },
        { opacity: 0, y: 40 },
        { opacity: 0, y: 40 },
        { opacity: 0, y: 40 },
      ]
    };
    const that = this;
    setTimeout(() => {
      that.setState({
        renderSlides: true,
      })
    }, 700)
    console.log(props);
  }

  changeSlide = (slideNum) => { 
    this.props.dispatch(changeSlide(slideNum));
  }

  // renderSlides = (interpolatingStyles) => {
    // const { currentPage, currentSlide } = this.props.portfolioReducer;
    // const slides = currentPage.images;

  //   return slides.map((slide, i) => {
      // const slideSrc = require(`images/${slide}`);
      // if (currentSlide === slide) {
      //   return (
      //     <div onClick={() => this.changeSlide(i)} className="slide">
      //       <img
      //         className="slide-img"
      //         alt={'idk'}
      //         src={slideSrc}
      //         key={slide}
      //       />
      //     </div>
      //   );
      // }
      // return (
      //   <div onClick={() => this.changeSlide(i)} className="slide">
      //     <img
      //       className="slide-img"
      //       alt={'idk'}
      //       src={slideSrc}
      //       key={slide}
      //     />
          // <div className="slide-img-bg" />
      //   </div>
      // );
  //   }
  //   );
  // }
  renderSlides = (interpolatingStyles) => {
    const { currentPage, currentSlide } = this.props.portfolioReducer;
    const slides = currentPage.images;  
      return (
        <div className="slide-container">
          {
            interpolatingStyles.map((style, i) => {
              if (i + 1 > slides.length)
                return null;
              const slideSrc = require(`images/${slides[i]}`);
              const slide = slides[i];
              const styles = {
                opacity: style.opacity,
                WebkitTransform: `translateY(${style.y}%)`,
                transform: `translateY(${style.y}%)`,
              };
              if (currentSlide === slide) {
                return (
                  <div key={slide} style={styles} onClick={() => this.changeSlide(i)} className="slide">
                    <img
                      className="slide-img"
                      alt={'idk'}
                      src={slideSrc}
                    />
                  </div>
                );
              }
              return (
                <div key={slide} style={styles} onClick={() => this.changeSlide(i)} className="slide">
                  <img
                    className="slide-img"
                    alt={'idk'}
                    src={slideSrc}
                  />
                  <div className="slide-img-bg" />
                </div>
              );
            })
          }
        </div>
      )
  }

  renderStyles = (prevInterpolatedStyles) => {
    return prevInterpolatedStyles.map((_, i) => {
      return i === 0
      ? {opacity: spring(1), y: spring(0, {stiffness: 300, damping: 60})}
      : {
        opacity: spring(prevInterpolatedStyles[i - 1].opacity),
        y: spring(prevInterpolatedStyles[i-1].y)
      }
    });
  }

  waitToRenderSlides = () => {
    
    if (this.state.renderSlides) {
      return (
        <StaggeredMotion
          defaultStyles={defaultStyles}
          styles={this.renderStyles}
        >
          {this.renderSlides}
        </StaggeredMotion>
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      this.waitToRenderSlides()
    );
  }
}

export default BottomSlider;