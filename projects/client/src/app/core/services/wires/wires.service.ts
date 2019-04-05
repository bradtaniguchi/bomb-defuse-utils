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
   * THIS IS NOT THE INDEX!
   */
  public getWireToCut(
    wires: WireColor[],
    isSerialOdd?: boolean
  ): number | null {
    switch (wires.length) {
      case 3:
        return this.getWireToCutOfThree(wires);
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
  private getWireToCutOfThree(wires: WireColor[]): number {
    const noRedWires = !wires.includes('red');
    const last = wires.length;
    if (noRedWires) {
      return 2;
    }
    // logically we can just cut the last one..
    return last;
  }

  /**
   *
   * If there is more than one red wire and the last digit of the serial number is odd, cut the last red wire.
   * Otherwise, if the last wire is yellow and there are no red wires, cut the first wire.
   * Otherwise, if there is exactly one blue wire, cut the first wire.
   * Otherwise, if there is more than one yellow wire, cut the last wire.
   * Otherwise, cut the second wire.
   */
  private getWireToCutOfFour(
    wires: WireColor[],
    isSerialOdd?: boolean
  ): number {
    const redWires = wires.filter(wire => wire === 'red');
    const multiRedWires = redWires.length > 1;
    if (multiRedWires && isSerialOdd) {
      return wires.length;
    }
    const noRedWires = redWires.length === 0;
    const lastIsYellow = wires[wires.length - 1] === 'yellow';
    if (lastIsYellow && noRedWires) {
      return 0;
    }
    // TODO
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
