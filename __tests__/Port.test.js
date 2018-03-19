/* eslint-env jest */
const Port = require('../src/Ship.js');

describe('Port', () => {
  it('can be intiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
});
