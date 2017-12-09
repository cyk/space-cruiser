import { CruiserApp } from '.';

describe('properties', () => {
  const { properties } = CruiserApp;

  it('has today', () => {
    const actual = properties.today.value();
    expect(Date.parse(actual)).not.toBeNaN();
  })
});
