'use strict';

const greet = module.exports = {};

//learned about typoof here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
greet.message = (name) => {
    if(typeof name === 'string') {
        return `Hello ${name}`;
    } else return null;
};

// 
