
import { Example } from './example';

describe('Example', () => {

  it('should emit numbers when constructed with [true]', () => {

    const example = new Example(true)

    example.valueStream.subscribe(num => {
      expect(num).toEqual(jasmine.any(Number))
    })

    example.isNumber().subscribe(isNum => {
      expect(isNum).toBe(true);
    })

  });

  it('should emit strings when constructed with [false]', () => {

    const example = new Example(false)

    example.valueStream.subscribe(num => {
      expect(num).toEqual(jasmine.any(String))
    })

    example.isNumber().subscribe(isNum => {
      expect(isNum).toBe(false)
    })

  });

});
