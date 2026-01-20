import { Route, Routes, Link } from "react-router-dom";
import "./styles/theme.css";
import "./styles/App.css";

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
      
    </>
  );
}

export default App;
