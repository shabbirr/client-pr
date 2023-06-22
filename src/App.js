import About from "./components/About/About";
import Home from "../src/components/Home/Home";
import Product from "../src/components/Product/Product";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Product />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
