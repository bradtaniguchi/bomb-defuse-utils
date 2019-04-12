import { Injectable } from '@angular/core';
import { POSSIBLE_PASSWORDS } from './possible-passwords';

/**
 * A combination is 5 list of values, or nulls. Where each
 * CombinationPosition, is a set of letters for a given position.
 * If a position is null, we **don't** look past it, so it is important
 * to fill out all the positions from left to right, until all possible
 * solutions are checked.
 */
export type Combination = Array<CombinationPosition | null>;
export type CombinationPosition = string[];

@Injectable({
  providedIn: 'root'
})
export class PasswordsService {
  constructor() {}

  /**
   * Returns the list of words that match with the given combinations
   * of letters, starting from the "left" to "right". If the position
   * is a "falsy" value, we assume it could be any values until inputted.
   */
  public getPossiblePasswords(combinations: Combination): string[] {
    return POSSIBLE_PASSWORDS.filter(password =>
      this.isPossiblePassword(password, combinations)
    );
  }

  /**
   * Returns true if there are missing combinations, or
   * all combinations are "empty"
   */
  public isEmpty(combinations: Combination): boolean {
    return (
      !combinations ||
      combinations.every(position => position && position.length === 0)
    );
  }

  private isPossiblePassword(
    password: string,
    combinations: Combination
  ): boolean {
    const passwordChars = password.split('');
    return passwordChars.every((passwordChar, passwordIndex) => {
      if (!combinations[passwordIndex]) {
        // no combinations for this index, return true.
        return true;
      }
      const position = combinations[passwordIndex];
      return position.includes(passwordChar);
    });
  }
}
