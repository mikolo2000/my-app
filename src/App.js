import { Route, Routes } from "react-router-dom";
import "./styles/theme.css";
import "./styles/App.css";
import Home from "./members/Home";
import Finance from "./members/finance";
import Footer from "./components/footer";
import Notifications from "./members/notifications";
//192.168.137.55
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
      <h1>My App</h1>
      <section className="theFoot">
        <Footer />
      </section>
    </>
  );
}

export default App;
