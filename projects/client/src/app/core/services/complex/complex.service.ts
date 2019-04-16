import { Injectable } from '@angular/core';
import { logger } from '../../logger';
import { INSTRUCTION_DEFS, Instruction } from './instruction-defs';

/**
 * These params are shared between most methods in this service.
 */
export interface WireParams {
  wireHasRed: boolean;
  wireHasBlue: boolean;
  hasStar: boolean;
  LEDIsOn: boolean;
}

export interface GlobalWireParams {
  lastDigitIsEven: boolean;
  hasParallelPort: boolean;
  multiBatteries: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ComplexService {
  constructor() {}

  /**
   * Utlity function that returns if you are to cut the wire.
   * This challenge requires a lot of "extra" input for each case.
   * Luckily, most of the cases **aren't** wire specific, so most of
   * these arguments dont' need to change between "each" wire.
   * @param params general params
   */
  public cutWire(
    wireParams: WireParams,
    globalParams: GlobalWireParams
  ): boolean {
    const instruction = this.getInstruction(wireParams);
    const { hasParallelPort, lastDigitIsEven, multiBatteries } = globalParams;
    logger.log('determined instruction: ', instruction);
    switch (instruction) {
      case Instruction.C:
        return true;
      case Instruction.D:
        return false;
      case Instruction.S:
        return lastDigitIsEven;
      case Instruction.P:
        return hasParallelPort;
      case Instruction.B:
        return multiBatteries;
      default:
        logger.warn('Unknowing instruction given:', instruction);
        throw new Error();
    }
  }

  private isTrueOrFalse(param: any) {
    return param === true || param === false;
  }
  /**
   * Returns if the wireParams are "valid", in that all wireParams
   * are set to true or false.
   * @param wireParams the wire params to check
   */
  public isWireParams(wireParams: WireParams): boolean {
    return (
      this.isTrueOrFalse(wireParams.LEDIsOn) &&
      this.isTrueOrFalse(wireParams.hasStar) &&
      this.isTrueOrFalse(wireParams.wireHasBlue) &&
      this.isTrueOrFalse(wireParams.wireHasRed)
    );
  }

  public isGlobalWireParams(globalParams: GlobalWireParams): boolean {
    return (
      this.isTrueOrFalse(globalParams.hasParallelPort) &&
      this.isTrueOrFalse(globalParams.lastDigitIsEven) &&
      this.isTrueOrFalse(globalParams.multiBatteries)
    );
  }
  /**
   * Returns the instruction for the given params
   * @param wireParams the params to determine the instruction to return
   */
  public getInstruction(wireParams: WireParams): Instruction {
    const { LEDIsOn, hasStar, wireHasBlue, wireHasRed } = wireParams;
    const instruction = INSTRUCTION_DEFS.find(
      def =>
        def.LEDIsOn === LEDIsOn &&
        def.hasStar === hasStar &&
        def.wireHasBlue === wireHasBlue &&
        def.wireHasRed === wireHasRed
    );
    if (!instruction) {
      logger.error('no instruction found for params: ', wireParams);
      throw new Error();
    }
    return instruction.instruction;
  }
}
