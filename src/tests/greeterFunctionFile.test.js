'use-strict'

const greeter = require('../greeter');
const databaseManagerMock = require('../dynamoDBPort');

describe('sayHelloAndRecord', () => {
    test('With a name', () => {
        databaseManagerMock.saveItem = jest.fn();

        return greeter.sayHelloAndRecord('Akash').then(greet => {
            expect(databaseManagerMock.saveItem).toBeCalledTimes(1);
            expect(greet).toBe('Hello Akash!');
        })
    })
})

describe('getGreeting', () => {
    test('get greeting', async () => {
        const item = {
            name: 'Seb',
            timestamp: Date.now()
        };
        databaseManagerMock.getItem = jest.fn().mockReturnValue(item);

        const result = await greeter.wasGreeted('Seb');
        expect(result).toBe(true);
    });

    test('was greeted non existing name', async () => {

        databaseManagerMock.getItem = jest.fn().mockReturnValue(undefined);

        const result = await greeter.wasGreeted('Seb');
        expect(result).toBe(false);
    });
})