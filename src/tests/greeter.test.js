'use strict';

const greeter = require('../greeter');


describe('sayHello', () => {
    test('Undefined name greet', () => {
        const greet = greeter.sayHello();
        expect(greet).toBe('Hello World!');
    })

    test('Undefined name greet', () => {
        const greet = greeter.sayHello("Michael");
        expect(greet).toBe('Hello Michael!');
    })
});