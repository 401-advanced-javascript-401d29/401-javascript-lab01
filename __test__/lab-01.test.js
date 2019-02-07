'use strict';

// QUESTIONS TO ASK
// Why is describe and various other jest things angry - starting line 10
// Do I have access to the array from index.js?
// Why does it think I don't have any tests when run 'npm run test' in terminal?
// Test on line 43, will that work as I think? If not how to fix.
// Have I met the lab requirements?

// DEPENDENCIES
const greet = require('../greet');
const faker = require('faker');
const arithmetic = require('../arithmetic');

// PREVENT DIVISION BY ZERO
let noZero = () => {
    let randomNum = faker.random.number();
    if(randomNum === 0) {
        return randomNum + 1;
    } else return randomNum;
};

// ARRAY
let array = [faker.random.number(), noZero()];

// TESTS
describe('#lab-01.test.js', () => {
    
    // GREET MODULE
    test('Should return null if value is not a string', () => {
        const greetMessage = greet.message(faker.random.number());
        expect(greetMessage).toBeNull();
    });
    test('Should return Hello amazing TA\'s!', () => {
        const greetMessage = greet.message('amazing TA\'s!');
        expect(greetMessage).toEqual('Hello amazing TA\'s!');
    });
    
    // ARITHMETIC MODULE
    // MODIFIED FROM H'LIANA'S CODE
    test('Test should add numbers from an array', () => {
        const sum = arithmetic.add(array);
        expect(sum).toEqual(array[0] + array[1]);
    });
    test('Test should subtract numbers from an array', () => {
        const difference = arithmetic.subtract(array);
        expect(difference).toEqual(array[0] + array[1]);
    });
    test('Test should multiply numbers from an array', () => {
        const product = arithmetic.multiply(array);
        expect(product).toEqual(array[0] + array[1]);
    });
    test('Test should divide numbers from an array', () => {
        const quotient = arithmetic.divide(array);
        expect(quotient).toEqual(array[0] + array[1]);
    });
    test('The array should contain only integers', () => {
        // expect(array).toContain(expect.not.stringContaining());
        expect(typeof array).toContain('number'); //NOT SURE IF THIS WILL WORK
    });
});
