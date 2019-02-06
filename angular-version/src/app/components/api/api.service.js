import { searchRepositories } from '../../../../api';

export class ApiService {
  constructor ($q) {
    'ngInject';

    this.$q = $q;
  }

  searchRepositories(search) {
    return this.$q.when(searchRepositories(search));
  }
}
