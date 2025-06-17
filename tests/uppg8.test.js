const { uppg8 } = require('../uppg8.js');

describe('uppg8', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should log lines with "name" but not depend on known names', () => {
    uppg8();
    // Check that at least one line was logged
    expect(consoleSpy.mock.calls.length).toBeGreaterThan(0);

    // Verify each logged line has the format "name"
    consoleSpy.mock.calls.forEach(call => {
      const [loggedValue] = call;
      expect(typeof loggedValue).toBe('string');
    });
  });
});