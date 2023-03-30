import { Navbar } from "./components/Navbar";
import "./App.css";
import { HeroSection } from "./components/HeroSection";
import { Specials } from "./components/Specials";
import { Testimonials } from "./components/Testimonials";
import { About } from "./components/About";
// TODO: Style p, span, h1, h2, h3, h4, h5, h6

function App() {
  const specials = [
    {name: 'Greel Salad', price: 12.99, description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ', imageSrc: require('/home/tanasie_vlad/projects/meta_capstone_project/src/assets/greek salad.jpg')},
    {name: 'Bruscheta', price: 5.99, description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.', imageSrc: require('/home/tanasie_vlad/projects/meta_capstone_project/src/assets/lemon dessert.jpg')},
    {name: 'Lemon Desert', price: 5.00, description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.', imageSrc: require('/home/tanasie_vlad/projects/meta_capstone_project/src/assets/restauranfood.jpg')},
  ]
  return <>
    <header>
      <Navbar />
    </header>
    <main className="h-screen w-full">
      <HeroSection />
      <Specials menuItems={specials} />
      <Testimonials />
      <About />
    </main>
    <footer></footer>
  </> 
}

export default App;
