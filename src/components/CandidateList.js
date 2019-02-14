import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import './CandidateList.css';

// TODO: consider making this controlled (e.g. "checked" is dependent based on
// state in parent component (Which can be passed to this? Or will we need state
// in this own component?)
const CandidateList = props => {
  const { candidates, onChange } = props;
  const ballotOptions = candidates.map(({ key, value, text }) => {
    return (
      <Checkbox key={key} value={value} label={text} onChange={onChange} />
    );
  });
  return <div className="candidate-list">{ballotOptions}</div>;
};

export default CandidateList;
