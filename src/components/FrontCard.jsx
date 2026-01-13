import "../styles/App.css";
import {
  MdVerifiedUser,
  MdChevronRight,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "./button";
import { useState } from "react";

function FrontCard() {
  const [showBalance, setShowBalance] = useState(true);
  return (
    <>
      <div className="frontCardBoarder">
        <div className="frontCard">
          <div className="top">
            <div className="topLeft">
              <MdVerifiedUser size={14} /> <p> Available Balance{"  "}</p>
              <a
                href="*"
                onClick={(e) => {
                  e.preventDefault();
                  setShowBalance(!showBalance);
                }}
              >
                {" "}
                {showBalance ? (
                  <MdVisibilityOff size="14" />
                ) : (
                  <MdVisibility />
                )}{" "}
              </a>
            </div>
            <div className="topRight">
              <Link>
                <p>Transaction History </p>
                <MdChevronRight size="20" />
              </Link>
            </div>
          </div>
          <div className="bottom">
            <span className="topLeft">
              <p> {showBalance ? "****" : "123455.23"}</p>{" "}
              <MdChevronRight size="20" />
            </span>
            <Button name="+Add Money" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontCard;
