import 'jest';

let isNumber = jest.fn().mockReturnValue();
let isArray = jest.fn().mockReturnValue();
let isString = jest.fn().mockReturnValue();
let validateEmail = jest.fn().mockReturnValue();
let sum = jest.fn().mockReturnValue();
let multip = jest.fn().mockReturnValue();
let division = jest.fn().mockReturnValue();
let exponent = jest.fn().mockReturnValue();
let isSupportedFigure = jest.fn().mockReturnValue();
let arrayElementsAreObjectWithKey = jest.fn().mockReturnValue();
let arrayIntersection = jest.fn().mockReturnValue();
let sortArrayByKey = jest.fn().mockReturnValue();
let getEvenNumbersFromArray = jest.fn().mockReturnValue();
let isNumber = jest.fn().mockReturnValue();

const funcMock = jest.mock('./basicOperations', () => {
  return {
    isNumber,
    isArray,
    isString,
    validateEmail,
    sum,
    multip,
    division,
    exponent,
    isSupportedFigure,
    arrayElementsAreObjectWithKey,
    arrayIntersection,
    sortArrayByKey,
    getEvenNumbersFromArray,
    getOddNumbersFromArray,
  };
});

export default funcMock;