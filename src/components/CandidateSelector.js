import './CandidateSelector.css';
import React from 'react';
import {
  Label,
  Segment,
  Button,
  Divider,
  Dimmer,
  Header,
} from 'semantic-ui-react';
import CandidateOptions from '../candidates.json';
import CandidateList from './CandidateList';

let votePre = process.env.REACT_APP_VOTE_PREFIX;

class CandidateSelector extends React.Component {
  state = { searchQuery: '', value: new Set(), message: votePre };

  // The message prefix is pre-pended to the message to be signed. This should
  // be unique per application, not generic. For more info, see:
  // https://bitcoin.stackexchange.com/questions/3337/what-are-the-safety-guidelines-for-using-the-sign-message-feature/3339#3339
  messagePrefix = votePre;

  onChange = (e, { searchQuery, value }) => {
    // regenerate message each time based on 'value' array
    const message = this.messagePrefix + [...value].join('|');
    this.setState({ searchQuery, value, message });
  };
  onSearchChange = (e, { searchQuery }) => this.setState({ searchQuery });

  onResetButtonClick = event => {
    console.log('Clicked reset button');
    this.props.twoStep(1);
  };

  onButtonPress = event => {
    // const message = this.messagePrefix + [...value].join('|');

    // Previously this was used to ensure some candidate was selected -- but an
    // empty candidate list is also a valid vote ("none of the above"), and the
    // only way to clear out a previous vote in case a MNO wants to revoke
    // their vote.
    //
    // if ([...this.state.value].length === 0) {
    //   return;
    // }

    this.props.setMessage(this.state.message);
  };

  onCheckboxChange = (e, { value, checked }) => {
    // get a copy of the Set from state and manipulate accordingly
    let stateValue = this.state.value;

    if (checked === true) {
      stateValue.add(value);
    } else {
      stateValue.delete(value);
    }

    // regenerate message each time based on 'value' Set
    const message = this.messagePrefix + [...stateValue].join('|');
    this.setState({ message, value: stateValue });
    console.log(message);
  };

  render() {
    const labelText = this.props.label;

    return (
      <Dimmer.Dimmable as={Segment} dimmed={this.props.shouldDim}>
        <Label ribbon>{labelText}</Label>
        <Divider hidden />
        <CandidateList
          candidates={CandidateOptions}
          onChange={this.onCheckboxChange}
        />
        <Divider hidden />

        <Button onClick={this.onButtonPress} className="ui primary">
          Done
        </Button>
        <Dimmer active={this.props.shouldDim}>
          <Header inverted as="h2">
            Candidates Selected
          </Header>
          <Divider hidden />
          <Button
            inverted
            value="Reset Selections"
            onClick={this.onResetButtonClick}
          >
            Reset Selections
          </Button>
        </Dimmer>
      </Dimmer.Dimmable>
    );
  }
}

export default CandidateSelector;
