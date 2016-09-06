import 'angular';
import {BookDetailsCtrl} from './book-details.controller';
import {IBook} from '../../general/interfaces/book.interface';

describe('BookDetailsCrtl', function () {
  let bookDetailsCtrl:BookDetailsCtrl;
  let currentBook:IBook;

  beforeEach(angular.mock.module('book-mgmt'));

  beforeEach(inject(function ($controller:any, $rootScope:any) {
    currentBook = {
      author: 'John Smith',
      title: 'AngularJS in a nutshell'
    };
    bookDetailsCtrl = $controller('BookDetailsCtrl as bookDetailsCtrl', {
      $scope: $rootScope.$new(),
      currentBook: currentBook,
    });

  }));
  it('initalize controller', function () {
    expect(bookDetailsCtrl.book).toBeDefined();
  });
});
