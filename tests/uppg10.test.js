const { uppg10 } = require('../uppg10.js');

describe('uppg10', () => {
  test('ska returnera rätt arrayer för testarrayen', () => {
    const result = uppg10();
    expect(result.bigEven).toEqual([12, 20]);
    expect(result.smallOdd).toEqual([5, 7, 9]);
    expect(result.other).toEqual([10, 11]);
  });
});
