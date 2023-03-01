import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./naav.module.scss";

import { AiOutlineShoppingCart } from "react-icons/ai";

const Naav = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar expand="lg" className={`${styles.navBar} fixed-top bg-secondary`}>
        <Container>
          <Navbar.Brand>
            <NavLink to="/" className={`${styles.navLink} text-uppercase`}>
              Ecommerce Panel
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            

              <NavLink
                to="/cart"
                className={`${styles.navLink} ${styles.cartIcon}`}
              >
                <AiOutlineShoppingCart size={23} />{" "}
                <div className={styles.cartLength}>
                  <h6>{cart?.length}</h6>
                </div>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Naav;

