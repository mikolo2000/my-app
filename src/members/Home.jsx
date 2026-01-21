import Button from "../components/button";
import Footer from "../components/footer";
import FrontCard from "../components/FrontCard";
import ListItem from "../components/ListItem";
import PaymentCard from "../components/PaymentCard";
import SalesItem from "../components/SalesItem";
import InputText from "../components/InputText";
import ThemeButton from "../components/themeButton";
import Slider from "../components/MovingElement";
import "../styles/App.css";
import { FaChevronRight, FaImage } from "react-icons/fa";
import Slider2 from "../components/Slider2";
function Home() {
  return (
    <>
      <section className="main">
        <FrontCard />
        <ListItem
          majorText="OWealth Interest Earned"
          minorText="Jan 20th, 03:20:23"
          spanText=" "
          icon={<FaImage className="icons" />}
          button={<FaChevronRight className="icons chevron" size={14} />}
          styleS="circle"
        />
        <ListItem
          majorText="OWealth Interest Earned"
          minorText="Jan 20th, 03:20:23"
          spanText=" "
          icon={<FaImage className="icons" />}
          button={<FaChevronRight className="icons chevron" size={14} />}
          styleS="circle"
        />
        <PaymentCard />
        <SalesItem />
        <ListItem
          icon={<FaImage className="icons" />}
          button={<Button name="yes" />}
        />
        <ListItem
          icon={<FaImage className="icons" />}
          button={<FaChevronRight className="icons chevron" size={14} />}
        />
        <div className="before">
          <Slider />
          <Slider2 />
        </div>

        <Button name="mikolo" />
        <InputText
          type="email"
          onChange={(val) => {
            console.log(val);
          }}
        />
        <ThemeButton />
      </section>
      <section className="theFoot">
        <Footer />
      </section>
    </>
  );
}

export default Home;
