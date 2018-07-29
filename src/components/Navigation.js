import React from "react";
import { Link } from "react-router-dom";

import * as routes from "../constants/routes";
import SignOutButton from "./SignOut";

const Navigation = () => (
  <div>
    <ul>
      <li className="list-group-item list-group-item-info">
        <Link to={routes.HOME}>Home</Link>
      </li>
      <li className="list-group-item list-group-item-info">
        <Link to={routes.MYMAPURL}>My Map</Link>
      </li>
      <li className="list-group-item list-group-item-info">
        <Link to={routes.ABOUT}>About Us</Link>
      </li>
      <li className="list-group-item list-group-item-info">
        <Link to={routes.MAP}>MAP</Link>
      </li>
      <li className="list-group-item list-group-item-info">
        <Link to={routes.SIGNIN}>Sign In</Link>
      </li>
      <li className="list-group-item list-group-item-info"><SignOutButton /></li>
    </ul>
  </div>
);

export default Navigation;
