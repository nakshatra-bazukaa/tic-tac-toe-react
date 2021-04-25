function Square(props) {
  return (
    <button
      style={props.styles}
      className="square"
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  );
}

export default Square;
