import React from "react";
import { Link, Outlet } from "react-router-dom";
export const News = () => {
  return (
    <>
      <nav>
        <Link to="/news/car-news">CarNews</Link>
        <Link to="/news/car-collections">CarCollections</Link>
      </nav>
      <Outlet />
    </>
  );
};
