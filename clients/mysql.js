'use strict';
const mysql   = require('mysql');
const config  = require('config');
const Promise = require('bluebird');


exports.cleanDb = async () => {
    const connection = mysql.createConnection(config.mysql);

    connection.connect();
    Promise.promisifyAll(connection);
    await connection.queryAsync('TRUNCATE TABLE daily_quote');
    connection.end();
};