function Button(props) {
  return (
    <button type={props.type} className="mainButtons">
      {props.name}
    </button>
  );
}

export default Button;
