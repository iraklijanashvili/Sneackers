import NavBar from "./NavBar";
import Collections from "./Collections";
import Men from "./Men";
import Home from "./Home";
import Women from "./Women";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import { Routes, Route } from "react-router-dom";
import { Container } from "./Home";

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
