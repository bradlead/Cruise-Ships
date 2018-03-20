/* eslint-env jest */
const Port = require('../src/Port.js');

describe('Port', () => {
  it('can be intiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
});
