import React from "react";
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav } from "shards-react";
import { NavItem, NavLink } from "shards-react";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart)

export default class NavExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapseOpen: false
    };
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar type="dark" theme="dark" expand="md">
          <NavbarBrand tag={Link} to="/">Alex's Cakes</NavbarBrand>
          <Nav navbar className="ml-auto">  
            <NavItem>
              <NavLink active tag={Link} to="/cart">
                <FontAwesomeIcon icon="shopping-cart" />
              </NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    );
  }
}