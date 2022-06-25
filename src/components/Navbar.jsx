import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function navbar() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand>The Cocktail DB</Navbar.Brand>
        <Link to="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Link to="/about">
          <Navbar.Brand>About</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
}

export default navbar;
