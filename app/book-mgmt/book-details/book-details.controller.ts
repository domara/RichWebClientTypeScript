import {IBook} from '../../general/interfaces/book.interface';

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
  constructor(private currentBook:IBook) {
    this.book = this.currentBook;
  }

  save():void {
    let formIsValid = this.bookForm && this.bookForm.$valid;
    alert(formIsValid);
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
