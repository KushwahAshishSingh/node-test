const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
//app.__set__
//app.__get__

describe('App', () => {
var db = {
  saveUser: expect.createSpy()
};
app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
  //  spy();
  //  expect(spy).toHaveBeenCalled();
 spy('ashish', 24);
 expect(spy).toHaveBeenCalledWith('ashish', 24);
});

  it('should call saveUser with user obj', () => {
    var email = 'ashish@gmail.com';
     var password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});

// https://github.com/mjackson/expect  for "spy"

//  npm isntall rewire@2.5.2 --save-dev
