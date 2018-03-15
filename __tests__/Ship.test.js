/* eslint-env jest */
const Ship = require('../src/Ship.js');

describe('Ship', () => {
  it('can be intiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});

describe('StartingPort', () => {
  it('has a starting port', () => {
    const ship = new Ship('Dover');
    expect(ship.currentPort).toBe('Dover');
  });
});

describe('SetSail', () => {
  it('can set sail', () => {
    const ship = new Ship('Dover');
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
  });
});

describe('Dock', () => {
  it('allows the ship to change ports', () => {
    const ship = new Ship('Dover');
    ship.Dock();

    expect(ship.dock).toEqual('Dover');
  });
});
