import {IndexService} from "./index.service";
export class IndexCtrl {

  private name:string;
  private surname:string;

  /* @ngInject */
  constructor(private indexService:IndexService) {
    let bond = this.indexService.getBond();
    this.setPerson(bond);
  }

  introduceYourself():string {
    return 'My name is ' + this.surname + ', ' + this.name + ' ' + this.surname;
  }

  introduceSomeone(name:string, surname:string):string {
    let person = this.indexService.getPerson(name, surname);
    this.setPerson(person);
    return this.introduceYourself();
  }

  private setPerson(person:{name:string; surname:string}):void {
    this.name = person && person.name;
    this.surname = person && person.surname;
  }
}
