/**
 * Copyright (c) 2013-2018 Memba Sarl. All rights reserved.
 * Sources at https://github.com/Memba
 */

/* eslint-disable no-unused-expressions */

const chai = require('chai');
const http = require('http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

let notFound;
try {
    // eslint-disable-next-line global-require, import/no-unresolved, node/no-missing-require
    notFound = require('../../../webapp/middleware/notFound.es6');
} catch (exception) {
    // eslint-disable-next-line global-require, import/no-unresolved, node/no-missing-require
    notFound = require('../../../api/middleware/notFound.es6');
}

class Response {
    constructor() {
        this._send = sinon.spy();
        this._set = sinon.spy();
        this._status = sinon.spy();
    }
    send(options) {
        this._send(options);
        return this; // Support chaining
    }
    set(options) {
        this._set(options);
        return this; // Support chaining
    }
    status(options) {
        this._status(options);
        return this; // Support chaining
    }
}

describe('middleware/notFound', () => {
    it('resource not found (with extension)', () => {
        const req = { originalUrl: 'https://www.memba.com/favicon.ico' };
        const res = new Response();
        const next = sinon.spy();
        notFound.handler(req, res, next);
        expect(res._status).to.have.been.calledWith(404);
        expect(res._set).to.have.been.calledWith({
            'Content-Type': 'text/plain; charset=utf-8'
        });
        expect(res._send).to.have.been.calledWith(http.STATUS_CODES['404']);
        expect(next).not.to.have.been.called;
    });

    it('resource not found (without extension)', () => {
        const req = { originalUrl: 'https://www.memba.com/zz' };
        const res = new Response();
        const next = sinon.spy();
        notFound.handler(req, res, next);
        expect(res._status).not.to.have.been.called;
        expect(res._set).not.to.have.been.called;
        expect(res._send).not.to.have.been.called;
        expect(next).to.have.been.calledWith(sinon.match.instanceOf(Error));
    });
});
