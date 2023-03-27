import { Navbar } from "./components/Navbar";
import "./App.css";

// TODO: Style p, span, h1, h2, h3, h4, h5, h6

function App() {
  return <>
    <header>
      <Navbar />
    </header>
    <main>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </main>
    <footer></footer>
  </> 
}

export default App;
