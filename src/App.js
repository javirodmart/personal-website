import Nav from "./componets/Navbar";
import Home from "./componets/Home";
import "./App.css"
import { Redirect, Route, Router, Switch } from "react-router-dom";
import Footer from "./componets/Footer";
import About from "./componets/About";
import Resume from "./componets/Resume";
import Contact from "./componets/Contact";
import Portfolio from "./componets/Portfolio";
import Blog from "./componets/Blog";



function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
