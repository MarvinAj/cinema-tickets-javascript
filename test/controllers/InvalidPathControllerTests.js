import 'should';
import sinon from 'sinon';
import invalidPathCntroller from '../../src/pairtest/controllers/InvalidPathController.js';
import { StatusCode } from '../../src/pairtest/errors/StatusCode.js';

describe('Invalid path Controller Tests:', () => {
  it('should return OK status with invalid Url message', () => {
    const req = {
      body: { },
    };

    const res = {
      status: sinon.spy(),
      send: sinon.spy(),
      json: sinon.spy(),
    };

    invalidPathCntroller(req, res);

    res.status.calledWith(StatusCode.OK).should.equal(true);
    res.json.calledWith({ url: 'invalid url' }).should.equal(true);
  });
});
