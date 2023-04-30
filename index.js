function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    function x() {}
    return x;
}

const returnsAnAnonymousFunction = () => {
   return function () {}    
}