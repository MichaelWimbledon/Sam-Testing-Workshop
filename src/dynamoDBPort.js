'use-strict';

const databaseManager = require('./dynamoDBConnector');

module.exports.saveItem  = async item => {
    const params = {
        TableName: "GreeterTable",
        Item: item
    };

    return await databaseManager.saveItem(params);
}

module.exports.getItem  = async name => {
    const params = {
        Key: {
            name: name
        },
        TableName: "GreeterTable"
    };

    return await databaseManager.getItem(params);
}