/* eslint-env jest */
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
  it('Contains a list of ports to visit', () => {
    expect(Itinerary).toBeInstanceOf(Object);
  });
});

describe('Itinerary list', () => {
  it('can have ports', () => {
    const monaco = jest.fn('Monaco');
    const belfast = jest.fn('Belfast');

    const itinerary = new Itinerary([monaco, belfast]);
    expect(itinerary.ports).toEqual([monaco, belfast]);
  });
});
