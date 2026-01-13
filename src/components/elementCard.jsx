const ElementCard = ({ icon, label }) => {
  return (
    <>
      <div className="elementCard">
        <div className="eleContainer">{icon}</div>
        <p>{label}</p>
      </div>
    </>
  );
};

export default ElementCard;
