import "angular";
import {IndexService} from "./index.service";

describe('IndexService test', () => {
  let indexService:IndexService;
  beforeEach(angular.mock.module('app'));
  beforeEach(inject(function (_indexService_:IndexService) {
    indexService = _indexService_;
  }));
  it('should get Bond', () => {
    expect(indexService.getBond()).toEqual({name: 'James', surname: 'Bond'});
  });
  it('should get Person Jon Example', () => {
    expect(indexService.getPerson('Jon','Example')).toEqual({name: 'Jon', surname: 'Example'});
  });
});
