import { searchRepositories } from '../../../../api';

export class ApiService {
  constructor ($q) {
    'ngInject';

    this.$q = $q;
  }

  searchRepositories(...rest) {
    return this.$q.when(searchRepositories(...rest));
  }
}
