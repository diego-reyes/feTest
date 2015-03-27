/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: CustomerServices', function () {

    // load the service's module
    beforeEach(module('feAsigApp.services.CustomerServices'));

    // instantiate service
    var CustomerServices;
    beforeEach(inject(function (_CustomerServices_) {
      CustomerServices = _CustomerServices_;
    }));

    it('should do something', function () {
      expect(!!CustomerServices).toBe(true);
    });

  });
});
