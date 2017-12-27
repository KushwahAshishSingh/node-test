
/*
how to do testing

  1>  make a project in Atom .
  2>  termila :   mkdir node-tests
  3>              cd    node-tests
  4>              npm init
  5>              npm install --save-dev nodemon
  6>              npm i mocha@3.0.0  --save-dev
   or  for global purpose  use npm install -g nodemon

   7>  last step  terminal : npm run test-watch


1>  make the Dir                       "Utils"
2>  make new file  Utils.js              "Utils/Utils.js"
//  in this we will an function.
// this will be our application code
      module.exports.add = (a, b) => a + b;

//////////////////

Imp

//  we will use mocha 6>


1> make new file in Utils folder      "Utils/utils.test.js"

//this will store our test cases

make test case.






// make changes in package.json3
                                                                            */
//"test": "mocha **/*.test.js";


///////////////////////////////////////////////////////////////////



// Auto Start

//  make changes in package.json
// add: "scripts": { "test-watch": "nodemon --exec 'npm test'"}
// terminal : npm run test-watch
