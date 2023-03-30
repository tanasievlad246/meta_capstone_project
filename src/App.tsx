import { Navbar } from "./components/Navbar";
import "./App.css";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookTable } from "./pages/BookTable";
// TODO: Style p, span, h1, h2, h3, h4, h5, h6

function App() {
  
  return <>
    <header>
      <Navbar />
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booktable" element={<BookTable />} />
    </Routes>
    <Footer />
  </> 
}

export default App;
