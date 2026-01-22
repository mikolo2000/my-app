import Button from "../components/button";
import Footer from "../components/footer";
import FrontCard from "../components/FrontCard";
import ListItem from "../components/ListItem";
import PaymentCard from "../components/PaymentCard";
import SalesItem from "../components/SalesItem";
import InputText from "../components/InputText";
import Slider from "../components/MovingElement";
import "../styles/App.css";
import { FaChevronRight, FaImage } from "react-icons/fa";
import Slider2 from "../components/Slider2";
function Finance() {
  return (
    <>
      <section className="main">
        <h1>Finance</h1>
        <FrontCard />
        <div className="listContainer">
          <ListItem
            majorText="Finance"
            minorText="Jan 20th, 03:20:23"
            spanText=" "
            icon={<FaImage className="icons" />}
            button={<FaChevronRight className="icons chevron" size={14} />}
            styleS="circle"
          />
          <ListItem
            majorText="Finance"
            minorText="Jan 27th, 03:20:23"
            spanText=" "
            icon={<FaImage className="icons" />}
            button={<FaChevronRight className="icons chevron" size={14} />}
            styleS="circle"
          />
        </div>
        <PaymentCard />
        <SalesItem />
        <div className="listContainer">
          <ListItem
            icon={<FaImage className="icons" />}
            button={<Button name="yes" />}
          />
          <ListItem
            icon={<FaImage className="icons" />}
            button={<FaChevronRight className="icons chevron" size={14} />}
          />
        </div>

        <div className="before">
          <div className="sliderContainer1">
            <Slider />
          </div>
          <div className="sliderContainer2">
            <Slider2 />
          </div>
        </div>

        <Button name="mikolo" />
        <InputText
          type="email"
          onChange={(val) => {
            console.log(val);
          }}
        />
      </section>
      <section className="theFoot">
        <Footer />
      </section>
    </>
  );
}

export default Finance;
