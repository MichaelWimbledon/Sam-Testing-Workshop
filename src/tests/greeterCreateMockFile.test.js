'use-strict';

const greeter = require('../greeter')
jest.mock('../dynamoDBConnector');

describe('sayHelloAndRecord', () => {
    test('name and save it', async () => {
        const greet = await greeter.sayHelloAndRecord('Stelios');
        expect(greet).toBe('Hello Stelios!');
    })
})

describe('getGreeting', () => {
    test('getGreeting', async () => {
        const result = await greeter.wasGreeted('Seb');
        expect(result).toBe(true);
    });
})