export function addBookDetailsStateDef($stateProvider:angular.ui.IStateProvider) {
  return $stateProvider.state('book-details',
    {
      url: '/book-mgmt/books',
      templateUrl: 'book-mgmt/book-details/book-details.html',
      resolve: {}
    });

}
