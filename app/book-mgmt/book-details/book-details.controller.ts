import {IBook} from '../../general/interfaces/book.interface';
import {BookService} from '../book.service';

export class BookDetailsCtrl {
  bookForm:any;
  book:IBook;

  private static createErrorMessage(errorObject:any):string {
    var errorCode;
    if (errorObject) {
      for (errorCode in errorObject) {
        if (errorObject.hasOwnProperty(errorCode)) {
          switch (errorCode) {
            case 'required':
              return 'Please provide a value';
            case 'maxlength':
              return 'The value is too long';
            default:
              return 'The value is wrong';
          }
        }
      }
    }
  };

  /* @ngInject */
  constructor(private currentBook:IBook, private bookService:BookService, private $state:ng.ui.IStateService) {
    this.book = this.currentBook;
  }

  save():void {
    let formIsValid = this.bookForm && this.bookForm.$valid;
    if (formIsValid) {
      this.bookService.save(this.currentBook).then(() => {
        this.$state.go('book-overview', {}, {reload: true});
      });
    }
  }

  getErrorMessageOfField(field:any):string {
    let
      errors = field && field.$error,
      fieldIsInvalid = field && field.$invalid,
      formIsSubmitted = this.bookForm && this.bookForm.$submitted;

    if (fieldIsInvalid && (field.$touched || formIsSubmitted)) {
      return BookDetailsCtrl.createErrorMessage(errors);
    }
  }

}
