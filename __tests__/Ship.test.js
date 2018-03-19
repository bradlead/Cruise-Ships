/* eslint-env jest */
const Ship = require('../src/Ship.js');
const Port = require('../src/Ship.js');

describe('Ship', () => {
  it('can be intiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});

describe('StartingPort', () => {
  it('has a starting port', () => {
    const port = new Port('Dover');
    const ship = new Ship(port);
    expect(ship.currentPort).toBe(port);
  });
});

describe('SetSail', () => {
  it('can set sail', () => {
    const port = new Port('Dover');
    const ship = new Ship(port);
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
  });
});

describe('Dock', () => {
  it('allows the ship to change ports', () => {
    const ship = new Ship('Dover');
    ship.Dock();

    expect(ship.dock).toEqual();
  });
});

