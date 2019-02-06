export class SearchPageController {
  constructor (api) {
    'ngInject';
    this.search = '';
    this.items = [];
    this.api = api;
  }

  onSubmit () {
    this.api.searchRepositories(this.search)
    .then(({ items }) => {
      this.items = items;
    });
  }
}
