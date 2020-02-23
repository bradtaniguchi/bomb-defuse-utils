import { MemoryService } from './memory.service';

describe('MemoryService', () => {
  const service = new MemoryService();
  describe('getPrompts', () => {
    const prompt1 = [
      {
        msg: 'If the display is 1, press the button in the second position.'
      },
      {
        msg: 'If the display is 2, press the button in the second position.'
      },
      { msg: 'If the display is 3, press the button in the third position.' },
      { msg: 'If the display is 4, press the button in the fourth position.' }
    ];
    test('returns starting prompts when given no actions', () =>
      expect(service.getPrompts([])).toEqual([{ prompts: prompt1 }]));
    test('returns stage 1 prompts', () =>
      expect(
        service.getPrompts([
          {
            label: 5,
            position: 1
          }
        ])
      ).toEqual([
        { prompts: prompt1 },
        {
          prompts: [
            { msg: 'If the display is 1, press the button labeled "4".' },
            {
              msg: `If the display is 2, press the button in the same position as you pressed in stage 1. (1)`,
              answer: 1
            },
            {
              msg:
                'If the display is 3, press the button in the first position.'
            },
            {
              msg: `If the display is 4, press the button in the same position as you pressed in stage 1. (1)`,
              answer: 1
            }
          ]
        }
      ]));
    test.todo('returns stage 2 prompts');
    test.todo('returns stage 3 prompts');
    test.todo('returns stage 4 prompts');
  });
});
