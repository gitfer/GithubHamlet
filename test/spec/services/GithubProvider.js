'use strict';

describe('Service: GithubProvider', function () {

  // load the service's module
  beforeEach(module('GithubHamletApp'));

  // instantiate service
  var GithubProvider;
  beforeEach(inject(function (_GithubProvider_) {
    GithubProvider = _GithubProvider_;
  }));

  it('should do something', function () {
    expect(!!GithubProvider).toBe(true);
  });

});
