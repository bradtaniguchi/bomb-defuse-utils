import { Injectable } from '@angular/core';
import { WireColor } from '../../models/wire';

@Injectable({
  providedIn: 'root'
})
export class WiresService {
  constructor() {}

  /**
   * Returns if we need to ask for the oddSerial, based upon the current wires.
   */
  public needIsSerialOdd(wires: WireColor[]): boolean {
    switch (wires.length) {
      case 3:
        return false;
      case 4:
        // If there is more than one red wire and the last digit of the serial number is odd, cut the last red wire.
        return wires.filter(wire => wire === 'red').length > 1;
      case 5:
        // If the last wire is black and the last digit of the serial number is odd, cut the fourth wire.
        return wires[wires.length - 1] === 'black';
      case 6:
        // If there are no yellow wires and the last digit of the serial number is odd, cut the third wire.
        return wires.filter(wire => wire === 'yellow').length === 0;
      default:
        return false;
    }
  }

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
    const isLastWhite = wires[wires.length - 1] === 'white';
    if (isLastWhite) {
      return last;
    }
    const multiBlue = wires.filter(wire => wire === 'blue').length > 1;
    if (multiBlue) {
      const lastBlueIndex = wires.reverse().findIndex(wire => wire === 'blue');
      return wires.length - lastBlueIndex;
    }
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
      const lastRedIndex = wires.reverse().findIndex(wire => wire === 'red');
      return wires.length - lastRedIndex;
    }
    const noRedWires = redWires.length === 0;
    const lastIsYellow = wires[wires.length - 1] === 'yellow';
    if (lastIsYellow && noRedWires) {
      return 1;
    }
    const isSingleBlue = wires.filter(wire => wire === 'blue').length === 1;
    if (isSingleBlue) {
      return 1;
    }
    const moreThanOneYellow =
      wires.filter(wire => wire === 'yellow').length > 1;
    if (moreThanOneYellow) {
      return 4;
    }
    return 2;
  }

  /**
   *
   * If the last wire is black and the last digit of the serial number is odd, cut the fourth wire.
   * Otherwise, if there is exactly one red wire and there is more than one yellow wire, cut the first wire.
   * Otherwise, if there are no black wires, cut the second wire.
   * Otherwise, cut the first wire.
   */
  private getWireToCutOfFive(
    wires: WireColor[],
    isSerialOdd?: boolean
  ): number {
    const lastIsBlack = wires[wires.length - 1] === 'black';
    if (lastIsBlack && isSerialOdd) {
      return 4;
    }
    const isOneRed = wires.filter(wire => wire === 'red').length === 1;
    const multiYellow = wires.filter(wire => wire === 'yellow').length > 1;
    if (isOneRed && multiYellow) {
      return 1;
    }
    const noBlack = !!wires.find(wire => wire === 'black');
    if (!noBlack) {
      return 2;
    }
    return 1;
  }

  /**
   *
   * If there are no yellow wires and the last digit of the serial number is odd, cut the third wire.
   * Otherwise, if there is exactly one yellow wire and there is more than one white wire, cut the fourth wire.
   * Otherwise, if there are no red wires, cut the last wire.
   * Otherwise, cut the fourth wire.
   */
  private getWireToCutOfSix(wires: WireColor[], isSerialOdd?: boolean): number {
    const noYellow = wires.filter(wire => wire === 'yellow').length === 0;
    if (noYellow && isSerialOdd) {
      return 3;
    }
    const oneYellow = wires.filter(wire => wire === 'yellow').length === 1;
    const multiWhite = wires.filter(wire => wire === 'white').length > 1;
    if (oneYellow && multiWhite) {
      return 4;
    }
    const noRedWires = wires.filter(wire => wire === 'red').length === 0;
    if (noRedWires) {
      return wires.length;
    }
    return 4;
  }
}
