/* eslint-env jest */
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe('Port', () => {
  it('can be intiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
});

describe('addShip', () => {
  it('Adds a record of ships that have visited the port', () => {
    const port = new Port('Monaco');
    const ship = jest.fn();
    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });
});

describe('removeShip', () => {
  it('Removes the ship', () => {
    const port = new Port('Monaco');
    const titanic = jest.fn();
    const queenMary = jest.fn();

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });
});
