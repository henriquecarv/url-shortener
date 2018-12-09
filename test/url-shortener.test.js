/* eslint-disable no-undef */
/* eslint-disable max-len */
'use strict';

require('./init');

describe('Url shortener service', () => {
  it('Should get status code 404', (done) => {
    request.get('/').expect(404, done);
  });

  it('Should not be authorized and get status code 401', (done) => {
    request
        .post('/api/create')
        .send({
          original_url: 'https://henriquecarv.com',
          shorthand: 'shortgoogle',
        })
        .set('Content-Type', 'application/json')
        .expect(401, done);
  });

  it('Should get status code 400 for not providing original_url', (done) => {
    request
        .post('/api/create')
        .send({
          shorthand: 'shortgoogle',
        })
        .set('Content-Type', 'application/json')
        .set(
            'Authorization',
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJqb2huZG9lIiwicmVhbG5hbWUiOiJKb2huIERvZSJ9.10cg9u3gFDOLtY0hQvqkR2LlryOdifz5yrjATBHyXjA'
        )
        .expect(400, done);
  });

  it('Should receive shorthand shortgoogle', (done) => {
    request
        .post('/api/create')
        .send({
          original_url: 'https://henriquecarv.com',
          shorthand: 'shortgoogle',
        })
        .set('Content-Type', 'application/json')
        .set(
            'Authorization',
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJqb2huZG9lIiwicmVhbG5hbWUiOiJKb2huIERvZSJ9.10cg9u3gFDOLtY0hQvqkR2LlryOdifz5yrjATBHyXjA'
        )
        .expect(201, {shorthand: 'shortgoogle'}, done);
  });

  it('Should not be able to use the same shorthand shortgoogle', (done) => {
    request
        .post('/api/create')
        .send({
          original_url: 'https://henriquecarv.com',
          shorthand: 'shortgoogle',
        })
        .set('Content-Type', 'application/json')
        .set(
            'Authorization',
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJqb2huZG9lIiwicmVhbG5hbWUiOiJKb2huIERvZSJ9.10cg9u3gFDOLtY0hQvqkR2LlryOdifz5yrjATBHyXjA'
        )
        .expect(409, done);
  });

  it('Should receive a auto generated shorthand', (done) => {
    request
        .post('/api/create')
        .send({
          original_url: 'https://henriquecarv.com',
        })
        .set('Content-Type', 'application/json')
        .set(
            'Authorization',
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJqb2huZG9lIiwicmVhbG5hbWUiOiJKb2huIERvZSJ9.10cg9u3gFDOLtY0hQvqkR2LlryOdifz5yrjATBHyXjA'
        )
        .expect(201, done);
  });

  it('Should redirect me to the original url', (done) => {
    request.get('/shortgoogle').end((err, res) => {
      if (err) throw err;
      const location = res.header.location;

      location.should.be.exactly('https://henriquecarv.com');
      done();
    });
  });
});
