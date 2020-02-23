import { SimonSaysService, SimonSaysColors } from './simon-says.service';

describe('SimonSaysService', () => {
  const service = new SimonSaysService();
  describe('getPattern', () => {
    test('returns empty string if no pattern', () =>
      expect(
        service.getPattern({
          colors: [],
          serialHasVowel: false,
          strikes: 0
        })
      ).toEqual(''));
    test('returns no strikes, vowel code', () =>
      expect(
        service.getPattern({
          colors: service.getColors('rbgyygbr'),
          serialHasVowel: true,
          strikes: 0
        })
      ).toEqual(service.getColors('bryggyrb').join('')));
    test('returns 2 strikes, vowel code', () =>
      expect(
        service.getPattern({
          colors: service.getColors('rbgyygbr'),
          serialHasVowel: true,
          strikes: 2
        })
      ).toEqual(service.getColors('grybbyrg').join('')));
    test('returns 1 strike, no vowel code', () =>
      expect(
        service.getPattern({
          colors: service.getColors('rbgyygbr'),
          serialHasVowel: false,
          strikes: 1
        })
      ).toEqual(service.getColors('rbyggybr').join('')));
    test('returns 2 strike, no vowel code', () =>
      expect(
        service.getPattern({
          colors: service.getColors('rbgyygbr'),
          serialHasVowel: false,
          strikes: 2
        })
      ).toEqual(service.getColors('ygbrrbgy').join('')));
  });
});
