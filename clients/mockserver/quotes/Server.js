'use strict';

const config  = require('config');
const request = require('superagent');


class Server extends require('../BaseServer') {
    constructor(options) {
        super(options);
    }

    get routes() {
        return {
            GetQod   : 'Qod.json',
        };
    }

    async addQodRoute(mockDefinition) {
        await this.addRoute(this.routes.GetQod, mockDefinition)
    }
    async updateQodRoute(mockDefinition) {
        await this.updateRoute(this.routes.GetQod, mockDefinition)
    }
    async deleteQodRoute() {
        await this.deleteRoute(this.routes.GetQod)
    }


    async deleteAllRoutes() {
        return await Promise.all([
            this.silentRun(this.deleteQodRoute.bind(this)),
        ]);
    }
}

module.exports = Server;
