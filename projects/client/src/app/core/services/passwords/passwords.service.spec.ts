import { PasswordsService, Combination } from './passwords.service';
import { POSSIBLE_PASSWORDS } from './possible-passwords';

describe('passwords', () => {
  const passwords = new PasswordsService();
  test('returns passwords after first positions provided', () => {
    expect(
      passwords.getPossiblePasswords([
        // first letter matches "a"s only
        ['a', 'z', 'y', 'v', 'x']
      ])
    ).toEqual(['about', 'after', 'again']);
  });
  test('returns passwords after first and second positions provided', () => {
    expect(
      passwords.getPossiblePasswords([
        ['a', 'z', 'y', 'v', 'x'],
        ['a', 'b', 'c', 'd', 'g']
      ])
    ).toEqual(['about', 'again']);
  });
  test('returns if first position is blank', () => {
    expect(
      passwords.getPossiblePasswords([undefined, ['a', 'b', 'c', 'd', 'g']])
    ).toEqual(['about', 'again', 'large', 'water']);
  });
  test('returns all passwords without any positions provided', () => {
    expect(passwords.getPossiblePasswords([])).toEqual(POSSIBLE_PASSWORDS);
  });
  test('returns no passwords if invalid first position provided', () => {
    expect(passwords.getPossiblePasswords([['z', 'z', 'z', 'z', 'z']])).toEqual(
      []
    );
  });

  describe('isPossiblePassword', () => {
    const testIsPossiblePassword = (testCase: {
      password: string;
      combinations: Combination;
      expected: boolean;
    }) => {
      expect(
        (passwords as any).isPossiblePassword(
          testCase.password,
          testCase.combinations
        )
      ).toEqual(testCase.expected);
    };
    test('returns true if password matches first position', () => {
      testIsPossiblePassword({
        password: 'large',
        combinations: [['l', 'z', 'z', 'z', 'z']],
        expected: true
      });
    });
    test('returns false if password does not match first position', () => {
      testIsPossiblePassword({
        password: 'large',
        combinations: [['a', 'z', 'z', 'z', 'z']],
        expected: false
      });
    });
    test('returns true if password matches multiple positions', () => {
      testIsPossiblePassword({
        password: 'large',
        combinations: [['l', 'z', 'z', 'z', 'z'], ['a', 'z', 'z', 'z', 'b']],
        expected: true
      });
    });
    test('returns false if password does not match all positions', () => {
      testIsPossiblePassword({
        password: 'large',
        combinations: [['l', 'z', 'z', 'z', 'z'], ['b', 'z', 'z', 'z', 'b']],
        expected: false
      });
    });
  });
});
