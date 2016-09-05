import {addBookDetailsStateDef} from './book-details/book-details.state-def';
import {BookDetailsCtrl} from './book-details/book-details.controller';

let bookMgmtModule:ng.IModule = angular.module('book-mgmt', ['ui.router'])
  .config(function ($stateProvider:ng.ui.IStateProvider) {
    addBookDetailsStateDef($stateProvider);
  })
  .controller('BookDetailsCtrl', BookDetailsCtrl);

export default bookMgmtModule.name;
