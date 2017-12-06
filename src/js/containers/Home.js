import '../../styles/home.css';
import React, { Component } from 'react';
import testImg from '../../pic-test.png';
import LoadingScreen from '../components/LoadingScreen';
import { connect } from 'react-redux';
import { StaggeredMotion, Motion, spring } from 'react-motion';

const TITLES = [
  'MICHELLE',
  'DEARDORFF',
  'Designer with 8 years of experience'
]
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 50,
      homeImgCoverStyle: {
        y: spring(-105, { stiffness: 35, damping: 18 }),
      },
      homeImgContainerStyle: {
        opacity: 1,
        transform: 'translateY(0)',
      },
      homeCenterContainerStyle: {
        opacity: 1,
        // transform: 'translateY(0)',
      }
    };
    window.addEventListener('wheel', this.handleScroll);
  }

  handleScroll = (e) => {
    console.log(e);
  }
  
  componentWillLeave = () => {
    const that = this;
    this.setState({
      
      homeImgContainerStyle: {
        opacity: 0,
        transform: 'translateY(-20%)',
        transition: '0.7s ease-in-out',
        boxShadow: '0 0 0 rgba(0,0,0,0)',
      }, 
      homeCenterContainerStyle: {
        opacity: 0,
        transform: 'translate(65%, -60%)',
        transition: '0.7s ease-in-out',
      }
    })
    setTimeout(() => {
      that.setState({
        width: 100,
      })
    }, 400);
    setTimeout(() => {
      that.props.history.push('/portfolio');
    }, 1200)
  }

  renderHomeImgCover = (interpolatingStyles) => {
    const styles = {
      WebkitTransform: `translateY(${interpolatingStyles.y}%)`,
      transform: `translateY(${interpolatingStyles.y}%)`,
    };

    return (
      <div style={styles} className="home-img-cover" />
    );
  }

  renderHomeImg = (interpolatingStyles) => {
    const styles = {
      WebkitTransform: `translateY(${interpolatingStyles.y}%)`,
      transform: `translateY(${interpolatingStyles.y}%)`,
    };

    return (
      <img style={styles} className="home-img" src={testImg} alt="img" />
    );
  }

  renderTitle1 = (interpolatingStyles) => {
    return (
      <div className="home-title-container">
        {
          interpolatingStyles.map((style, i) => {
            const styles = {
              opacity: style.opacity,
              WebkitTransform: `translateY(${style.y}%)`,
              transform: `translateY(${style.y}%)`,
            };
            if (i === 2) {
              return <p className="home-subtitle" key={TITLES[i]} style={styles} >{TITLES[i]}</p>
            }
          return <h1 key={TITLES[i]} style={styles} className="home-title ht-1">{TITLES[i]}</h1>;
       })
      }
      </div>
    )
  }

  render() {
    const {homeImgCoverStyle, homeImgContainerStyle, homeCenterContainerStyle} = this.state;
    if (this.props.loaderReducer.showLoadingScreen) {
        return <LoadingScreen {...this.props} />;
    } else {
      return (
        <div className="page">
          <div className="grey-box">
            <div style={{width: `${this.state.width}%`}} className="red-half" />
            <div style={homeCenterContainerStyle} className="home-center-container">
                <StaggeredMotion
                  defaultStyles={[{ opacity: 0, y: 200 }, { opacity: 0, y: 200 }, { opacity: 0, y: 200 }]}
                  styles={prevInterpolatedStyles => {
                    return prevInterpolatedStyles.map((_, i) => {
                      return i === 0
                      ? {opacity: spring(1), y: spring(0, {stiffness: 100, damping: 20})}
                      : {
                        opacity: spring(prevInterpolatedStyles[i - 1].opacity),
                        y: spring(prevInterpolatedStyles[i-1].y)
                      }
                  })}}>
                    {this.renderTitle1}
                </StaggeredMotion>
              <div style={homeImgContainerStyle} className="home-img-container">
                <Motion
                  defaultStyle={{ y: 300 }}
                  style={{ y: spring(0, { stiffness: 320, damping: 80 }) }}
                >
                  {this.renderHomeImg}
                </Motion>
                <Motion defaultStyle={{ y: 200 }} style={homeImgCoverStyle} >
                  {this.renderHomeImgCover}
                </Motion>
              </div>
              <button className="view-portfolio-btn" onClick={this.componentWillLeave}>
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    loaderReducer: state.loaderReducer,
  };
}
export default connect(mapStateToProps)(Home);