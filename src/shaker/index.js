import React from 'react';
import shaker from './shaker.wav';

export default class Shaker extends React.Component {
  state = {
    isPlaying: false,
    shaker: new Audio(shaker),
  };

  componentDidMount() {
    const { shaker } = this.state;
    shaker.loop = true;
    this.setState({ shaker });
  }

  startAudio = () => {
    this.state.shaker.play();
    this.setState({ isPlaying: true });
  };
  stopAudio = () => {
    this.state.shaker.pause();
    this.setState({ isPlaying: false });
  };
  handleClick = () => {
    const { isPlaying } = this.state;
    if (!isPlaying) this.startAudio();
    else this.stopAudio();
  };

  render() {
    return (
      <button id="shaker-button" onClick={this.handleClick}>
        <h2>
          Shakers
          <span aria-label="shaker" role="img">
            🥁
          </span>
        </h2>
      </button>
    );
  }
}
