const { uppg9 } = require('../uppg9.js');
const fs = require('fs');
const path = require('path');

describe('uppg9', () => {
  let consoleSpy;
  let uppg9Source;

  beforeAll(() => {
    // Read the source file as a string to later check for the if-statement
    uppg9Source = fs.readFileSync(path.join(__dirname, '../uppg9.js'), 'utf8');
  });

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('logs messages indicating if each number is even or odd', () => {
    uppg9();
    expect(consoleSpy.mock.calls.length).toBeGreaterThan(0);
  
    consoleSpy.mock.calls.forEach(call => {
      // Destructure both arguments: the number and its label
      const [num, label] = call;
      expect(typeof num).toBe('number');
      expect(typeof label).toBe('string');
      expect(/(jämt|udda)/.test(label)).toBe(true);
    });
  });

  test('source code contains an if-statement to check for even numbers', () => {
    // Check that there is an if-statement checking "arr[i] % 2 === 0"
    expect(uppg9Source).toMatch(/if\s*\(.*%.*2\s*===\s*0\)/);
  });

  test('source code contains an else clause', () => {
    // Check that there is an else clause present in the code
    expect(uppg9Source).toMatch(/else\s*{/);
  });
});
