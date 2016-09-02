import "angular";
import {IndexCtrl} from "./index.controller";

describe('IndexCtrl test', () => {
  let indexCtrl:IndexCtrl;
  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function ($controller:any, $rootScope:any) {
    indexCtrl = $controller('IndexCtrl as indexCtrl', {
      $scope: $rootScope.$new(),
    });
  }));

  it('introduces itself properly', function () {
    expect(indexCtrl.introduceYourself()).toBe('My name is Bond, James Bond');
  });it('introduces itself properly', function () {
    expect(indexCtrl.introduceSomeone('Jon','Example')).toBe('My name is Example, Jon Example');
  });
});




