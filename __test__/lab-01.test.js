'use strict';

// QUESTIONS TO ASK
// Why is describe and various other jest things angry - starting line 10
// Test on line 43, will that work as I think? If not how to fix.
// Have I met the lab requirements?

// DEPENDENCIES
const greet = require('../lib/greet');
const faker = require('faker');
const arithmetic = require('../lib/arithmetic');

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
    test('Should return hello world!', () => {
        const greetMessage = greet.message('world');
        expect(greetMessage).toEqual('hello world!');
    });
    
    // ARITHMETIC MODULE
    // MODIFIED FROM H'LIANA'S CODE
    test('Test should add numbers from an array', () => {
        const sum = arithmetic.add(array);
        expect(sum).toEqual(array[0] + array[1]);
    });
    test('Test should subtract numbers from an array', () => {
        const difference = arithmetic.subtract(array);
        expect(difference).toEqual(array[0] - array[1]);
    });
    test('Test should multiply numbers from an array', () => {
        const product = arithmetic.multiply(array);
        expect(product).toEqual(array[0] * array[1]);
    });
    test('Test should divide numbers from an array', () => {
        const quotient = arithmetic.divide(array);
        expect(quotient).toEqual(array[0]/array[1]);
    });
    test('The array should contain only integers', () => {
        let newArray = [];
        for(let i in array) {
            newArray.push(typeof array[i]);
        }
        expect(newArray).toContain('number');
        expect(newArray).not.toContain('string');
    });
});
