const ListItem = ({
  image,
  icon,
  majorText,
  minorText,
  spanText,
  button,
  chevonRight,
}) => {
  return (
    <>
      <div className="listContainer">
        <div className="listItems">
          <div className="listImage">{image || icon || "This is it"}</div>
          <div className="listTexts">
            <p className="majorText">
              {majorText || " i don't like what i am seeing"}
              <span className="spanText">{spanText || " 🪙 6% Reduction"}</span>
            </p>
            <p className="minorText">
              {minorText ||
                "instant Access to Christmass Travel card- Apply by Jan 31, 2026"}
            </p>
          </div>
          <div className="listButton">{button || chevonRight || ""}</div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
