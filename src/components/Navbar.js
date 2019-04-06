import React from "react";
import { Link } from 'react-router-dom'
import { Navbar, NavbarToggler, NavbarBrand, Nav } from "shards-react";
import { NavItem, NavLink, Collapse } from "shards-react";

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
        <NavbarBrand tag={Link} to="/">Cakes</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink active tag={Link} to="/about">
                About
              </NavLink>
            </NavItem>  
            <NavItem>
              <NavLink active tag={Link} to="/cart">
                <FontAwesomeIcon icon="shopping-cart" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse> 
      </Navbar>
    );
  }
}