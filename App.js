import React from "react";
import { BrowserRouter as Router, Route, Routes as Switch, Link } from "react-router-dom";
import RoadList from "./components/AllRoads.js";
import MainPage from "./components/MainPage.js";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "./style.css";
import Home from "./components/Home.js";
import Harta from "./components/harta.js";
import Comments from "./components/comments.js";


function App() {
  
  return (
<>
<Router>
  <Switch>
    <Route path = '/' exact element = {<Home/>}></Route>
    <Route path = '/harta' exact element = {<Harta/>}></Route>
    <Route path = '/comments' exact element = {<Comments/>}></Route>
  </Switch>
</Router>
</>
  );
   }
 
export default App;