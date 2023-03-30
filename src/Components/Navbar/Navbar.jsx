import React from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textdecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <>
      <Container>
        <nav
          style={{
            display:"flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 0",
          }}
        >

          <div style={{  display:"flex", alignItems: "center" }}>
          <h2 style={{ margin: 0, marginRight: "1rem" }}>
          <img src={"logo"} alt=" " style={{height:"100px" ,width: "auto"}} /></h2>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <li style={{ marginRight: "1rem" }}>
                <NavLink style={navLinkStyles} to="/">
                  Home
                </NavLink>
              </li>
              <li style={{ marginRight: "1rem" }}>
                <NavLink style={navLinkStyles} to="/about">
                  About
                </NavLink>
              </li>
              <li style={{ marginRight: "1rem" }}>
                <NavLink style={navLinkStyles} to="ourVentures">
                  Our Ventures
                </NavLink>
              </li>
              <li style={{ marginRight: "1rem" }}>
                <NavLink style={navLinkStyles} to="/news">
                  News & Reviews
                </NavLink>
              </li>
              <li style={{ marginRight: "1rem" }}>
                <NavLink style={navLinkStyles} to="/newcars">
                  NewCars
                </NavLink>
              </li>
            </ul>
          </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
         
          
        </nav>
      </Container>
    </>
  );
}
export default Navbar;
