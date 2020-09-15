'use-strict'

const dynamoDBPort = require('../dynamoDBPort');
const mockDatabaseConnector = require('../dynamoDBConnector');

describe('getItem', () => {
    test('getexisting item', async () => {
        const item = {
            name: 'Alex',
            timestamp: Date.now()
        };

        mockDatabaseConnector.getItem = jest.fn().mockReturnValue(item);

        const result = await dynamoDBPort.getItem('Alex');

        const paramsToValidate = {
            Key: {
                name: 'Alex'
            },
            TableName: "GreeterTable"
        };

        expect(mockDatabaseConnector.getItem).toBeCalledWith(paramsToValidate);
        expect(result).toBe(item);
    })
})