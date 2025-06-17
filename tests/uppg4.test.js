const { uppg4 } = require('../uppg4.js');

describe('uppg4', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should log the person age', () => {
    uppg4();
    expect(consoleSpy).toHaveBeenCalledWith(25);
  });
});