const { uppg2 } = require('../uppg2.js');

describe('uppg2', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ska skriva ut en icke-tom sträng i konsolen', () => {
    uppg2();
    
    expect(consoleSpy).toHaveBeenCalled();

    const loggedValue = consoleSpy.mock.calls[0][0];

    expect(typeof loggedValue).toBe('string');

    expect(loggedValue.length).toBeGreaterThan(0);
  });
});
