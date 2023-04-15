import React from "react";
import { useNavigate } from "react-router-dom";
import { Default } from "../Default";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <Default>
      <div>Welcome to Spyeye</div>
      <button
        style={{ display: "block" }}
        onClick={() => navigate("order-summary")}
      >
        Know-More
      </button>
    </Default>
  );
};
