import { Injectable } from '@angular/core';

/**
 * A memory action is an action that was made by the bomb defuser.
 * To finish the gae the defuser must make and thus disarm
 * 5 steps.
 */
export interface MemoryAction {
  /**
   * A number from 1-4
   */
  position: number;
  /**
   * The number that was shown on the button
   * that was clicked.
   */
  label: number;
}
/**
 * A memory prompt is what is shown for each stage.
 * The memory game only has 5 stages.
 */
export interface MemoryPrompt {
  /**
   * The 4 prompts from start to finish for this step
   */
  prompts: {
    msg: string;
    /**
     * The number or position to show
     */
    answer?: number;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class MemoryService {
  /**
   * Returns the list of prompt, based upon the users previous
   * choices, with auto-filled answers depending on the previous choices.
   */
  public getPrompts(previousActions?: MemoryAction[]): MemoryPrompt[] {
    if (!previousActions || previousActions.length === 0) {
      return [this.getStage1Prompt()];
    }
    switch (previousActions.length) {
      // **note** this could be done more concise but meh
      case 1:
        return [this.getStage1Prompt(), this.getStage2Prompt(previousActions)];
      case 2:
        return [
          this.getStage1Prompt(),
          this.getStage2Prompt(previousActions),
          this.getStage3Prompt(previousActions)
        ];
      case 3:
        return [
          this.getStage1Prompt(),
          this.getStage2Prompt(previousActions),
          this.getStage3Prompt(previousActions),
          this.getStage4Prompt(previousActions)
        ];
      case 4:
        return [
          this.getStage1Prompt(),
          this.getStage2Prompt(previousActions),
          this.getStage3Prompt(previousActions),
          this.getStage4Prompt(previousActions),
          this.getStage5Prompt(previousActions)
        ];
      default:
        return [];
    }
  }

  private getStage1Prompt(): MemoryPrompt {
    return {
      prompts: [
        {
          msg: 'If the display is 1, press the button in the second position.'
        },
        {
          msg: 'If the display is 2, press the button in the second position.'
        },
        { msg: 'If the display is 3, press the button in the third position.' },
        { msg: 'If the display is 4, press the button in the fourth position.' }
      ]
    };
  }

  private getStage2Prompt(previousActions: MemoryAction[]): MemoryPrompt {
    return {
      prompts: [
        { msg: 'If the display is 1, press the button labeled "4".' },
        {
          msg: `If the display is 2, press the button in the same position as you pressed in stage 1. (${previousActions[0].position})`,
          answer: previousActions[0].position
        },
        { msg: 'If the display is 3, press the button in the first position.' },
        {
          msg: `If the display is 4, press the button in the same position as you pressed in stage 1. (${previousActions[0].position})`,
          answer: previousActions[0].position
        }
      ]
    };
  }

  private getStage3Prompt(previousActions: MemoryAction[]): MemoryPrompt {
    return {
      prompts: [
        {
          msg: `If the display is 1, press the button with the same label you pressed in stage 2. (${previousActions[1].label})`,
          answer: previousActions[1].label
        },
        {
          msg: `If the display is 2, press the button with the same label you pressed in stage 1. (${previousActions[0].label})`,
          answer: previousActions[0].label
        },
        { msg: 'If the display is 3, press the button in the third position.' },
        { msg: 'If the display is 4, press the button labeled "4".' }
      ]
    };
  }

  private getStage4Prompt(previousActions: MemoryAction[]): MemoryPrompt {
    return {
      prompts: [
        {
          msg: `If the display is 1, press the button in the same position as you pressed in stage 1.(${previousActions[0].position})`,
          answer: previousActions[0].position
        },
        { msg: 'If the display is 2, press the button in the first position.' },
        {
          msg: `If the display is 3, press the button in the same position as you pressed in stage 2. (${previousActions[1].position})`,
          answer: previousActions[1].position
        },
        {
          msg: `If the display is 4, press the button in the same position as you pressed in stage 2. (${previousActions[1].position})`,
          answer: previousActions[1].position
        }
      ]
    };
  }

  private getStage5Prompt(previousActions: MemoryAction[]): MemoryPrompt {
    return {
      prompts: [
        {
          msg: `If the display is 1, press the button with the same label you pressed in stage 1. (${previousActions[0].label})`,
          answer: previousActions[0].label
        },
        {
          msg: `If the display is 2, press the button with the same label you pressed in stage 2. (${previousActions[1].label})`,
          answer: previousActions[1].label
        },
        {
          msg: `If the display is 3, press the button with the same label you pressed in stage 4. (${previousActions[3].label})`,
          answer: previousActions[3].label
        },
        {
          msg: `If the display is 4, press the button with the same label you pressed in stage 3. (${previousActions[2].label})`,
          answer: previousActions[2].label
        }
      ]
    };
  }
}
