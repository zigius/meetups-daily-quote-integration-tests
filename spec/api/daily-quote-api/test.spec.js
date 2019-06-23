'use strict';

const Promise     = require('bluebird');
const config      = require('config');
const request     = require('superagent');
const mysqlClient = require('../../../clients/mysql');
const mockserver  = require('../../../clients/mockserver');


beforeEach(async () => {
    await mysqlClient.cleanDb();
});

beforeAll(async () => {
    const httpMockServerReturnData = require('../../../clients/mockserver/quotes/definitions/Qod');
    await mockserver.addRoute('qod.json', httpMockServerReturnData);
});


test('valid arguments - should save save in mysql & send email', async () => {
    await request.post(`${config.services.dailyQuoteApi.url}/send`)
        .send({
            to: 'RamiM'
        });

    await Promise.delay(200);

    const allDailyQuotes = await mysqlClient.getAllDailyQuotes();
    expect(allDailyQuotes.length).toEqual(1);
    expect(allDailyQuotes[0].to).toEqual('RamiM');

    expect(mockserver.getAllRequests()).toEqual([{
        // check
    }]);
});
