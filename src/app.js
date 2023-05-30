import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/index";
import Footer from "./components/footer/index";
import Wrapper from "./components/wrapper/index";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import ResumePage from "./pages/resumepage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={ResumePage} />
            <Route exact path="/portfolio" component={Portfolio} /> 
            <Route exact path="/contact" component={Contact} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
