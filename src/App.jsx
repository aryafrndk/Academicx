import { Routes, Route } from "react-router-dom";

import NavbarComponents from "./components/NavbarComponent";
import FooterComponents from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratPage from "./pages/SyaratPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <div>
      <NavbarComponents />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syarat" Component={SyaratPage} />
      </Routes>

      <FooterComponents />
    </div>
  );
}
export default App;
