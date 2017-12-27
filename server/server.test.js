const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return hello', (done) => {
  request(app)
  .get('/')
  .expect(404)
  .expect((res) => {
    expect(res.body).toInclude({
      error: 'page nt found'
    })

  })
//  .expect('hello')
  .end(done);
})


it('should return my users', (done) => {
  request(app)
  .get('/users')
  .expect(200)
  .expect((res) => {
    expect(res.body).toInclude({
      name: 'ashish',
      age: 24
    })
  })
  .end(done);
})
