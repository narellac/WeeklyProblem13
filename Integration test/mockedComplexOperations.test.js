import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';

describe('complexOperation - Unit Tests', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
});

  describe('checkEmail', () => {
    it('First test for checkEmail', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.checkEmail(10)).toBe('The email should be an string');
    });
    it('Second test for checkEmail', () => {
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
      expect(complexOperations.checkEmail('Narella')).toBe('The email is invalid');
    });
    it('Third test for checkEmail', () => {
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
      expect(complexOperations.checkEmail('narellacalvente@gmail.com')).toBe('The email is valid');
    });
  });

  describe('calculateArea', () => {
    it('First test for calculateArea', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(false);
      expect(complexOperations.calculateArea('hexagon')).toBe(`${'hexagon'} is not supported`);
    });
    it('Second test for calculateArea', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('square', 'five', 'ten')).toBe('number1 and number2 should be numbers');
    });
    it('Third test for calculateArea', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'multip').mockReturnValue(25);
      expect(complexOperations.calculateArea('square', 5, 5)).toBe(25);
    });
    it('Four test for calculateArea', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'multip').mockReturnValue(50);
      expect(complexOperations.calculateArea('rectangle', 5, 10)).toBe(50);
    });
    it('Five test for calculateArea', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'division').mockReturnValue(16);
      expect(complexOperations.calculateArea('triangle', 4, 8)).toBe(16);
    });
    it('Six test for calculateArea', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'exponent').mockReturnValue(100);
      expect(complexOperations.calculateArea('circle', 10)).toBe(Math.PI * 100);
    });
  });

  describe('sumGratherThan', () => {
    it('First test for sumGratherThan', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan('five', 'six', 'seven')).toBe('The params should be numbers');
    });
    it('Second test for sumGratherThan', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sum').mockReturnValue(9);
      expect(complexOperations.sumGratherThan(4, 5, 6)).toBe(`${9} is grather than ${6}`);
    });
    it('Third test for sumGratherThan', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sum').mockReturnValue(4);
      expect(complexOperations.sumGratherThan(2, 2, 6)).toBe(`${4} is less than ${6}`);
    });
  });

  describe('intersectionBetweenArrays', () => {
    it('First test for intersectionBetweenArrays', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.intersectionBetweenArrays('hello', 5)).toBe('The params should be arrays');
    });
    it('Second test for intersectionBetweenArrays', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      expect(complexOperations.intersectionBetweenArrays(['apple', 'banana', 'orange'], ['one', 'two', 'three'])).toBe('There are not matching elements');
    });
    it('Third test for intersectionBetweenArrays', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue('apple');
      expect(complexOperations.intersectionBetweenArrays(['apple', 'banana', 'orange'], ['one', 'apple', 'three'])).toEqual('apple');
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('First test for sortArrayOfObjectsByKey', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey('hello')).toBe('The first param should be an array');
    });
    it('Second test for sortArrayOfObjectsByKey', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey([5, 6])).toBe('The second param should be an string');
    });
    it('Third test for sortArrayOfObjectsByKey', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(false)
      expect(complexOperations.sortArrayOfObjectsByKey([{position: 'One'}, {position:'Two'}, {place: 'Three'}], 'position')).toEqual('Some elements in the array does not have the position property');
    });
    it('Four test for sortArrayOfObjectsByKey', () => {
      const expectedArray = [{"position": "One"}, {"position": "Three"}, {"position": "Two"}];

      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue(expectedArray);
      expect(complexOperations.sortArrayOfObjectsByKey([], 'position')).toStrictEqual(expectedArray);
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('First test for numberOfOddAndEvenNumbers', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers('hello')).toBe('The param should be an array');
    });
    it('Second test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(['hello', 'world'])).toBe(`The array should have only numbers`);
    });
    it('Third test for numberOfOddAndEvenNumbers', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([5, 7]);
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([2, 4, 6, 8]);
      expect(complexOperations.numberOfOddAndEvenNumbers([])).toEqual({"even": 4, "odd": 2});
    });
  });
});