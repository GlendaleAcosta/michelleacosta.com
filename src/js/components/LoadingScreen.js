import React, { Component } from 'react';
import '../../styles/loadingScreen.css';
import { closeLoadingScreen } from '../actions/loaderActions';

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingScreenStyle: {
        width: '100%',
        height: '100%',
      },
      redHalfStyle: {
        width: '100%',
      }
    };
  }
  
  animateLoadingScreen = () => {
    this.setState({
      loadingScreenStyle: {
        width: 'calc(100% - 90px)',
        height: 'calc(100% - 90px)',
        transition: '0.35s ease-in-out',
      }
    })
  }

  animateRedHalf = () => {
    this.setState({
      redHalfStyle: {
        width: '50%',
        transition: '0.7s ease-in-out',
      }
    })
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.animateLoadingScreen();
    }, 1000);
    setTimeout(() => {
      this.animateRedHalf();
    }, 1000);
    setTimeout(() => {
      this.props.dispatch(closeLoadingScreen());
    }, 1710);
    
  }

  render() {
    const {loadingScreenStyle, redHalfStyle} = this.state;
    return (
      <div className="loading-screen-container">
        <div style={loadingScreenStyle} className="loading-screen">
          <div style={redHalfStyle} className="loading-red-half">
            <h1 className="center-loader">
              Loading...
            </h1>
            <div className="load-bar">
              <div className="load-bar-fill" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingScreen;