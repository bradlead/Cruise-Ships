/* eslint-env jest */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('ship', () => {
  describe('With a port and itinerary', () => {
    let ship;
    let port;

    beforeEach(() => {
      port = new Port('Monaco');
      const itinerary = new Itinerary([port]);
      ship = new Ship(itinerary);
    });

    it('can be intiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
      expect(ship.currentPort).toBe(port);
    });

    it('can set sail', () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(port.ships).not.toContain(ship);
    });

    it('gets added to port on instantiation', () => {
      expect(port.ships).toContain(ship);
    });

    describe('Dock', () => {
      it('allows the ship to change ports', () => {
        const monaco = new Port('Monaco');
        const belfast = new Port('Belfast');
        const itinerary = new Itinerary([monaco, belfast]);
        ship = new Ship(itinerary);
        ship.dock();

        expect(ship.currentPort).toBe(belfast);
        expect(belfast.ships).toContain(ship);
      });
    });
  });
});
