import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";
import MyMapComponent from "./showMap";
import Navigation from "./Navigation";
import * as routes from "../constants/routes";
import HomePage from "./Home";
import AboutPage from "./AboutPage";
import Map from "./Map";
import SignIn from "./SignIn";

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ABOUT} component={() => <AboutPage />} />
      <Route
        exact
        path={routes.MYMAPURL}
        component={() => (
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        )}
      />
      <Route exact path={routes.MAP} component={() => <Map />} />
      <Route exact path={routes.SIGNIN} component={() => <SignIn />} />
    </div>
  </Router>
);

export default App;
