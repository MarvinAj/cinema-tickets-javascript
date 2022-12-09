import chaiHttp from 'chai-http';
import chai from 'chai';
import app, { stop } from '../../src/app.js';

const { should } = chai;

chai.use(chaiHttp);

describe('App server Tests', () => {
  let appStart;

  beforeEach(() => {
    appStart = chai.request(app);
  });

  afterEach(() => {
    stop();
  });

  describe('/POST tickets', () => {
    it('Should purchase tickets', (done) => {
      appStart
        .post('/tickets')
        .send({
          accountId: 1,
          tickets: {
            adult: 2,
            child: 6,
            infant: 1,
          },
        })
        .end((err, res) => {
          res.status.should.be.equal(200);
          res.body.should.have.property('AccountId');
          res.body.should.have.property('TotalNumberOfSeats');
          res.body.should.have.property('TotalCost');
          res.body.should.have.property('Tickets');
          done();
        });
    });

    it('Should return 422 for incorrect infant type', (done) => {
      appStart
        .post('/tickets')
        .send({
          accountId: 1,
          tickets: {
            adult: 1,
            infant: '',
          },
        })
        .end((err, res) => {
          res.status.should.be.equal(422);
          done();
        });
    });

    it('Should return 422 for incorrect child type', (done) => {
      appStart
        .post('/tickets')
        .send({
          accountId: 1,
          tickets: {
            adult: 1,
            child: '',
            infant: 6,
          },
        })
        .end((err, res) => {
          res.status.should.be.equal(422);
          done();
        });
    });

    it('Should return 422 for incorrect adult type', (done) => {
      appStart
        .post('/tickets')
        .send({
          accountId: 1,
          tickets: {
            adult: '',
          },
        })
        .end((err, res) => {
          res.status.should.be.equal(422);
          done();
        });
    });
  });

  describe('/GET return test text', () => {
    it('Should return test string', (done) => {
      appStart
        .get('/tickets')
        .send({
          accountId: 1,
          tickets: {
            adult: '',
          },
        })
        .end((err, res) => {
          res.status.should.be.equal(200);
          done();
        });
    });
  });

  describe('/GET invalid url', () => {
    it('Should redirect to invalid url', (done) => {
      appStart
        .get('/wrong')
        .send({
          accountId: 1,
          tickets: {
            adult: '',
          },
        })
        .end((err, res) => {
          res.status.should.be.equal(200);
          res.body.should.have.property('url');
          done();
        });
    });
  });
});
