const ElementCard = ({ icon, label, onClick }) => {
  return (
    <>
      <div className="elementCard" onClick={onClick}>
        <div className="eleContainer">{icon}</div>
        <p>{label}</p>
      </div>
    </>
  );
};

export default ElementCard;
