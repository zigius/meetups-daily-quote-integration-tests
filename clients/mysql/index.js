'use strict';
const index   = require('mysql');
const config  = require('config');
const Promise = require('bluebird');


exports.reset = async () => {
    const connection = index.createConnection(config.mysql);

    connection.connect();
    Promise.promisifyAll(connection);
    await connection.queryAsync('TRUNCATE TABLE daily_quote');
    connection.end();
};

exports.getAllDailyQuotes = async () => {
    const connection = index.createConnection(config.mysql);

    connection.connect();
    Promise.promisifyAll(connection);
    const data = await connection.queryAsync('select * from daily_quote');
    connection.end();

    return data;
};