import Footer from "../components/footer";
import FrontCard from "../components/FrontCard";
import PaymentCard from "../components/PaymentCard";
import SalesItem from "../components/SalesItem";
import "../styles/App.css";
function Home() {
  return (
    <>
      <section>
        <FrontCard />
        <PaymentCard />
        <SalesItem />
        <Footer />
      </section>
    </>
  );
}

export default Home;
