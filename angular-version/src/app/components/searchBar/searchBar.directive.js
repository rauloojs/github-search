export function SearchBarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/searchBar/searchBar.html',
    scope: {
        search: '=',
        onSubmit: '&'
    },
    controller: SearchBarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class SearchBarController {
  constructor () {
    'ngInject';
  }
}
