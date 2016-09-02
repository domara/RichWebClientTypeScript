export class IndexCtrl {
  private name:string;
  private surname:string;

  constructor() {
    this.name = 'James';
    this.surname = 'Bond';
  }

  introduceYourself():string {
    return 'My name is ' + this.name + ', ' + this.name + ' ' + this.surname;
  }
}
