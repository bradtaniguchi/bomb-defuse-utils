import { WiresService } from './wires.service';

describe('wires', () => {
  const wires = new WiresService();
  describe('three wires: ', () => {
    test('If there are no red wires, cut the second wire.', () => {
      expect(wires.getWireToCut(['blue', 'white', 'yellow'])).toEqual(2);
    });

    test('if the last wire is white, cut the last wire', () => {
      expect(wires.getWireToCut(['red', 'blue', 'white'])).toEqual(3);
    });

    test('if there is more than one blue wire, cut the last blue wire', () => {
      expect(wires.getWireToCut(['red', 'blue', 'blue'])).toEqual(3);
      expect(wires.getWireToCut(['blue', 'blue', 'red'])).toEqual(2);
      expect(wires.getWireToCut(['blue', 'red', 'blue'])).toEqual(3);
    });
  });

  describe('four wires', () => {
    test('If there is more than one red wire and the last digit of the serial number is odd, cut the last red wire.', () => {
      expect(wires.getWireToCut(['red', 'white', 'red', 'red'], true)).toEqual(
        4
      );
      expect(wires.getWireToCut(['red', 'white', 'red', 'blue'], true)).toEqual(
        3
      );
      expect(wires.getWireToCut(['red', 'red', 'white', 'blue'], true)).toEqual(
        2
      );
    });
    test('if the last wire is yellow and there are no red wires, cut the first wire.', () => {
      expect(wires.getWireToCut(['white', 'white', 'white', 'yellow'])).toEqual(
        1
      );
    });
    test('if there is exactly one blue wire, cut the first wire.', () => {
      expect(wires.getWireToCut(['blue', 'white', 'yellow', 'black'])).toEqual(
        1
      );
    });
    test('if there is more than one yellow wire, cut the last wire.', () => {
      expect(wires.getWireToCut(['white', 'yellow', 'yellow', 'red'])).toEqual(
        4
      );
    });
    test('by default return 2', () => {
      expect(wires.getWireToCut(['white', 'yellow', 'red', 'red'])).toEqual(2);
    });
  });

  describe('five wires', () => {
    test('If the last wire is black and the last digit of the serial number is odd, cut the fourth wire.', () => {
      expect(
        wires.getWireToCut(['white', 'white', 'white', 'blue', 'black'], true)
      ).toEqual(4);
    });
    test('if there is exactly one red wire and there is more than one yellow wire, cut the first wire.', () => {
      expect(
        wires.getWireToCut(['red', 'yellow', 'yellow', 'white', 'white'])
      ).toEqual(1);
    });
    test('if there are no black wires, cut the second wire.', () => {
      expect(
        wires.getWireToCut(['red', 'yellow', 'white', 'white', 'white'])
      ).toEqual(2);
    });
    test('Otherwise, cut the first wire', () => {
      expect(
        wires.getWireToCut(['red', 'yellow', 'white', 'black', 'white'])
      ).toEqual(1);
    });
  });
});
