import { Injectable } from '@angular/core';
import { WireColor } from '../../models/wire';

@Injectable({
  providedIn: 'root'
})
export class WiresService {
  constructor() {}

  /**
   * Returns what wire to cut
   * @param wires the list of wires from top to bottom
   * @param isSerialOdd if the serial is odd, if not given it is assumed
   * its even.
   * @returns the wire to cut, or null if no solution could be found
   */
  public getWireToCut(
    wires: WireColor[],
    isSerialOdd?: boolean
  ): number | null {
    switch (wires.length) {
      case 3:
        return this.getWireToCutOfThree(wires, isSerialOdd);
      case 4:
        return this.getWireToCutOfFour(wires, isSerialOdd);
      case 5:
        return this.getWireToCutOfFive(wires, isSerialOdd);
      case 6:
        return this.getWireToCutOfSix(wires, isSerialOdd);
      default:
        return null;
    }
  }

  /**
   * If there are no red wires, cut the second wire.
   * Otherwise, if the last wire is white, cut the last wire.
   * Otherwise, if there is more than one blue wire, cut the last blue wire.
   * Otherwise, cut the last wire.
   */
  private getWireToCutOfThree(wires, isSerialOdd): number {
    return 0;
  }

  private getWireToCutOfFour(
    wires: WireColor[],
    isSerialOdd?: boolean
  ): number {
    return 0;
  }

  private getWireToCutOfFive(
    wires: WireColor[],
    isSerialOdd?: boolean
  ): number {
    return 0;
  }

  private getWireToCutOfSix(wires: WireColor[], isSerialOdd?: boolean): number {
    return 0;
  }
}
