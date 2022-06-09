import React, { Component } from 'react';

export class CCLifecycle extends Component {
  constructor() {
    super();
    this.state = { total: 99 };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    console.log(this.state.total, prevState.total);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <>
        <h1 className="text-center">類別型元件</h1>
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <div
              onClick={() => {
                this.setState({ total: this.state.total + 1 });
              }}
            >
              ▲
            </div>
            <h2>{this.state.total}</h2>
            <div
              onClick={() => {
                this.setState({ total: this.state.total - 1 });
              }}
            >
              ▼
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CCLifecycle;
