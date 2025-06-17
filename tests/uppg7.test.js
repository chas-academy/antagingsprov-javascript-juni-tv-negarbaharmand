const { uppg7 } = require('../uppg7.js');

describe('uppg7', () => {
  test('should return 15 by summing 5 and 10', () => {
    const result = uppg7();
    expect(result).toBe(15);
  });
});