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
    });
  });

  describe('four wires', () => {
    test('If there is more than one red wire and the last digit of the serial number is odd, cut the last red wire.', () => {
      expect(wires.getWireToCut(['red', 'white', 'red', 'red'], true)).toEqual(
        4
      );
    });
    test('if the last wire is yellow and there are no red wires, cut the first wire.', () => {
      expect(wires.getWireToCut(['white', 'white', 'white', 'yellow'])).toEqual(
        0
      );
    });
    test('if there is exactly one blue wire, cut the first wire.', () => {
      expect(wires.getWireToCut(['blue', 'white', 'yellow', 'black'])).toEqual(
        0
      );
    });
  });
});
