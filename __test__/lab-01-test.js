'use strict';

//DEPENDENCIES
const greet = require('./greet');
const faker = require('faker');

describe('#lab-01-test.js', () => {
    //   GREET MODULE
    test('Should return null if value is not a string', () => {
        const greetMessage = greet.message(faker.random.number());
        expect(greetMessage).toBeNull();
    });
    test('Should return Hello amazing TA\'s!', () => {
        const greetMessage = greet.message('amazing TA\'s!');
        expect(greetMessage).toEqual('Hello amazing TA\'s!');
    });
    // ARITHMETIC MODULE
    // FAKE MODULE
});


