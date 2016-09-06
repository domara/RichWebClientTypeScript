import 'angular';
import {BookService} from './book.service';
import {IBook} from '../general/interfaces/book.interface';

describe('Service: books', function () {
  beforeEach(angular.mock.module('book-mgmt'));

  it('allows saving a book and finding it', inject(function (bookService:BookService) {
    // given
    let book:IBook = {author: 'John Smith', title: 'AngularJS in a nutshell'},
      bookId:number;
    // when
    bookService.save(book);
    // then
    bookId = book.id;
    expect(bookService.findOne(bookId)).toEqual(book);
  }));

  it('gets all books saved', inject(function (bookService:BookService) {
    // given
    let
      book1:IBook = {author: 'John Smith', title: 'AngularJS in a nutshell'},
      book2:IBook = {author: 'Gavin King', title: 'Hibernate in Action'},
      savedBooks:IBook[];
    // when
    bookService.save(book1);
    bookService.save(book2);
    // then
    savedBooks = bookService.findAll();
    expect(savedBooks[0]).toEqual(book1);
    expect(savedBooks[1]).toEqual(book2);
  }));
});





