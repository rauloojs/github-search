export function RepoItemDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/repoItem/repoItem.html',
    scope: {
        repo: '='
    },
    controller: RepoItemController,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  };

  return directive;
}

class RepoItemController {
  constructor () {
    'ngInject';
  }
}
