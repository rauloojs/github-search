export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/searchPage/searchPage.html',
      controller: 'SearchPageController',
      controllerAs: 'searchPage'
    })
    .otherwise({
      redirectTo: '/'
    });
}
