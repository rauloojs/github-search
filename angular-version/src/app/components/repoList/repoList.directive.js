export function RepoListDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/repoList/repoList.html',
    scope: {
        repos: '=',
        totalCount: '=',
        onLoadMore: '&'
    },
    controller: RepoListController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class RepoListController {
  constructor () {
    'ngInject';
  }
}
