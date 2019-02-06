/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { SearchPageController } from './searchPage/searchPage.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { ApiService } from '../app/components/api/api.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { SearchBarDirective } from '../app/components/searchBar/searchBar.directive';
import { RepoListDirective } from '../app/components/repoList/repoList.directive';
import { RepoItemDirective } from '../app/components/repoItem/repoItem.directive';

angular.module('angularVersion', ['ngSanitize', 'ngMessages', 'ngAria', 'ngRoute', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('api', ApiService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('SearchPageController', SearchPageController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('searchBar', SearchBarDirective)
  .directive('repoList', RepoListDirective)
  .directive('repoItem', RepoItemDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
