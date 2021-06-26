import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Styles from "./NavbarComp.module.css";

const NavbarComp = () => {
  return (
    <div className="mb-5">
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink style={{ color: "white", textDecoration: "none" }} to="/">
              TECHNEXT
            </NavLink>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavLink
                exact
                style={{
                  color: "rgba(255, 255, 255, 0.623)",
                  textDecoration: "none",
                  padding: "0px 10px",
                }}
                activeClassName={Styles.active__navbar}
                to="/"
              >
                All Posts
              </NavLink>
              <NavLink
                exact
                style={{
                  color: "rgba(255, 255, 255, 0.623)",
                  textDecoration: "none",
                  padding: "0px 10px",
                }}
                activeClassName={Styles.active__navbar}
                to="/profile"
              >
                Profile
              </NavLink>
              <NavLink
                exact
                style={{
                  color: "rgba(255, 255, 255, 0.623)",
                  textDecoration: "none",
                  padding: "0px 10px",
                }}
                activeClassName={Styles.active__navbar}
                to="/user-list"
              >
                UserList
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
