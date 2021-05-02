function Node(props) {
  let coords = props.coordinates;

  return (
    <g>
      <circle cx={coords.x} cy={coords.y} r="40" stroke="black" stroke-width="3" fill="white" />
      <text x={coords.x} y={parseInt(coords.y) + 5} text-anchor="middle" fill="black" font-weight="bold">{props.value}</text>
    </g>
  );
}

export default Node;