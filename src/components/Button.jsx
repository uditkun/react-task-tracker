function Button({ color, text, showAdd }) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: `${color}` }}
      onClick={showAdd}
    >
      {text}
    </button>
  );
}

export default Button;
