const sandbox = require('sinon').createSandbox();
const myAPI = { hello: function () { } };

describe('myAPI.hello method', function () {

  // stub out the hello world method
  beforeEach(function () {
    sandbox.stub(myAPI, 'hello');
  });

  // completely restore all fakes created through the sandbox
  afterEach(function () {
    sandbox.restore();
  })

  it('should be called once', function () {
    myAPI.hello();
    sandbox.assert.calledOnce(myAPI.hello);
  });

  it('should be called twice', function () {
    myAPI.hello();
    myAPI.hello();
    sandbox.assert.calledTwice(myAPI.hello);
  });
});