import React from 'react';
import { Dropdown } from 'semantic-ui-react';

class CandidateSelector extends React.Component {
  state = { selected: [] };

  onCSChange = selected => {
    console.log(selected);
    this.setState({ selected });
  };

  render() {
    const options = [
      { label: 'Setzer Gabbiani', value: 'sgabbiani' },
      { label: 'Cyan Garamonde', value: 'cgaramonde' },
      { label: 'Edgar Figaro', value: 'efigaro' },
      { label: 'Clyde Arrowny', value: 'carrowny' },
      { label: 'Locke Cole', value: 'lcole' },
      { label: 'Sabin Figaro', value: 'sfigaro' },
      { label: 'Relm Arrowny', value: 'rarrowny' },
      { label: 'Strago Magus', value: 'smagus' },
      { label: 'Celes Chere', value: 'cchere' },
      { label: 'Terra Branford', value: 'tbranford' },
      { label: 'Leo Cristophe', value: 'lcristophe' },
      { label: 'Kefka Palazzo', value: 'kpalazzo' },
    ];

    return (
      <Dropdown
        placeholder="Select your candidates"
        fluid
        multiple
        selection
        options={options}
        selected={this.state.selected}
        onChange={this.onCSChange}
      />
    );
  }
}

export default CandidateSelector;
