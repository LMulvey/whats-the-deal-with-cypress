import React from 'react';

import flourish1 from './flourish1.wav';
import flourish2 from './flourish2.wav';
import flourish3 from './flourish3.wav';

export default class Flourish extends React.Component {
  state = {
    timesPlayed: 0,
    flourishes: [
      new Audio(flourish1),
      new Audio(flourish2),
      new Audio(flourish3),
    ],
  };

  playSound = () => {
    const { timesPlayed, flourishes } = this.state;
    this.props.toggleLogo();
    flourishes[timesPlayed].play();

    if (timesPlayed === flourishes.length - 1) {
      this.setState({ timesPlayed: 0 });
    } else {
      this.setState({ timesPlayed: timesPlayed + 1 });
    }
  };

  render() {
    return (
      <button id="flourish-button" onClick={this.playSound}>
        <h2>
          HIT IT!
          <span aria-label="shaker" role="img">
            🎺
          </span>
        </h2>
      </button>
    );
  }
}
