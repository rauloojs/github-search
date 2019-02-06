import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { SearchPageController } from './searchPage/searchPage.controller';
import { ApiService } from '../app/components/api/api.service';
import { SearchBarDirective } from '../app/components/searchBar/searchBar.directive';
import { RepoListDirective } from '../app/components/repoList/repoList.directive';
import { RepoItemDirective } from '../app/components/repoItem/repoItem.directive';

angular.module('angularVersion', ['ngSanitize', 'ngMessages', 'ngAria', 'ngRoute'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('api', ApiService)
  .controller('SearchPageController', SearchPageController)
  .directive('searchBar', SearchBarDirective)
  .directive('repoList', RepoListDirective)
  .directive('repoItem', RepoItemDirective)
