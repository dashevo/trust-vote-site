import React from 'react';
import CandidateSelector from './CandidateSelector';

class App extends React.Component {

  render() {
    const options = [
      { label: "Setzer Gabbiani", value: "sgabbiani" },
      { label: "Cyan Garamonde", value: "cgaramonde" },
      { label: "Edgar Figaro", value: "efigaro" },
      { label: "Clyde Arrowny", value: "carrowny" },
      { label: "Locke Cole", value: "lcole" },
      { label: "Sabin Figaro", value: "sfigaro" },
      { label: "Relm Arrowny", value: "rarrowny" },
      { label: "Strago Magus", value: "smagus" },
      { label: "Celes Chere", value: "cchere" },
      { label: "Terra Branford", value: "tbranford" },
      { label: "Leo Cristophe", value: "lcristophe" },
      { label: "Kefka Palazzo", value: "kpalazzo" }
    ];

    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <CandidateSelector
          options={options}
        />
      </div>
    );
  }
}

export default App;
