import Button from "./Button";

function Header({ title, add, showAdd, show }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        color={`${show ? "red" : "green"}`}
        text={`${show ? "Close" : "Add"}`}
        add={add}
        showAdd={showAdd}
      />
    </div>
  );
}

export default Header;
