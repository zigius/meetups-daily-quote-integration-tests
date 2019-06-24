'use strict';

const request = require('superagent');
const config  = require('config');

exports.getRecordedEmails = () => {
    return request.get(`${config.smtp.host}:${config.smtp.managePort}/api/emails`);
};

exports.clearRecordedEmails = () => {
    return request.delete(`${config.smtp.host}:${config.smtp.managePort}/api/emails`);
};
