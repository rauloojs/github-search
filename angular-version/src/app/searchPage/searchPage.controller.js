export class SearchPageController {
  constructor (api) {
    'ngInject';
    this.search = '';
    this.items = [];
    this.totalCount = 0;
    this.api = api;
  }

  onSubmit () {
    this.api.searchRepositories(this.search)
    .then(({ items, total_count }) => {
      this.items = items;
      this.totalCount = total_count;
    });
  }
}
