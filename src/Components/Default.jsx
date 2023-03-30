import React from "react";
export const Default = (props) => {
  return <div className="header">
  <div className="d-flex justify-content-between">

    <h1>konsavahan</h1>
  </div>

    <div className="content">
    {props.childern}


    </div>
  </div>;
};
