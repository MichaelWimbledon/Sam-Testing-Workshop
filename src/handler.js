'use strict';

const greeter = require('./greeter');

module.exports.hello = async event => {
    const name = event.queryStringParameter && event. queryStringParameter.name;
    const greet = greeter.sayHello(name);

    return {
        statusCode: 200,
        body: greet
    }
}

module.exports.hola = async event => {
    const name = event.queryStringParameter && event. queryStringParameter.name;
    const greet = greeter.sayHelloAndRecord(name);

    return {
        statusCode: 200,
        body: greet
    }
}

module.exports.wasGreeted = async event => {
    const name =
        event.queryStringParameters && event.queryStringParameterts.name;

    const result = await greeter.wasGreeted(name);

    if(result == true) {
        return {
            statusCode: 200,
            body: 'Greet found'
        };
    } else {
        return {
            statusCode: 404,
            body: 'Greet not found'
        };
    };
};