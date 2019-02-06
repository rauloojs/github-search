import React, { Component } from 'react';
import { searchRepositories } from '../../../../angular-version/api';
import SearchBar from '../../components/SearchBar';
import RepoList from '../../components/RepoList';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      items: [{name:'a'}],
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      search: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const { search } = this.state;
    const response = await searchRepositories(search);

    this.setState({
      ...response,
    });
  }

  render() {
    return (
      <div className="py-5">
        <SearchBar
          search={this.state.search}
          onSearchChange={this.handleSearchChange}
          onSubmit={this.handleSubmit}
        />
        {this.state.items.length > 0 && (
          <RepoList
            repos={this.state.items}
            totalCount={this.state.total_count}
          />
        )}
      </div>
    );
  }
}

export default SearchPage;
