'use strict';

describe('module: main, controller: ClothesCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ClothesCtrl;
  beforeEach(inject(function ($controller) {
    ClothesCtrl = $controller('ClothesCtrl');
  }));

  it('should do something', function () {
    expect(!!ClothesCtrl).toBe(true);
  });

});
