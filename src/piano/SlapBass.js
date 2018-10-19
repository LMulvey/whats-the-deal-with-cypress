import React from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';

import DimensionsProvider from './DimensionsProvider';
import SoundfontProvider from './SoundfontProvider';

class SlapBass extends React.Component {
  state = {
    config: {
      instrumentName: 'slap_bass_1',
      noteRange: {
        first: MidiNumbers.fromNote('e1'),
        last: MidiNumbers.fromNote('b3'),
      },
      keyboardShortcutOffset: 0,
    },
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
    );
  }
}

export default SlapBass;
