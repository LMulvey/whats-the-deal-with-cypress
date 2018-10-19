/* eslint-disable */

/* BPM settings */
const BASE_BPM = 111;
const BPM_MODIFIER = 4;

/* god don't touch these lee */
const TARGET_BPM = BASE_BPM * BPM_MODIFIER;
const ONE_BEAT = 60000 / TARGET_BPM;
const HALF_BEAT = ONE_BEAT / 2;
const QUARTER_BEAT = ONE_BEAT / 4;
const THREE_QUARTER_BEAT = QUARTER_BEAT * 3;
const PUSH_BEAT = ONE_BEAT * 1.5;
const TWO_BEATS = ONE_BEAT * 2;

const playKey = (key, speed = ONE_BEAT) => {
  cy.get('body').trigger('keydown', { key });
  cy.wait(speed);
  cy.get('body').trigger('keyup', { key });
};

const gimmeFlourish = () => {
  cy.get('#flourish-button').click();
};

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('plays the thing', () => {
    cy.wait(200);
    cy.get('body').trigger('keyup', { key: 'a' });

    playKey('a', THREE_QUARTER_BEAT);

    playKey('k', HALF_BEAT);

    playKey('a', PUSH_BEAT);

    playKey('g');

    playKey('j', PUSH_BEAT);

    playKey('k', PUSH_BEAT);

    playKey('r', TWO_BEATS);

    playKey('f');

    playKey('f', PUSH_BEAT);

    playKey('d');

    playKey('d', PUSH_BEAT);

    playKey('e');

    playKey('e', PUSH_BEAT);

    playKey('s');

    playKey('a', HALF_BEAT);

    playKey('a', PUSH_BEAT);

    playKey('k', QUARTER_BEAT);

    playKey('a', PUSH_BEAT);

    playKey('g');

    playKey('j', PUSH_BEAT);

    playKey('k', PUSH_BEAT);

    playKey('r', TWO_BEATS);

    playKey('f');

    playKey('f', PUSH_BEAT);

    gimmeFlourish();

    cy.wait(790 + ONE_BEAT);

    playKey('a', THREE_QUARTER_BEAT);

    playKey('a', QUARTER_BEAT);

    playKey('k', HALF_BEAT);

    playKey('a', PUSH_BEAT);

    playKey('g');

    playKey('j', PUSH_BEAT);

    playKey('k', PUSH_BEAT);

    playKey('r', TWO_BEATS);

    playKey('f');

    playKey('f', PUSH_BEAT);

    playKey('d');

    playKey('d', PUSH_BEAT);

    playKey('e');

    playKey('e', PUSH_BEAT);

    playKey('s');

    playKey('a', HALF_BEAT);

    playKey('a', PUSH_BEAT);

    playKey('k', QUARTER_BEAT);

    playKey('a', PUSH_BEAT);

    playKey('g');

    playKey('j', PUSH_BEAT);

    playKey('k', PUSH_BEAT);

    playKey('r', TWO_BEATS);

    playKey('f');

    playKey('f', PUSH_BEAT);

    gimmeFlourish();
  });
});
