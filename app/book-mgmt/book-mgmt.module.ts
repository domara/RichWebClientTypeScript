import {addBookDetailsStateDef} from './book-details/book-details.state-def';
import {BookDetailsCtrl} from './book-details/book-details.controller';
import {BookService} from './book.service';
import {addBookOverviewStateDef} from './book-overview/book-overview.state-def';
import {BookOverviewCtrl} from './book-overview/book-overview.controller';
import {BookRestService} from './book.rest.service';

let bookMgmtModule:ng.IModule = angular.module('book-mgmt', ['ui.router'])
  .config(function ($stateProvider:ng.ui.IStateProvider) {
    addBookDetailsStateDef($stateProvider);
    addBookOverviewStateDef($stateProvider);
  })
  .controller('BookDetailsCtrl', BookDetailsCtrl)
  .controller('BookOverviewCtrl', BookOverviewCtrl)
  .service('bookRestService', BookRestService)
  .service('bookService', BookService);


export default bookMgmtModule.name;
