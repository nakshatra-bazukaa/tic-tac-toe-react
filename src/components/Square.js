import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  handleSquareClick(value) {
    this.setState({
      value,
    });
  }
  render() {
    return (
      <button className="square" onClick={() => this.handleSquareClick('X')}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
