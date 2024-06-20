/**
 * @return {Function}
 */
var createHelloWorld = function() {
    let args = "Hello World"
    return function() {
        return args;
    }
};

const func = createHelloWorld();
func();

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */