import { filterMap } from './filterMap';

describe('filterMap', () => {
  it('should correctly apply filter and map functions', () => {
    const input = [1, 2, undefined, 3, null, 4];
    const result = filterMap(
      input,
      (x) => x % 2 === 0,
      (x) => x * 2,
    );
    expect(result).toEqual([4, 8]);
  });

  it('should exclude undefined and null values', () => {
    const input = [1, undefined, 2, null, 3];
    const result = filterMap(
      input,
      (x) => x > 1,
      (x) => x * 2,
    );
    expect(result).toEqual([4, 6]);
  });

  it('should handle an empty array', () => {
    const input: Array<number | undefined | null> = [];
    const result = filterMap(
      input,
      (x) => x > 0,
      (x) => x * 2,
    );
    expect(result).toEqual([]);
  });

  it('should apply map function that returns undefined correctly', () => {
    const input = [1, 2, 3, 4];
    const result = filterMap(
      input,
      (x) => x % 2 !== 0,
      (x) => (x > 2 ? undefined : x),
    );
    expect(result).toEqual([1]);
  });

  it('should process all elements if filter function is not provided', () => {
    const input = [1, 2, 3, 4];
    const result = filterMap(input, undefined, (x) => x * 2);
    expect(result).toEqual([2, 4, 6, 8]);
  });
});
