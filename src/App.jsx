import "./App.css";
import {
  NavBar,
  Home,
  Services,
  About,
  Contact,
  Mission,
  Footer,
  Staffs,
} from "./components";
import { BrowserRouter } from "react-router-dom";
import "./tailwind.css";
import Hero from "./components/Hero/Hero";
import Ourservices from "./components/OurServices/Ourservices";

function App() {
  return (
    <BrowserRouter>
       <NavBar />
          {/* <Home /> */}
        <Hero />
        <Ourservices />
        {/* <Services /> */}
        <About />
        <Mission />
        <Staffs />
        <Contact />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
