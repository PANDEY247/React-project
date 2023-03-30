import React from "react";
import { Link, Outlet} from "react-router-dom";
export const NewCars = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search new cars"/>
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
