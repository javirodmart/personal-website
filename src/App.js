import React from "react";
import NaviBar from "./components/NavBar";
import Home from "./components/Home";
import Business from "./components/Business";
import Personal from "./components/Personal";
import {Switch, Route} from 'react-router-dom'
import { Link } from "react-router-dom";


function App() {
const name = <h1 className="name">Javier Rodriguez</h1>
  return (
   <>
   
     <Switch>
      <Route exact path="/">
        
        <Home />
      </Route>
      <Route path="/business">
        <NaviBar />
        <Business />
      </Route>
      <Route to="/personal">
      <NaviBar />
        <Personal />
      </Route>
     </Switch>
   </>
  );
}

export default App;
