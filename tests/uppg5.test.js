const { uppg5 } = require('../uppg5.js');

describe('uppg5', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should log either "Det första talet är större än det andra" or "Det andra talet är större än det första"', () => {
    uppg5();
    const [logged] = consoleSpy.mock.calls[0];
    expect([
      "Det första talet är större än det andra",
      "Det andra talet är större än det första"
    ]).toContain(logged);
  });
});