'use strict';

const Promise     = require('bluebird');
const config      = require('config');
const _           = require('lodash/fp');
const request     = require('superagent');
const mysqlClient = require('../../../clients/mysql');


beforeAll(async () => {
});

beforeEach(async () => {
    await mysqlClient.cleanDb();
});

afterEach(async () => {
});

afterAll(async () => {
});


test('valid arguments - should save save in mysql & send email', async () => {
    await request.post(`${config.services.dailyQuoteApi.url}/send`)
        .send({
            to: 'RamiM'
        });

    await Promise.delay(200);

    const allDailyQuotes = await mysqlClient.getAllDailyQuotes();
    expect(allDailyQuotes.length).toBe(1);
});
