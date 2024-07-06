import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink, useLocation } from "react-router-dom";
import React from "react";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const changeBackgroundColor = () => {
    if (window.scrollY > 10 || expanded) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);

    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, [expanded]);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""} expanded={expanded} onToggle={handleToggle}>
        <Container>
          <Navbar.Brand href="/" className="fs-3 fw-bold">
            Academicx
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center mb-3">
              {navLinks.map((link) => (
                <div className="nav-link" key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    end
                    onClick={handleNavLinkClick}
                  >
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
            <div className="text-center">
              <button
                className={`btn rounded-5 ${
                  changeColor || location.pathname !== "/" ? "btn-outline-dark" : "btn-outline-light"
                }`}
              >
                Join with Us
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
