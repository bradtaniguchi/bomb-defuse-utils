import { Injectable } from '@angular/core';

export enum SimonSaysColors {
  RED = 'r',
  GREEN = 'g',
  BLUE = 'b',
  YELLOW = 'y'
}

export interface SimonSaysParams {
  serialHasVowel: boolean;
  strikes: number;
  colors: SimonSaysColors[];
}
@Injectable({
  providedIn: 'root'
})
export class SimonSaysService {
  private colors = Object.values(SimonSaysColors);

  /**
   * Returns the colors from the string, dis-regards
   * invalid input strings
   */
  public getColors(str: string): SimonSaysColors[] {
    return str
      ? str.split('').reduce((arr, char) => {
          char = char.toLowerCase();
          if (!char || !this.colors.includes(char as any)) {
            return arr;
          }
          arr.push(char as SimonSaysColors);
          return arr;
        }, [])
      : [];
  }

  private getColor(
    params: Pick<SimonSaysParams, 'serialHasVowel' | 'strikes'> & {
      color: SimonSaysColors;
    }
  ): SimonSaysColors {
    const { serialHasVowel, color, strikes } = params;
    if (serialHasVowel) {
      switch (strikes) {
        case 0:
          return {
            [SimonSaysColors.RED]: SimonSaysColors.BLUE,
            [SimonSaysColors.BLUE]: SimonSaysColors.RED,
            [SimonSaysColors.GREEN]: SimonSaysColors.YELLOW,
            [SimonSaysColors.YELLOW]: SimonSaysColors.GREEN
          }[color];
        case 1:
          return {
            [SimonSaysColors.RED]: SimonSaysColors.YELLOW,
            [SimonSaysColors.BLUE]: SimonSaysColors.GREEN,
            [SimonSaysColors.GREEN]: SimonSaysColors.BLUE,
            [SimonSaysColors.YELLOW]: SimonSaysColors.RED
          }[color];
        case 2:
          return {
            [SimonSaysColors.RED]: SimonSaysColors.GREEN,
            [SimonSaysColors.BLUE]: SimonSaysColors.RED,
            [SimonSaysColors.GREEN]: SimonSaysColors.YELLOW,
            [SimonSaysColors.YELLOW]: SimonSaysColors.BLUE
          }[color];
      }
    } else {
      switch (strikes) {
        case 0:
          return {
            [SimonSaysColors.RED]: SimonSaysColors.BLUE,
            [SimonSaysColors.BLUE]: SimonSaysColors.YELLOW,
            [SimonSaysColors.GREEN]: SimonSaysColors.GREEN,
            [SimonSaysColors.YELLOW]: SimonSaysColors.RED
          }[color];
        case 1:
          return {
            [SimonSaysColors.RED]: SimonSaysColors.RED,
            [SimonSaysColors.BLUE]: SimonSaysColors.BLUE,
            [SimonSaysColors.GREEN]: SimonSaysColors.YELLOW,
            [SimonSaysColors.YELLOW]: SimonSaysColors.GREEN
          }[color];
        case 2:
          return {
            [SimonSaysColors.RED]: SimonSaysColors.YELLOW,
            [SimonSaysColors.BLUE]: SimonSaysColors.GREEN,
            [SimonSaysColors.GREEN]: SimonSaysColors.BLUE,
            [SimonSaysColors.YELLOW]: SimonSaysColors.RED
          }[color];
      }
    }
  }
  /**
   * Returns the pattern for the defuser to input
   */
  public getPattern(params: SimonSaysParams): string {
    const { colors } = params;
    return colors.reduce(
      (acc, color) =>
        acc +
        this.getColor({
          color,
          ...params
        }),
      ''
    );
  }
}
