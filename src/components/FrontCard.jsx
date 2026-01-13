import "../styles/App.css";
import { MdVerifiedUser, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "./button";

function FrontCard() {
  return (
    <>
      <div className="frontCardBoarder">
        <div className="frontCard">
          <div className="top">
            <div className="topLeft">
              <MdVerifiedUser color="black" size="14" />
              <p>Available Balance</p>
            </div>
            <div className="topRight">
              <Link>
                <p>Transaction History </p>
                <MdChevronRight color="black" size="24" />
              </Link>
            </div>
          </div>
          <div className="bottom">
            <span className="topLeft">
              <p> ****</p> <MdChevronRight color="black" size="24" />
            </span>
            <Button name="+Add Money" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontCard;
