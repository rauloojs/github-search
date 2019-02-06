import React, { Component } from 'react';
import { searchRepositories } from '../../../../angular-version/api';
import SearchBar from '../../components/SearchBar';
import RepoList from '../../components/RepoList';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      items: [],
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
      <div>
        <SearchBar
          search={this.state.search}
          onSearchChange={this.handleSearchChange}
          onSubmit={this.handleSubmit}
        />
        <RepoList repos={this.state.items} />
      </div>
    );
  }
}

export default SearchPage;
