import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trend: ''
    };
    this.handeInput = this.handeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handeInput(e) {
    this.setState({trend: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    document.querySelector('.search-input').blur();
    this.props.findRetailers(this.state.trend);
    this.props.collectData(this.state.trend);
  }

  render () {
    return (
      <div className="row mb-4">
        <div className="col">
          <form
            action="submit"
            onSubmit={this.handleSubmit}
          >
            <div className="input-group">
              <input
                className="form-control search-input"
                type="text"
                placeholder="Enter a topic"
                onChange={this.handeInput}
                autoFocus
              >
              </input>
              <span className="input-group-btn">
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
