import { WiresService } from './wires.service';

describe('wires', () => {
  const wires = new WiresService();
  it('If there are no red wires, cut the second wire.', () => {
    expect(wires.getWireToCut(['blue', 'white', 'yellow'])).toEqual(2);
  });
});
