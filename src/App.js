import { Route, Routes, Link } from "react-router-dom";
import Button from "./components/button";
import "./styles/theme.css";
import "./styles/App.css";
import InputText from "./components/InputText";
import ThemeButton from "./components/themeButton";
import Home from "./members/Home";
//192.168.137.55
function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <h1>My App</h1>
      <Button name="mikolo" />
      <InputText
        type="email"
        onChange={(val) => {
          console.log(val);
        }}
      />
      <ThemeButton />
    </>
  );
}

export default App;
