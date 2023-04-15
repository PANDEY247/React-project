import React from "react";
import { Link, Outlet} from "react-router-dom";
export const SurveillanceProducts = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search "/>
      </div>
      <nav>
        <Link to="bestselling">bestselling</Link>
        <br></br>
        <Link to="newlaunched">newlaunched</Link>
      </nav>
      <Outlet />
    </>
  );
};
