import Button from "../components/button";
import Footer from "../components/footer";
import FrontCard from "../components/FrontCard";
import ListItem from "../components/ListItem";
import PaymentCard from "../components/PaymentCard";
import SalesItem from "../components/SalesItem";
import "../styles/App.css";
import { FaImage } from "react-icons/fa";
function Home() {
  return (
    <>
      <section>
        <FrontCard />
        <PaymentCard />
        <SalesItem />
        <ListItem
          icon={<FaImage className="icons" />}
          button={<Button name="yes" />}
        />
        <Footer />
      </section>
    </>
  );
}

export default Home;
