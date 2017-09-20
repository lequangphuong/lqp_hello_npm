var should = require('chai').should(),
    lqp_hello_npm = require('../src/Hello'),
    print = lqp_hello_npm.print;

describe('#print', function () {
    it('Say: Hello "NPM"', function () {
        print('NPM').should.equal('NPM');
    });
});

