/* eslint-disable */

/* BPM settings */
const BASE_BPM = 111;
const BPM_MODIFIER = 3.8;

/* god don't touch these lee */
const TARGET_BPM = BASE_BPM * BPM_MODIFIER;
const ONE_BEAT = 60000 / TARGET_BPM;
const HALF_BEAT = ONE_BEAT / 2;
const QUARTER_BEAT = ONE_BEAT / 4;
const THREE_QUARTER_BEAT = QUARTER_BEAT * 3;
const PUSH_BEAT = ONE_BEAT * 1.25;
const TWO_BEATS = ONE_BEAT * 2;
const THREE_BEATS = ONE_BEAT * 3;

const playKey = (key, speed = PUSH_BEAT) => {
  cy.get('body').trigger('keydown', { key });
  cy.wait(speed);
  cy.get('body').trigger('keyup', { key });
};

const gimmeHorns = () => {
  cy.get('#flourish-button').click({ force: true });
};
const toggleShaker = () => {
  cy.get('#shaker-button').click({ force: true });
};

/** These were not ready for the world */
// const bringItUp = () => {
//   cy.get('#increase-octave').click();
// };

// const bringItDown = () => {
//   cy.get('#increase-octave').click();
// };

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  after(() => toggleShaker());

  it('plays the thing', () => {
    cy.wait(ONE_BEAT);

    toggleShaker();

    cy.wait(TWO_BEATS * 6);

    /** Intro */
    playKey('k', TWO_BEATS);

    playKey('j', TWO_BEATS);

    playKey('t', HALF_BEAT);

    playKey('g', QUARTER_BEAT);

    playKey('j');

    playKey('g', HALF_BEAT);

    playKey('t', HALF_BEAT);

    playKey('f', TWO_BEATS);

    /** First uh verse */
    playKey('a');

    playKey('k', QUARTER_BEAT);

    playKey('a');

    playKey('g');

    playKey('j');

    playKey('k');

    playKey('r', THREE_BEATS);

    cy.wait(PUSH_BEAT);

    playKey('f');

    playKey('f');

    playKey('d');

    playKey('d');

    playKey('e');

    playKey('e');

    playKey('s');

    playKey('a', HALF_BEAT);

    playKey('a');

    playKey('k', QUARTER_BEAT);

    playKey('a');

    playKey('g');

    playKey('j');

    playKey('k');

    playKey('r', THREE_BEATS);

    cy.wait(ONE_BEAT);

    playKey('f');

    playKey('f', TWO_BEATS);

    /* end of first section */
    gimmeHorns();

    cy.wait(TWO_BEATS + 1000);

    /** SECOND VERSE */
    playKey('k', QUARTER_BEAT);

    playKey('a');

    playKey('g');

    playKey('j');

    playKey('k');

    playKey('r', THREE_BEATS);

    cy.wait(PUSH_BEAT);

    playKey('f');

    playKey('f');

    playKey('d');

    playKey('d');

    playKey('e');

    playKey('e');

    playKey('s');

    playKey('a', HALF_BEAT);

    playKey('a');

    playKey('k', QUARTER_BEAT);

    playKey('a');

    playKey('g');

    playKey('j');

    playKey('k');

    playKey('r', THREE_BEATS);

    cy.wait(PUSH_BEAT);

    playKey('f');

    playKey('f', TWO_BEATS);

    gimmeHorns();

    cy.wait(200 + ONE_BEAT);

    gimmeHorns();
  });
});
