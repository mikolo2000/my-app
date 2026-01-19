function Button({ type, onClick, name }) {
  return (
    <button type={type} className="mainButtons" onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
