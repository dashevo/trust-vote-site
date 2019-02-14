import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import CandidateOptions from '../candidates.json';

class CandidateSelector extends React.Component {
  state = { searchQuery: '' };

  onChange = (e, { searchQuery, value }) =>
    this.setState({ searchQuery, value });
  onSearchChange = (e, { searchQuery }) => this.setState({ searchQuery });

  render() {
    const { searchQuery, value } = this.state;

    return (
      <Dropdown
        fluid
        multiple
        onChange={this.onChange}
        onSearchChange={this.onSearchChange}
        options={CandidateOptions}
        placeholder="Candidates"
        search
        searchQuery={searchQuery}
        selection
        value={value}
      />
    );
  }
}

export default CandidateSelector;
