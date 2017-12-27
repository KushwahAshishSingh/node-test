const utils = require('./utils');
it('should add two number', () => {
  var res = utils.add(33, 11);

  if(res !== 44) {
    throw new Error(`expected 44, but got ${res}.`);
  }
  else {
    console.log(`the value is ${res}`);
  }

});

it('should square an number', () => {
  var res = utils.square(5);
  if(res !== 25){
    throw new Error(`expected 25 but got ${res}.`);
  }
  else {
    console.log(`the current output is ${res}`);
  }
});
