export class SearchPageController {
  constructor (api) {
    'ngInject';
    this.search = '';
    this.items = [];
    this.page = 1;
    this.totalCount = 0;
    this.api = api;
  }

  onLoadMore () {
    this.page += 1;

    this.api.searchRepositories(this.search, this.page)
    .then(({ items }) => {
      this.items = [
        ...this.items,
        ...items
      ];
    });
  }

  onSubmit () {
    this.page = 1;

    this.api.searchRepositories(this.search)
    .then(({ items, total_count }) => {
      this.items = items;
      this.totalCount = total_count;
    });
  }
}
