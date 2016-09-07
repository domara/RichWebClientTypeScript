import {IBook} from '../general/interfaces/book.interface';
export class BookRestService {
  private restServiceUri:string;
  /* @ngInject */
  constructor(private $http:ng.IHttpService) {
    this.restServiceUri = 'http://127.0.0.1:4567';
  }

  findBookById(id:number) {
    return this.$http.get(this.restServiceUri + '/book',
      {
        params: {
          id: id
        }
      }).then(function (response:ng.IHttpPromiseCallbackArg) {
      return response.data;
    });
  }

  getBooks() {
    return this.$http.get(this.restServiceUri + '/books/')
      .then(function (response:ng.IHttpPromiseCallbackArg) {
        return response.data;
      });

  }

  addBook(book:IBook) {
    return this.$http.post(this.restServiceUri + '/book/', {id: book.id, title: book.title, author: book.author})
      .then(function (response:ng.IHttpPromiseCallbackArg) {
        return response.data;
      });
  }

  deleteBook(id:number) {
    return this.$http.get(this.restServiceUri + '/deleteBook',
      {
        params: {
          id: id
        }
      }).then(function (response:ng.IHttpPromiseCallbackArg) {
      return response.data;
    });

  }
}
