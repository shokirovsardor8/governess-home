import AboutCompany from "./pages/AboutCompany";
import Footer from "./Footer";
import Home from "./Home";
import MyNavbar from "./MyNavbar";
import { Routes, Route, Router } from "react-router-dom";
import Autsorsing from "./pages/Autsorsing";
import Kombinat from "./pages/Kombinat";
import Keytering from "./pages/Keytering";
import AllMenuTable from "./pages/AllMenuTable";

function App() {
  return (
    <div className="App">
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutCompany />} />
        <Route path="/autsorsing" element={<Autsorsing />} />
        <Route path="/kombinat" element={<Kombinat />} />
        <Route path="/keytering" element={<Keytering />} />
        <Route path="/daily" element={<AllMenuTable />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
