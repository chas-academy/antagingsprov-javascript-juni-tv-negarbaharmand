const { uppg1 } = require('../uppg1.js');

describe('uppg1', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should print "Hello World!"', () => {
    uppg1();
    expect(consoleSpy).toHaveBeenCalledWith('Hello World!');
  });
});