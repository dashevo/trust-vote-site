import React from 'react';
import CandidateSelector from './CandidateSelector';
import VoteMessage from './VoteMessage';

class App extends React.Component {
  state = { payload: '', voteMessageVisible: false, activeStep: 1 };

  setMessage = message => {
    this.setState({ payload: message });
    this.moveToStep(2);
  };

  moveToStep = stepNumber => {
    let voteMessageVisible = false;
    switch (stepNumber) {
      case 1:
        voteMessageVisible = false;
        break;
      case 2:
        voteMessageVisible = true;
        break;
      default:
        break;
    }

    this.setState({
      voteMessageVisible,
      activeStep: stepNumber,
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <CandidateSelector
          label="1. Choose your candidate(s), (select as many as you want):"
          setMessage={this.setMessage}
          shouldDim={!(this.state.activeStep === 1)}
          twoStep={this.moveToStep}
        />
        <VoteMessage
          label="2. Sign Message Using MN Collateral Key"
          payload={this.state.payload}
          visible={this.state.voteMessageVisible}
        />
      </div>
    );
  }
}

export default App;
