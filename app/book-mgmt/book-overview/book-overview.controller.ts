export class BookOverviewCtrl {
  /* @ngInject */
  constructor(private currentBooks:any) {
  }

  thereAreBooksToDisplay():boolean {
    return this.currentBooks && this.currentBooks.length > 0;
  };
}
