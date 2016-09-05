import {IBook} from '../general/interfaces/book.interface';


export class BookService {
  private books:IBook[] = [];
  private sequencer:number = 1;

  findOne(id:number):IBook {
    let orginalBook:IBook = this.findBookById(id);
    if (orginalBook) {
      return angular.copy(orginalBook);
    }
  }

  save(bookToSave:IBook):void {
    let originalBook:IBook;
    if (bookToSave.id) {
      originalBook = this.findBookById(bookToSave.id);
      if (originalBook) {
        angular.copy(bookToSave, originalBook);
      }
    } else {
      bookToSave.id = this.sequencer++;
      this.books.push(bookToSave);
    }

  }

  findAll():IBook[] {
    return this.books;
  }

  private findBookById(id:number):IBook {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id) {
        return this.books[i];
      }
    }
  }
}
