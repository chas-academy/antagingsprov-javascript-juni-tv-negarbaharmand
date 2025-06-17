const { uppg6 } = require('../uppg6.js');

describe('uppg6 (unknown array contents)', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('logs at least one item, and all logged items are strings', () => {
    uppg6();

    // Ensure that something was logged
    expect(consoleSpy.mock.calls.length).toBeGreaterThan(0);

    // Check that all logged values are strings
    consoleSpy.mock.calls.forEach(call => {
      const [loggedValue] = call;
      expect(typeof loggedValue).toBe('string');
    });
  });
});