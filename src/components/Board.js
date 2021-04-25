import React from 'react';
import Square from './Square';

class Board extends React.Component {
  renderSquare(i, a, b, c) {
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
    const { a, b, c } = this.props;
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0, a, b, c)}
          {this.renderSquare(1, a, b, c)}
          {this.renderSquare(2, a, b, c)}
        </div>
        <div className="board-row">
          {this.renderSquare(3, a, b, c)}
          {this.renderSquare(4, a, b, c)}
          {this.renderSquare(5, a, b, c)}
        </div>
        <div className="board-row">
          {this.renderSquare(6, a, b, c)}
          {this.renderSquare(7, a, b, c)}
          {this.renderSquare(8, a, b, c)}
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
