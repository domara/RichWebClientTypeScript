import {BookService} from '../book.service';
export function addBookOverviewStateDef($stateProvider:angular.ui.IStateProvider) {
  return $stateProvider.state('book-overview',
    {
      url: '/book-mgmt/books',
      templateUrl: 'book-mgmt/book-overview/book-overview.html',
      controller: 'BookOverviewCtrl',
      controllerAs: 'bookOverviewCtrl',
      resolve: {
        /* @ngInject */
        currentBooks: function (bookService:BookService) {
          return bookService.findAll();
        }
      }
    });

}
