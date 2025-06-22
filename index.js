// 1. receivesAFunction: takes a callback and calls it
function receivesAFunction(callback) {
  callback();
}

// 2. returnsANamedFunction: returns a named function
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I am a named function");
  };
}

// 3. returnsAnAnonymousFunction: returns an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    console.log("I am an anonymous function");
  };
}
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction,
};
