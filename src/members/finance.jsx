// import Button from "../components/button";
// import Footer from "../components/footer";
import FrontCard from "../components/FrontCard";
// import ListItem from "../components/ListItem";
// import PaymentCard from "../components/PaymentCard";
// import SalesItem from "../components/SalesItem";
// import InputText from "../components/InputText";
// import Slider from "../components/MovingElement";
import { useState } from "react";
import "../styles/App.css";
import { FaChevronRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
// import Slider2 from "../components/Slider2";
function Finance() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hide, setHide] = useState("");
  const toggle = () => {
    // Toggle logic here
    setHide(isExpanded ? "" : "hide");
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <section className="main">
        <h1>Finance</h1>
        <FrontCard />
        <table className="financeTable">
          <div className="tableHead">
            <thead>Available Balance</thead>
          </div>
          <tbody>
            <tr>
              <td>Wallet</td>
              <td>$1,234.56</td>
            </tr>
            <tr>
              <td>Wallet</td>
              <td>$1,234.56</td>
              <td>
                + N 0.09{" "}
                <span>
                  <FaChevronRight />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="financeTable lower">
          <div className="tableHead">
            <thead>Available Balance</thead>
          </div>
          <tbody>
            <tr>
              <td>Wallet</td>
              <td>$1,234.56</td>
            </tr>
            <tr className={hide}>
              <td>Wallet</td>
              <td>$1,234.56</td>
              <td>
                + N 0.09{" "}
                <span>
                  <FaChevronRight />
                </span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="iconCont">
                {isExpanded ? (
                  <FaChevronDown className="expandIcon" onClick={toggle} />
                ) : (
                  <FaChevronUp className="expandIcon" onClick={toggle} />
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  );
}

export default Finance;
