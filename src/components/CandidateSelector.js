import React from 'react';
import { Dropdown, Label, Segment, Button } from 'semantic-ui-react';
import CandidateOptions from '../candidates.json';

class CandidateSelector extends React.Component {
  state = { searchQuery: '', value: [], message: '' };

  onChange = (e, { searchQuery, value }) => {
    // regenerate message each time based on 'value' array
    const message = value.join('|');
    this.setState({ searchQuery, value, message });
  };
  onSearchChange = (e, { searchQuery }) => this.setState({ searchQuery });

  onButtonPress = event => {
    console.log(this.state.message);
    // this.event.disable;
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
          onSearchChange={this.onSearchChange}
          options={CandidateOptions}
          placeholder="Candidates"
          search
          searchQuery={searchQuery}
          selection
          value={value}
        />
        <Button onClick={this.onButtonPress} className="ui primary">
          Done
        </Button>
      </Segment>
    );
  }
}

export default CandidateSelector;
