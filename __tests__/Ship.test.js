/* eslint-env jest */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
  it('can be intiated', () => {
    const port = new Port('Monaco');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });
});

describe('StartingPort', () => {
  it('has a starting port', () => {
    const port = new Port('Monaco');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(port);
  });
});

describe('SetSail', () => {
  it('can set sail', () => {
    const port = new Port('Monaco');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(port.ships).not.toContain(ship);
  });
});

describe('Dock', () => {
  it('allows the ship to change ports', () => {
    const monaco = new Port('Monaco');
    const belfast = new Port('Belfast');
    const itinerary = new Itinerary([monaco, belfast]);
    const ship = new Ship(itinerary);
    ship.dock();

    expect(ship.currentPort).toBe(belfast);
    expect(belfast.ships).toContain(ship);
  });
});

it('gets added to port on instantiation', () => {
  const port = new Port('Monaco');
  const itinerary = new Itinerary([port]);
  const ship = new Ship(itinerary);

  expect(port.ships).toContain(ship);
});

