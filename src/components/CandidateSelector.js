import React from 'react';
import { Dropdown, Label, Segment, Button } from 'semantic-ui-react';
import CandidateOptions from '../candidates.json';

class CandidateSelector extends React.Component {
  state = { searchQuery: '' };

  onChange = (e, { searchQuery, value }) =>
    this.setState({ searchQuery, value });
  onSearchChange = (e, { searchQuery }) => this.setState({ searchQuery });

  onSubmit = event => {
    event.target.preventDefault();
    console.log('hi there, submitted');
  };

  render() {
    const labelText = this.props.label;
    const { searchQuery, value } = this.state;

    return (
      <Segment>
        <Label>{labelText}</Label>
        <Dropdown
          fluid
          multiple
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          onSearchChange={this.onSearchChange}
          options={CandidateOptions}
          placeholder="Candidates"
          search
          searchQuery={searchQuery}
          selection
          value={value}
        />
        <Button className="ui primary">Done</Button>
      </Segment>
    );
  }
}

export default CandidateSelector;
