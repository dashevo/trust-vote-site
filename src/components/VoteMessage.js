import React from 'react';
import {
  Form,
  TextArea,
  Label,
  Segment,
  Button,
  Divider,
  Message,
  Input,
} from 'semantic-ui-react';
import copy from 'clipboard-copy';
import dashcore from '@dashevo/dashcore-lib';
import dtevote from '../apis/dtevote';

class VoteMessage extends React.Component {
  state = {
    address: '',
    signature: '',
    successMessage: '',
    errorMessage: '',
  };

  copyToClipboard = event => {
    copy(this.props.payload);
  };

  clearMessages = () => {
    this.setState({
      successMessage: '',
      errorMessage: '',
    });
  };

  validateFieldLengths = () => {
    let ok = true;
    if (!this.state.address.length > 0) {
      ok = false;
    }
    if (!this.state.signature.length > 0) {
      ok = false;
    }

    return ok;
  };

  submitVote = async event => {
    const { payload } = this.props;
    const { signature, address } = this.state;

    this.clearMessages();
    if (!this.validateFieldLengths()) {
      return this.setState({ errorMessage: 'Fields cannot be empty' });
    }

    const isValidAddr = dashcore.Address.isValid(address, 'mainnet');
    if (!isValidAddr) {
      return this.setState({ errorMessage: 'Invalid Dash Address' });
    }

    const msg = dashcore.Message(payload);
    let isValidSig = false;
    try {
      // This will throw an error if signature isn't in a valid format.
      isValidSig = msg.verify(address, signature);
      console.log('isValidSig: ', isValidSig);
    } catch (err) {
      console.log('got error checking valid sig');
    }
    if (!isValidSig) {
      return this.setState({ errorMessage: 'Invalid Message Signature' });
    }

    // TODO: handle network errors / what if promise never returned?
    try {
      const response = await dtevote.post('/vote', {
        addr: address,
        msg: payload,
        sig: signature,
      });

      const { status } = response;
      if (status >= 200 && status <= 299) {
        console.log('success: ', response.data);
        this.setState({
          successMessage: response.data.message,
        });
      }
      if (status >= 400 && status <= 599) {
        console.log('error: ', response.data);
        this.setState({
          errorMessage: response.data.message,
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({
        errorMessage: err.message,
      });
    }
  };

  onAddressChange = event => {
    this.setState({ address: event.target.value.trim() });
  };

  onSignatureChange = event => {
    this.setState({ signature: event.target.value.trim() });
  };

  onFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { payload, visible } = this.props;
    if (!visible) {
      return null;
    }

    return (
      <Segment>
        <Label as="a" ribbon>
          {this.props.label}
        </Label>

        <Divider hidden />
        <Form>
          <TextArea disabled value={payload} />
        </Form>
        <Button className="ui primary" onClick={this.copyToClipboard}>
          Copy to Clipboard
        </Button>

        <Divider hidden />

        <Form onSubmit={this.onFormSubmit}>
          <Input
            fluid
            placeholder="MN Collateral, Owner or Voting Address"
            value={this.state.address}
            onChange={this.onAddressChange}
          />
          <Input
            fluid
            placeholder="Message Signature"
            value={this.state.signature}
            onChange={this.onSignatureChange}
          />
          <Button className="ui primary" onClick={this.submitVote}>
            Submit Vote
          </Button>
        </Form>

        {this.state.successMessage.length > 0 && (
          <Message
            success
            header="Success"
            content={this.state.successMessage}
          />
        )}

        {this.state.errorMessage.length > 0 && (
          <Message error header="Error" content={this.state.errorMessage} />
        )}
      </Segment>
    );
  }
}

export default VoteMessage;
