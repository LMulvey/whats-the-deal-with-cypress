import React from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';

import DimensionsProvider from './DimensionsProvider';
import SoundfontProvider from './SoundfontProvider';

const OCTAVE_STEPS = [
  { from: 'e1', to: 'b3' },
  { from: 'e2', to: 'b4' },
  { from: 'e3', to: 'b5' },
];

class SlapBass extends React.Component {
  state = {
    currentOctave: 0,
    config: {
      instrumentName: 'slap_bass_1',
      noteRange: {
        first: MidiNumbers.fromNote(OCTAVE_STEPS[0].from),
        last: MidiNumbers.fromNote(OCTAVE_STEPS[0].to),
      },
      keyboardShortcutOffset: 0,
    },
  };

  increaseOctave = () => {
    let { currentOctave } = this.state;

    if (currentOctave <= OCTAVE_STEPS.length) currentOctave += 1;
    else currentOctave = OCTAVE_STEPS.length;

    this.setState(prevState => ({
      config: {
        currentOctave,
        ...prevState.config,
        noteRange: {
          first: MidiNumbers.fromNote(OCTAVE_STEPS[currentOctave].from),
          last: MidiNumbers.fromNote(OCTAVE_STEPS[currentOctave].to),
        },
      },
    }));
  };

  decreaseOctave = () => {
    let { currentOctave } = this.state;

    if (currentOctave > 0) currentOctave -= 1;
    else currentOctave = 0;

    this.setState(prevState => ({
      config: {
        currentOctave,
        ...prevState.config,
        noteRange: {
          first: MidiNumbers.fromNote(OCTAVE_STEPS[currentOctave].from),
          last: MidiNumbers.fromNote(OCTAVE_STEPS[currentOctave].to),
        },
      },
    }));
  };

  render() {
    const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote:
        this.state.config.noteRange.first +
        this.state.config.keyboardShortcutOffset,
      lastNote:
        this.state.config.noteRange.last +
        this.state.config.keyboardShortcutOffset,
      keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });

    return (
      <React.Fragment>
        <button class="mx-2" id="increase-octave" onClick={this.increaseOctave}>
          <h4>+</h4>
        </button>
        <button class="mx-2" id="decrease-octave" onClick={this.decreaseOctave}>
          <h4>-</h4>
        </button>
        <SoundfontProvider
          audioContext={this.props.audioContext}
          instrumentName={this.state.config.instrumentName}
          hostname={this.props.soundfontHostname}
          render={({ isLoading, playNote, stopNote, stopAllNotes }) => (
            <div>
              <div className="mt-4">
                <DimensionsProvider>
                  {({ containerWidth }) => (
                    <Piano
                      noteRange={this.state.config.noteRange}
                      keyboardShortcuts={keyboardShortcuts}
                      playNote={playNote}
                      stopNote={stopNote}
                      disabled={isLoading}
                      width={containerWidth}
                    />
                  )}
                </DimensionsProvider>
              </div>
            </div>
          )}
        />
      </React.Fragment>
    );
  }
}

export default SlapBass;
