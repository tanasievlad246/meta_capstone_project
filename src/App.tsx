import { Navbar } from "./components/Navbar";
import "./App.css";
import { HeroSection } from "./components/HeroSection";
// TODO: Style p, span, h1, h2, h3, h4, h5, h6

function App() {
  return <>
    <header>
      <Navbar />
    </header>
    <main className="h-screen">
      <HeroSection />
    </main>
    <footer></footer>
  </> 
}

export default App;
