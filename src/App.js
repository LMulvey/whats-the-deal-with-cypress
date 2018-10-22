import React from 'react';
import 'react-piano/dist/styles.css';

import SlapBass from './piano/SlapBass';
import Flourish from './flourish';
import Shaker from './shaker';

import logo from './newlogo.png';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';
const gainNode = audioContext.createGain();
gainNode.gain.value = 4;
gainNode.connect(audioContext.destination);

class App extends React.Component {
  state = {
    newLogo: false,
  };

  toggleLogo = () => {
    const { newLogo } = this.state;
    if (!newLogo) this.setState({ newLogo: true });
  };

  render() {
    const { newLogo } = this.state;

    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-10 offset-md-1">
            {!newLogo ? (
              <React.Fragment>
                <h1>React ProTools</h1>
                <p>A very serious tool for very serious musicians &trade;</p>
              </React.Fragment>
            ) : (
              <img alt="wow" class="great-logo" src={logo} />
            )}
            <SlapBass
              audioContext={audioContext}
              soundfontHostname={soundfontHostname}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 text-center">
            <Flourish toggleLogo={this.toggleLogo} />
          </div>
          <div className="col-md-6 text-center">
            <Shaker />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
