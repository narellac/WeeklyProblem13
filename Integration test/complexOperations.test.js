import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('first test for checkEmail', () => {
      expect(complexOperations.checkEmail(10)).toBe('The email should be an string');
    });
    it('Second test for checkEmail', () => {
      expect(complexOperations.checkEmail('Narella')).toBe('The email is invalid');
    });
    it('Third test for checkEmail', () => {
      expect(complexOperations.checkEmail('narellacalvente@gmail.com')).toBe('The email is valid');
    });
  });

  describe('calculateArea', () => {
    it('first test for calculateArea', () => {

    });
  });

  describe('sumGratherThan', () => {
    it('first test for sumGratherThan', () => {

    });
  });

  describe('intersectionBetweenArrays', () => {
    it('first test for intersectionBetweenArrays', () => {

    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('first test for sortArrayOfObjectsByKey', () => {

    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers', () => {
    });
  });
});