import { WireParams } from './complex.service';

export enum Instruction {
  C = 'Cut the Wire',
  D = 'Do not cut the wire',
  S = 'Cut the wire if the last digit of the serial number is even',
  P = 'Cut the wire if the bomb has a parallel port',
  B = 'Cut the wire if the bomb has two or more batteries'
}
export interface InstructionDef extends WireParams {
  instruction: Instruction;
}

export const INSTRUCTION_DEFS: InstructionDef[] = [
  // none are true
  {
    LEDIsOn: false,
    hasStar: false,
    wireHasBlue: false,
    wireHasRed: false,
    instruction: Instruction.C
  },
  // single is true
  {
    LEDIsOn: false,
    hasStar: false,
    wireHasBlue: false,
    wireHasRed: true,
    instruction: Instruction.S
  },
  {
    LEDIsOn: false,
    hasStar: false,
    wireHasBlue: true,
    wireHasRed: false,
    instruction: Instruction.S
  },
  {
    LEDIsOn: false,
    hasStar: true,
    wireHasBlue: false,
    wireHasRed: false,
    instruction: Instruction.C
  },
  {
    LEDIsOn: true,
    hasStar: false,
    wireHasBlue: false,
    wireHasRed: false,
    instruction: Instruction.D
  },
  // two are true
  {
    LEDIsOn: false,
    hasStar: true,
    wireHasBlue: false,
    wireHasRed: true,
    instruction: Instruction.C
  },
  {
    LEDIsOn: false,
    hasStar: false,
    wireHasBlue: true,
    wireHasRed: true,
    instruction: Instruction.S
  },
  {
    LEDIsOn: true,
    hasStar: false,
    wireHasBlue: true,
    wireHasRed: false,
    instruction: Instruction.P
  },
  {
    LEDIsOn: true,
    hasStar: true,
    wireHasBlue: false,
    wireHasRed: false,
    instruction: Instruction.B
  },
  {
    LEDIsOn: false,
    hasStar: true,
    wireHasBlue: true,
    wireHasRed: false,
    instruction: Instruction.D
  },
  {
    LEDIsOn: true,
    hasStar: false,
    wireHasBlue: false,
    wireHasRed: true,
    instruction: Instruction.B
  },
  // three are true
  {
    LEDIsOn: false,
    hasStar: true,
    wireHasBlue: true,
    wireHasRed: true,
    instruction: Instruction.P
  },
  {
    LEDIsOn: true,
    hasStar: false,
    wireHasBlue: true,
    wireHasRed: true,
    instruction: Instruction.S
  },
  {
    LEDIsOn: true,
    hasStar: true,
    wireHasBlue: false,
    wireHasRed: true,
    instruction: Instruction.B
  },
  {
    LEDIsOn: true,
    hasStar: true,
    wireHasBlue: true,
    wireHasRed: false,
    instruction: Instruction.P
  },
  // all are true
  {
    LEDIsOn: true,
    hasStar: true,
    wireHasBlue: true,
    wireHasRed: true,
    instruction: Instruction.D
  }
];
