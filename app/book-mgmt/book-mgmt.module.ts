import {addBookDetailsStateDef} from './book-details/book-details.state-def';

let bookMgmtModule:ng.IModule = angular.module('book-mgmt', ['ui.router'])
  .config(function ($stateProvider:ng.ui.IStateProvider) {
    addBookDetailsStateDef($stateProvider);
  });

export default bookMgmtModule.name;
