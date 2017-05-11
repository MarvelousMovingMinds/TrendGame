import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trend: ''
    };
    this.handeInput = this.handeInput.bind(this);
    this.submitTrend = this.submitTrend.bind(this);
  }

  handeInput(event) {
    this.setState({trend: event.target.value});
  }

  submitTrend(event) {
    this.props.collectData(this.state.trend);
  }

  render () {
    return (
      <div className="row">
        <div className="col-12">
          <h6>Search for a trend</h6>
          <input placeholder="Enter a topic" onChange={this.handeInput}></input>
          <input type="submit" onClick={this.submitTrend}></input>
        </div>
      </div>
    );
  }
}
