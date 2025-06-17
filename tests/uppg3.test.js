const { uppg3 } = require('../uppg3.js');

describe('uppg3', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should print the sum of 5 and 10', () => {
    uppg3();
    expect(consoleSpy).toHaveBeenCalledWith(15);
  });
});