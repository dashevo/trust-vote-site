import React from 'react';
import { ReactComponent as Logo } from '../logo.svg';
import { Message } from 'semantic-ui-react';

class Closed extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <Logo style={{ width: '200px', height: 'auto', marginTop: '20px' }} />

        <Message>
          <Message.Header>Voting is now Closed</Message.Header>
          <p>
            We've received the votes and will publish the results soon. Thanks
            to everyone for taking the time and effort to vote!
          </p>
        </Message>
      </div>
    );
  }
}

export default Closed;
