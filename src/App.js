import React from 'react';
import 'react-piano/dist/styles.css';

import SlapBass from './piano/SlapBass';
import Flourish from './flourish';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';
const gainNode = audioContext.createGain();
gainNode.gain.value = 4;
gainNode.connect(audioContext.destination);

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-10 offset-md-1">
            <h1>React ProTools</h1>
            <p>A very serious tool for very serious musicians &trade;</p>
            <SlapBass
              audioContext={audioContext}
              soundfontHostname={soundfontHostname}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <Flourish />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
