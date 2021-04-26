import React from 'react';
import Square from './Square';

class Board extends React.Component {
  renderSquare(i) {
    const { a, b, c } = this.props;
    if (i === a || i === b || i === c) {
      return (
        <Square
          value={this.props.squares[i]}
          styles={styles.greenButton}
          onClick={() => this.props.onClick(i)}
        />
      );
    } else {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  }
  render() {
    return (
      <div className="ttt-board">
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

const styles = {
  greenButton: {
    background: '#7CFC00',
  },
};

export default Board;
