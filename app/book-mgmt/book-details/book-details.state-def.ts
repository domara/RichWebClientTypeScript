import {BookService} from '../book.service';
import {IBook} from '../../general/interfaces/book.interface';
export function addBookDetailsStateDef($stateProvider:angular.ui.IStateProvider) {
  let bookIdParamName = 'bookId';
  return $stateProvider.state('book-details',
    {
      url: '/book-mgmt/book/:' + bookIdParamName,
      templateUrl: 'book-mgmt/book-details/book-details.html',
      controller: 'BookDetailsCtrl',
      controllerAs: 'bookDetailsCtrl',
      resolve: {
        /* @ngInject */
        currentBook: function ($stateParams:ng.ui.IStateParamsService, $location:ng.ILocationService, bookService:BookService) {
          let bookIdParamValue:string = $stateParams[bookIdParamName];
          if (bookIdParamValue) {
            let currentBook:IBook = bookService.findOne(parseInt(bookIdParamValue, 10));
            if (currentBook) {
              return currentBook;
            } else {
              $location.path('/book-mgmt/book/');
            }
          } else {
            return {};
          }
        }
      }
    });

}
