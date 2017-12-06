import { MyElement } from './element';

describe('properties', () => {
  const { properties } = MyElement;

  it('has today', () => {
    const actual = properties.today.value();
    expect(Date.parse(actual)).not.toBeNaN();
  })
});
