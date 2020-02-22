import {
  ComplexService,
  WireParams,
  GlobalWireParams
} from './complex.service';
import { Instruction } from './instruction-defs';

describe('complex', () => {
  const complex = new ComplexService();
  describe('cutWire', () => {
    // TODO: write test class
    const testCutWire = (testCase: {
      wireParams: WireParams;
      globalParams?: GlobalWireParams;
      expected: boolean;
    }) => {
      expect(
        complex.cutWire(
          testCase.wireParams,
          testCase.globalParams || {
            hasParallelPort: false,
            lastDigitIsEven: false,
            multiBatteries: false
          }
        )
      ).toEqual(testCase.expected);
    };
  });
  describe('getInstruction', () => {
    const testGetInstruction = (testCase: {
      wireParams: WireParams;
      expected: Instruction;
    }) => {
      expect((complex as any).getInstruction(testCase.wireParams)).toEqual(
        testCase.expected
      );
    };

    it('returns D if all are true', () => {
      testGetInstruction({
        wireParams: {
          LEDIsOn: true,
          hasStar: true,
          wireHasBlue: true,
          wireHasRed: true
        },
        expected: Instruction.D
      });
    });
    it('returns C if all are false', () => {
      testGetInstruction({
        wireParams: {
          LEDIsOn: false,
          hasStar: false,
          wireHasBlue: false,
          wireHasRed: false
        },
        expected: Instruction.C
      });
    });
    it('returns c if red and star are true', () => {
      testGetInstruction({
        wireParams: {
          LEDIsOn: false,
          hasStar: true,
          wireHasBlue: false,
          wireHasRed: true
        },
        expected: Instruction.C
      });
    });
    it('retuns S if red and blue are true', () => {
      testGetInstruction({
        wireParams: {
          LEDIsOn: false,
          hasStar: false,
          wireHasBlue: true,
          wireHasRed: true
        },
        expected: Instruction.S
      });
    });
    it('returns B if red, blue and LED is true', () => {
      testGetInstruction({
        wireParams: {
          LEDIsOn: true,
          hasStar: false,
          wireHasBlue: true,
          wireHasRed: true
        },
        expected: Instruction.S
      });
    });
  });
});
