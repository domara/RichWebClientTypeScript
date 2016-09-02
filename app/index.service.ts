export class IndexService {
  /* @ngInject */
  constructor() {

  }

  getBond():any {
    return {name: 'James', surname: 'Bond'};
  }

  getPerson(name:string, surname:string) {
    return {'name': name, 'surname': surname};
  }
}
