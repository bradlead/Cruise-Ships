const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it ('can be intiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

});

describe('startingPort', () => {
    it('has a starting port', () => {
        const ship = new Ship('Dover');
        expect(ship.startingPort).toBe('Dover');
    })
})