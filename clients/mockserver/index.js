'use strict';

const config  = require('config');
const request = require('superagent');


exports.reset = async () => {
    await request
        .get(`${config.mockserver.host}:${config.mockserver.managePort}/api/request/reset`);
};

exports.getAllRequests = async () => {
    return await request
        .get(`${config.mockserver.host}:${config.mockserver.managePort}/api/request/all`);
};

exports.addRoute = async (route, responseData) => {
    try {
        const res = await request
            .post(`${config.mockserver.host}:${config.mockserver.managePort}/api/mapping/${route}`)
            .send(responseData);
        console.log(res.body);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteRoute = async (route) => {

    try {
        return await request
            .delete(`${config.mockserver.host}:${config.mockserver.managePort}/api/mapping/${route}`);
    } catch (error) {
        console.log(error);
    }
};


