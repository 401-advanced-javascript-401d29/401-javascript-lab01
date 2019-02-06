'use strict'

const arithmetic = module.exports = {};
const doMath = require("arithmetic");

arithmetic.numbers = (array) => {
    let sum = (`Sum of the array equals: ${arithmetic.sum(array)}`);
    let difference = (`Difference of the array equals:  ${arithmetic.difference(array)}`);
    let product = (`Product of the array equals: ${arithmetic.product(array)}`);
    let quotient =  (`Quotient of the array equals: ${arithmetic.quotient(array)}`);
    // return numberArray;
};

arithmetic.add = (array) => {
    return doMath.sum(array);
};

arithmetic.subtract = (array) => {
    return doMath.difference(array);
};

arithmetic.multiply = (array) => {
    return doMath.product(array);
};

arithmetic.divide = (array) => {
    return doMath.quotient(array);
};
