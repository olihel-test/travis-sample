var lib = require('../lib');

exports.testValue = function(test){
    test.expect(1);
    test.ok(lib.getTestValue(), 'value is true');
    test.done();
};