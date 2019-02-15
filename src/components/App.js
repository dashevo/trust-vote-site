import React from 'react';
import CandidateSelector from './CandidateSelector';
import VoteMessage from './VoteMessage';

class App extends React.Component {
  state = { payload: '' };
  onChange = payload => {
    console.log(payload);
    this.setState({ payload });
  };

  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <CandidateSelector
          label="1. Choose your candidate(s):"
          onChange={this.onChange}
        />
        <br />
        <VoteMessage
          label="2. Sign Message Using MN Collateral Key"
          payload={this.state.payload}
        />
      </div>
    );
  }
}

export default App;
