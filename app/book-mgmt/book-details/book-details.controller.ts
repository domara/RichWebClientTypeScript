import {IBook} from '../../general/interfaces/book.interface';

export class BookDetailsCtrl {
  book:IBook;
  /* @ngInject */
  constructor(private currentBook:IBook) {
    this.book = this.currentBook;
  }
}
