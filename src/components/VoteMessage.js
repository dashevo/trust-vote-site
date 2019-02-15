import React from 'react';
import { Form, TextArea, Label, Segment, Button } from 'semantic-ui-react';

class VoteMessage extends React.Component {
  constructor(props) {
    super(props);

    this.textAreaRef = React.createRef();
    this.state = { copySuccess: '' };
  }

  copyToClipboard = event => {
    this.textAreaRef.current.select();
    document.execCommand('copy');
    this.setState({ copySuccess: 'Copied!' });
  };

  render() {
    // const { label: labelText, payload } = this.props;
    const { payload } = this.props;
    return (
      <Segment>
        <Label>{this.props.label}</Label>
        <Form>
          <TextArea disabled ref={this.textAreaRef}>
            {payload}
          </TextArea>
        </Form>
        <Button className="ui primary" onClick={this.copyToClipboard}>
          Copy to Clipboard
        </Button>
        <span>{this.state.copySuccess}</span>
      </Segment>
    );
  }
}

export default VoteMessage;
