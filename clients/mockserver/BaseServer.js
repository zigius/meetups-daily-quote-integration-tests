'use strict';

const config  = require('config');
const request = require('superagent');

class BaseServer {
    constructor(options) {
        this.options = options;
    }

    async cleanAllRecordedRequests() {
        await request
            .get(`${config.mockserver.host}:${config.mockserver.managePort}/api/request/reset`);
    }

    async getAllRequests() {
        return await request
            .get(`${config.mockserver.host}:${config.mockserver.managePort}/api/request/all`);
    }

    async addRoute(route, responseData) {
        try {
            const res = await request
                .post(`${config.mockserver.host}:${config.mockserver.managePort}/api/mapping/${route}`)
                .send(responseData);
            console.log(res.body);
        } catch (error) {
            console.log(error);
        }
    }

    async updateRoute(route, responseData) {
        return await request
            .put(`${config.mockserver.host}:${config.mockserver.managePort}/api/mapping/${route}`)
            .send(responseData);
    }

    async deleteRoute(route) {
        return await request
            .delete(`${config.mockserver.host}:${config.mockserver.managePort}/api/mapping/${route}`);
    }

    async deleteAllRoutes() {
        return Promise.resolve();
    }

    async silentRun(func) {
        try {
            await func();
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = BaseServer;
