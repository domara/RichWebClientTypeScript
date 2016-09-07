import {IBook} from '../general/interfaces/book.interface';
import {BookRestService} from './book.rest.service';


export class BookService {

  /* @ngInject */
  constructor(private bookRestService:BookRestService) {
  }

  findOne(id:number) {
    return this.bookRestService.findBookById(id);
  }

  save(bookToSave:IBook):any {
    return this.bookRestService.addBook(bookToSave);
  }

  findAll():any {
    return this.bookRestService.getBooks();
  }


}
